const calcularEndereco = require('./indentificarEndereco');

test('Calcula o endereço corretamente', () => {
    const listaComandos = [25, 52, 53, 202, 54, 402, 203, 510, 201];
    const resultado = calcularEndereco(listaComandos);
    expect(resultado).toBe(3);
});