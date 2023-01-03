const add = require('./calc');

describe('tests for add function', () => {

  test('add 2 positive numbers', () => {
    const actual = add(10, 20);
    expect(actual).toBe(30);
  });

  test('add a positive and negative number', () => {
    const actual = add(10, -20);
    expect(actual).toBe(-10);
  });

  test('add two negative numbers', () => {
    const actual = add(-10, -20);
    expect(actual).toBe(-30);
  });

});

