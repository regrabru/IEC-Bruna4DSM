const { classificarAlerta } = require('../src/alerta');

test("alerta alto", () => {
  expect(classificarAlerta(70)).toBe("Alto");
});
