import { ComponentFixture, TestBed } from '@angular/core/testing';
import { from, of } from 'rxjs';

import { PracticeComponent } from './practice.component';
import { PracticeService } from './practice.service';

describe('PracticeComponent two', () => {
  let component: PracticeComponent;

  let spy = jasmine.createSpyObj('HttpClient', { post: of({}), get: of({}) })

  let service: PracticeService = new PracticeService(spy);

  beforeEach(() => {
    component = new PracticeComponent(service);
  });


  it('Should load the fakeData array', () => {

    let fakeDataArray = ["One","Two","Three"];

    spyOn(service,'getFakeData').and.callFake( () => {
      // Debemos de emitir el doble [[]] sino toma la última posición del array y eso emite
      return from( [fakeDataArray] );
    });

    //
    component.ngOnInit();

    console.log("fakedata lenght",component.fakeData);

    expect(component.fakeData.length).toBeGreaterThan(0);
  });


});
