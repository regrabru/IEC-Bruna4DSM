const { processarAlerta } = require('../src/alerta');

test("processamento completo de alerta crítico", () => {
  const resultado = processarAlerta(90);
  expect(resultado).toBe("Notificação enviada: Crítico");
});
