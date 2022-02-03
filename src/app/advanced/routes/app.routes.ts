import { Routes } from "@angular/router";
import { HospitalComponent } from "src/app/intermediate2/hospital/hospital.component";
import { IncrementadorComponent } from "src/app/intermediate2/incrementador/incrementador.component";
import { MedicoComponent } from "src/app/intermediate2/medico/medico.component";


export const routes: Routes = [
  { path: 'hospital',component: HospitalComponent },
  { path: 'medicos/:id',component: MedicoComponent },
  { path: '**',component: IncrementadorComponent }
];
