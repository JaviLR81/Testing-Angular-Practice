import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { RouterLink, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        AppComponent,
      ],
      // Ignorar cualquier directiva o componente que no conozca
      // En este caso ignorará el app-navbar
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pruebas-one'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pruebas-one');
  });

  // Prueba por directivas que verifica si existe
  it('Debe de tener un router outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(debugElement).not.toBeNull();
  });


  /*
  it('Debe de tenr un link a la página /medicos', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    let existe = false;

    for( const element of debugElements) {
      if(element.attributes['routerLink'] === '/medicos'){
        existe = true;
        break;
      }
    }
    expect(existe).toBeTruthy();
  });
  */


  // Errores por selectores desconocidos


});
