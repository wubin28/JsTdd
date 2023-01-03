const ops = require('./operations');

describe('test very slow operations', () => {

  test('test using default timeout', done => {
    function testResult(result) {
      expect(result).toBe(42);
      done();
    }
    ops.verySlowOperation(testResult);
  });

  test('test using specific timeout', done => {
    function testResult(result) {
      expect(result).toBe(42);
      done();
    }
    ops.verySlowOperation(testResult);
  }, 10_000);

  test('test using general timeout for all tests', done => {
    function testResult(result) {
      expect(result).toBe(42);
      done();
    }
    ops.verySlowOperation(testResult);
  });
});

