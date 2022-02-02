import { FormBuilder } from "@angular/forms";
import { LoginForm } from "./form";


describe('Reactive Form Test', () => {

  // Get the class to instance the form
  let component: LoginForm;

  beforeEach( () => {
    
    // Satisfied the constructor
    component = new LoginForm( new FormBuilder() );
  });

  // At least two fields
  it('Should create a form with two fields email and password', () => {
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
  });


  it('The email is required', () => {

    const control = component.form.get('email');

    // Breaking the required condition
    control?.setValue('');
    // Then should be false
    expect(control?.valid).toBeFalsy();

  });

  it('The email should be valid', () => {

    const control = component.form.controls['email'];
    // const control = component.form.get('email');

    // Breaking the required condition
    control.setValue('javie@ail.com');
    expect(control.valid).toBeTruthy();

  });

});
