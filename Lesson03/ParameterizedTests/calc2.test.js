const add = require('./calc');

describe('tests for add function', () => {

  test.each([
    [10, 20, 30],
    [10, -20, -10],
    [-10, -20, -30]
  ])  
  ('add two numbers to give correct result', (n1, n2, expected) => {
    const actual = add(n1, n2);
    expect(actual).toBe(expected);
  });
});

