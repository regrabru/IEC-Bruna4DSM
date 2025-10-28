const { classificarAlerta, enviarNotificacao } = require('../src/alerta');

test("classificação + notificação", () => {
  const alerta = classificarAlerta(90);
  const resultado = enviarNotificacao(alerta);
  expect(resultado).toBe("Notificação enviada: Crítico");
});
