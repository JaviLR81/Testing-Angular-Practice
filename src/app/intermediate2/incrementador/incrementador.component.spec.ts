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

      component.leyenda = 'Progreso de carga';

      // Disparar la detección de cambios
      fixture.detectChanges();

      // Obteniendo el elemento HTML del fixture
      // que es el elemento compilado de Angular
      // query() Retorna solo 1 elemento y solo el primero que encuentre
      const elem: HTMLElement =
                  fixture.debugElement
                  .query(By.css('h3')).nativeElement;

      expect(elem.innerHTML).toContain('Progreso de carga');
    });

    it('Debe de mostrar en el input el valor del progreso',(done) => {

      component.cambiarValor(5);

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

    it('Debe de incrementar/decrementar con un click en el boton',() => {


      const botones = fixture.debugElement
                        .queryAll(By.css('.btn-primary'));

      // First button
      botones[0].triggerEventHandler('click',null);
      expect(component.progreso).toBe(45);

      // Second button
      botones[1].triggerEventHandler('click',null);
      expect(component.progreso).toBe(50);
    });

    it('En el títulod del componente debe mostrar el progreso',() => {

      const botones = fixture.debugElement
                        .queryAll(By.css('.btn-primary'));

      // First button
      botones[0].triggerEventHandler('click',null);

      fixture.detectChanges();

      const elem: HTMLElement =
                  fixture.debugElement
                  .query(By.css('h3')).nativeElement;

      expect(elem.innerHTML).toContain('45');

    });



});