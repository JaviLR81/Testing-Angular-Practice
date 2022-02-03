import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicosComponent } from './intermediate/medicos/medicos.component';
import { MedicoComponent } from './intermediate2/medico/medico.component';
import { HospitalComponent } from './intermediate2/hospital/hospital.component';
import { IncrementadorComponent } from './intermediate2/incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './advanced/navbar/navbar.component';
import { RouterMedicoComponent } from './advanced/router-medico/router-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent,
    RouterMedicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
