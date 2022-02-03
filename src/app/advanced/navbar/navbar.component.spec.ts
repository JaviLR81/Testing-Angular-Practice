import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Debe de tener un link a la página de medicos', () =>{

    //No olvidarse de importar el módulo de testing module
    const elements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    console.log(elements);

    let existe = false;

    for(const elem of elements){
      if(elem.attributes['routerLink'] === '/medicos'){
        existe = true;
        break;
      }
    }

    expect(existe).toBeTruthy();

  })



});
