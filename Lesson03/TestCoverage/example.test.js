const getGrade = require('./example');

// This suite of tests is deliberately insufficient.
// It doesn't test for invalid marks, or for exam failure.
describe("getGrade returns the correct grade", () => {

  test('over 70 is grade A', () => {
    expect(getGrade(75)).toBe('A');
  });

  test('exactly 70 is grade A', () => {
    expect(getGrade(70)).toBe('A');
  });

  test('60s is grade B', () => {
    expect(getGrade(65)).toBe('B');
  });

  test('exactly 60 is grade B', () => {
    expect(getGrade(60)).toBe('B');
  });

  test('50s is grade C', () => {
    expect(getGrade(55)).toBe('C');
  });

  test('exactly 50 is grade C', () => {
    expect(getGrade(50)).toBe('C');
  });

});
