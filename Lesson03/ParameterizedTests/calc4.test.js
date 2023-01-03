const add = require('./calc');

describe('tests for add function', () => {

  test.each `
    n1      | n2     | exp
    ${10}   | ${20}  | ${30}
    ${10}   | ${-20} | ${-10}
    ${-10}  | ${-20} | ${-30}
  ` 
  ('add $n1 and $n2 to give $exp', ({n1, n2, exp}) => {
    const actual = add(n1, n2);
    expect(actual).toBe(exp);
  });
});