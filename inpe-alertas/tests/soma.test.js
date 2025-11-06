const { soma } = require('../src/sum.js')

test('soma de 2 + 3 deve ser 5', () => {
  expect(soma(2, 3)).toBe(5)
})
