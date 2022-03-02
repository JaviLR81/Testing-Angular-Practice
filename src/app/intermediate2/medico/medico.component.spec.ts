import { MedicoComponent } from "./medico.component";

// Estas importaciones son necesrias para que Angular pueda trabajar de manera nativa
// Con todo lo que tiene el HTML, el ciclo de detección de cambios
// La clase TestBed
// ComponentFixture = Como JQUERY

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoService } from "../medico.service";
import { HttpClientModule } from "@angular/common/http";

describe('Medico Component Integration', () => {

  let component: MedicoComponent;

  // Poder tener acceso al HTML y al DOM
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach( () => {

    // Este objeto es un módulo de testing
    // Solo lo que necesitamos para las pruebas de este componente y su HTML
    TestBed.configureTestingModule({
      declarations: [ MedicoComponent ],
      // No estoy tan seguro de esto ya que esta proveido en el root el servicio creo que esto es por si queremos segmentar
      // Los servicios
      providers: [MedicoService],
      imports: [HttpClientModule]
    })

    // Crear componente compilado y procesado por TestBed
    fixture = TestBed.createComponent( MedicoComponent );


    // Ya tenemos la instancia del componente lista para usar todos sus métodos
    // Lo que sea que definamos en ese componente y ya tenemos acceso igualmente al HTML y todo lo demas relacionado con Angular
    component = fixture.componentInstance;
  });


  it('Component Should be created', () => {
    expect( component ).toBeTruthy();
  })

  it('Should be return the medic name', () => {

    // Con esta prueba vemos que el fixture funciona correctamente
    const name = 'Barak';
    const message =   component.saludarMedico(name);

    expect( message ).toContain(name);
  })

});
