const ops = require('./operations');

describe('real timers', () => {

  test('use real timers [default behaviour]', done => {
    function callback(msg) {
      expect(msg).toBe('4 seconds countdown complete');
      done();
    }
    ops.countdown(callback, 4);
  });
});

