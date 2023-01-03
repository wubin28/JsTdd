const ops = require('./operations');

describe('test slow operations', () => {

  test('test slow operation, incorrect technique', () => {
    function testResult(result) {
      expect(result).toBe(42);
    }
    ops.slowOperation(testResult);
  });

  test('test slow operation, correct technique', done => {
    function testResult(result) {
      expect(result).toBe(42);
      done();
    }
    ops.slowOperation(testResult);
  });

  test('test slow operation that takes parameters', done => {
    function testResult(result) {
      expect(result).toBe(30);
      done();
    }
    ops.slowOperationWithParams(10, 20, testResult);
  });
});

