const ops = require('./operations');

describe('test errors from callback functions', () => {

  test('test - incorrect technique', done => {
    try {
      ops.slowOperationWithError_bad(10, 0, null);
    } 
    catch (err) {
      expect(err).toBe('Cannot sssdivide by 0');
    }
    done();
  });

  test('test - correct technique', done => {
    function testError(error) {
      expect(error).toBe('Cannot divide by 0');
      done();
    }
    ops.slowOperationWithError_good(10, 0, null, testError);
  });

});

