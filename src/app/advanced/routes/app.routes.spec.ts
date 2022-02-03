import { MedicoComponent } from "src/app/intermediate2/medico/medico.component";
import { routes } from "./app.routes";


describe('Rutas principales', () => {

  it('Debe de existir la ruta /medico/:id', () => {

    expect(routes).toContain({
      path: 'medicos/:id',component: MedicoComponent
    });

  });

});
