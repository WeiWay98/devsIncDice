const divideNumbers = require('./dividenumbers');

test('Divide two positive numbers', () => {
  expect(divideNumbers(10, 2)).toBe(5);
});

test('Divide a positive number by zero', () => {
  expect(() => divideNumbers(10, 0)).toThrow('Division by zero is not allowed.');
});

test('Divide zero by a positive number', () => {
  expect(divideNumbers(0, 5)).toBe(0);
});

test('Divide a positive number by a negative number', () => {
  expect(divideNumbers(10, -2)).toBe(-5);
});

test('Divide two negative numbers', () => {
  expect(divideNumbers(-8, -2)).toBe(4);
});

test('Divide a number by a string', () => {
  expect(() => divideNumbers(10, 'hello')).toThrow('Both arguments must be numbers.');
});

test('Divide two strings', () => {
  expect(() => divideNumbers('hello', 'world')).toThrow('Both arguments must be numbers.');
});

test('Divide a number by undefined', () => {
  expect(() => divideNumbers(6, undefined)).toThrow('Both arguments must be numbers.');
});