const sum = require('./01-sum.js');


//test: Para indicar que es una función de prueba,el mensaje es el escenario de la prueba
// arrow function.
// expect, la cual validará 
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
