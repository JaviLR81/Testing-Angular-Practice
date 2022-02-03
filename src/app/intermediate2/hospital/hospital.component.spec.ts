import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalComponent } from './hospital.component';

describe('HospitalComponent', () => {
  let component: HospitalComponent;
  let fixture: ComponentFixture<HospitalComponent>;

  //
  beforeEach(async () => {
    // await TestBed.configureTestingModule({
    //   declarations: [ HospitalComponent ]
    // })
    // .compileComponents();
  });

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ HospitalComponent ]
    })

    fixture = TestBed.createComponent(HospitalComponent);
    component = fixture.componentInstance;

    // Disparando el ciclo de detección de cambios de Angular
    fixture.detectChanges();
  });

  it('should create and HospitalComponent', () => {
    expect(component).toBeTruthy();
  });
});
