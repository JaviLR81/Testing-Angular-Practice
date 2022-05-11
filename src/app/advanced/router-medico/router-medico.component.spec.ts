import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { EMPTY, empty, from, Observable, Subject } from 'rxjs';

import { RouterMedicoComponent } from './router-medico.component';


class FakeRouter {
  // Simulando el navigate del router
  navigate(params: any) {}
}

class FakeActivatedRoute {

  // Simulando la propiedad
  // params: Observable<any> = EMPTY;

  // Nos permite insertar valores a un observable
  private subject = new Subject();

  // Insertandole el nuevo valor
  push(value: any){
    this.subject.next( value );
  }

  // Regresandol como un observable
  get params(){
    return this.subject.asObservable();
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],

      // Necesitamos importarlos por que estan siendo usados por el componente
      // Por eso debemos de importarlos aquí
      providers: [
        // Substituyendo la clase normal por una Custom
        // Router,
        { provide: Router, useClass: FakeRouter },
        // ActivatedRoute
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{id : 'nuevo'}])
          }
          // useClass: FakeActivatedRoute
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Reemplazar servicios de angular por servicios falsos
  it('Debe de redireccionar a medico cuando se guarde', () => {
    // Indicando con Testbed que esta clase de los providers se incluya se inyecte
    const router = TestBed.inject(Router);
    const spy = spyOn( router, 'navigate' );

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico','123']);

  });

  // Reemplazar servicios de angular por servicios falsos
  it('Debe de colocar el id = nuevo', () => {
    component = fixture.componentInstance;

    // Se inyecta con Testbed el AcivatedRute y se le agrega el valor al observable
    // const activatedRoute: FakeActivatedRoute = TestBed.inject(ActivatedRoute);
    // activatedRoute.push({id: 'nuevo'});

    // Other solution
    // const activatedRoute = TestBed.inject(ActivatedRoute);
    // (<FakeActivatedRoute>(<any>activatedRoute)).push({id: 'nuevo'});

    TestBed.inject(ActivatedRoute)

    expect(component.id).toBe('nuevo');

  });

});
