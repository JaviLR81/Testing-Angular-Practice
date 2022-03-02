import { message } from "./string";

// Agrupador de pruebas
describe('Pruebas de strings', () => {

  // Mi prueba específica
  it('Should return an string', () => {
      const resp = message('Javi');

      // Validando que el tipo de dato sea uno en especifico
      expect( typeof resp ).toBe('string');
  });

  it('Should return a greeting with the provided name', () => {
    const name = 'Juan';
    const resp = message(name);
    expect( resp ).toContain(name);
  });

});
