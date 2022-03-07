import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';

// Nos ayuda a buscar selectores facilmente
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],

            // Para los tests de ngModel necesitamos el FormsModule
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;
    });


    it('Debe mostrar la leyenda', () => {

      // Por defecto cuando se declara una variable siempre es undefined
      // en las pruebas aunque tenga un valor de asignación
      component.leyenda = 'Progreso de carga';

      // Disparar la detección de cambios
      fixture.detectChanges();

      // Obteniendo el elemento HTML del fixture
      // que es el elemento compilado de Angular
      // query() Retorna solo 1 elemento y solo el primero que encuentre
      const elem: HTMLElement =
                  fixture.debugElement
                  .query(By.css('h3')).nativeElement;

      // Lo que se encuentra dentro de este elemento h3 contenga
      // Evaluando el contenido interno
      expect(elem.innerHTML).toContain('Progreso de carga');
    });

    it('Debe de mostrar en el input el valor del progreso',(done) => {

      component.cambiarValor(5);

      // Esto tiene una duración de ejecución
      fixture.detectChanges();

      // Cuando ya termine la detección de cambios
      // Y se encuentre lista para ser evaluada
      fixture.whenStable().then( () => {
        const input = fixture.debugElement
                      .query(By.css('input'));

        const elem = input.nativeElement;

        // Esto se estaba evaluando antes de terminar
        // el ciclo de detección de cambios
        expect(elem.value).toBe( '55' );

        done();
      });
    });

    // Confirmar que los botones tengan los eventos deseados
    it('Debe de incrementar/decrementar con 5 con un (click) en el boton',() => {

      const botones = fixture.debugElement
                        .queryAll(By.css('.btn-primary'));
      // First button
      botones[0].triggerEventHandler('click',null);
      expect(component.progreso).toBe(45);

      // Second button
      botones[1].triggerEventHandler('click',null);
      expect(component.progreso).toBe(50);
    });

    // Verificar cambios en un elemento HTML tras eventos
    it('En el título del componente debe mostrar el progreso',() => {

      const botones = fixture.debugElement
                        .queryAll(By.css('.btn-primary'));

      // First button
      botones[0].triggerEventHandler('click',null);

      // Reenderizando nuevos valores
      fixture.detectChanges();

      // Checando que el nuevo progreso se haya renderizado en el HTML
      const elem: HTMLElement =
                  fixture.debugElement
                  .query(By.css('h3')).nativeElement;

      // Como verificamos el html es un string lo que estamos buscando para comparar
      expect(elem.innerHTML).toContain('45');
    });



});
