import { Observable, of, from, EMPTY, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;

    // Como son pruebas unitarias no necesitamos data por eso no le pasamos el http
    // const service = new MedicosService(null);
    let service: MedicosService;

    beforeEach( () => {
      const spy = jasmine.createSpyObj('HttpClient', { post: of({}), get: of({}) })

      service = new MedicosService(spy);
      componente = new MedicosComponent(service);
    });


    it('Init: Should load the medics', () => {

      const medicos = ['Medico1','Medico2','Medico3'];

      spyOn( service, 'getMedicos' ).and.callFake( () => {
          return from([ medicos]);
      });

      // In tests the ngOnInit is not called for that
      // We should call manually
      componente.ngOnInit();

      expect(componente.medicos.length).toBeGreaterThan(0);
    });

    // Checando si el método del servicio es llamado
    // Estamos testeando la función pero como tal si es un testing del servicio
    it('Init: Should call to the server to add a new medic', () => {

      const espia = spyOn(service, 'agregarMedico').and.callFake( (medico:any) => {
        return EMPTY;
      });

      componente.agregarMedico();

      expect(espia).toHaveBeenCalled();
    });

    // Aquí si nos interesa la respuesta
    it('Init: Should add a new medic to the medics array', () => {

      const medic = {id: 1, name: 'Juan'};

      const espia = spyOn(service, 'agregarMedico').and.returnValue(
        from( [medic] )
      );

      componente.agregarMedico();

      // expect(componente.medicos.length).toBe(1);
      expect(componente.medicos.indexOf(medic)).toBeGreaterThanOrEqual(0);
    });


    // TESTING AN ERROR IN AN OBSERVABLE
    // Checando que los errores de la aplicación sean controlados de la manera esperada
    it('If fails the adition, the property mensajeError, should be equals to the service error ', () => {

      const miError = 'The medic could not be added';

      spyOn(service, 'agregarMedico').and.returnValue(
        throwError(() => miError)
      );

      componente.agregarMedico();

      expect(componente.mensajeError).toBe( miError );
    });

    //
    it('If should call to the server to delete a medic', () => {

      spyOn(window, 'confirm').and.returnValue(true);

      const espia = spyOn(service, 'borrarMedico').and.returnValue(
        // Is not important the return stament
        EMPTY
      );

      componente.borrarMedico('1');

      expect(espia).toHaveBeenCalledWith('1');
    });

    //
    it('NOT should call to the server to delete a medic', () => {

      spyOn(window, 'confirm').and.returnValue(false);

      const espia = spyOn(service, 'borrarMedico').and.returnValue(
        EMPTY
      );

      componente.borrarMedico('1');

      // Negation because the service dont was called
      expect(espia).not.toHaveBeenCalledWith('1');
    });

});
