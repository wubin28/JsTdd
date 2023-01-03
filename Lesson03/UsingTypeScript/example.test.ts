const funcs = require('./example');

describe("additive functions", () => {

  test('adds numbers correctly', () => {
    const expected : number = 30;
    expect(funcs.add(10, 20)).toBe(expected);
  });

  test('subtracts numbers correctly', () => {
    const expected : number = -10;
    expect(funcs.subtract(10, 20)).toBe(expected);
  });

});

describe("multiplicative functions", () => {

  test('multiplies numbers correctly', () => {
    const expected : number = 200;
    expect(funcs.multiply(10, 20)).toBe(expected);
  });

  test('divides numbers correctly', () => {
    const expected : number = 0.5;
    expect(funcs.divide(10, 20)).toBe(expected);
  });

});