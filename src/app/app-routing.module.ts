import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalComponent } from './intermediate2/hospital/hospital.component';
import { IncrementadorComponent } from './intermediate2/incrementador/incrementador.component';
import { MedicoComponent } from './intermediate2/medico/medico.component';

const routes: Routes = [
  { path: 'hospital',component: HospitalComponent },
  { path: 'medicos/:id',component: MedicoComponent },
  { path: '**',component: IncrementadorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
