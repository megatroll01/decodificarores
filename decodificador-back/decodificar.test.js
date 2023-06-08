const  senhaValidar  = require('./decodificar.js');


describe('senhaValidar', () => {
  test('deve retornar true para senha válida', () => {
    expect(senhaValidar(334478)).toBe(true);
  });

  test('deve retornar false para senha inválida', () => {
    expect(senhaValidar(123456)).toBe(false);
  });
});