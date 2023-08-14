const { sum, substract, multiply, divide }  = require('./02-calc')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
