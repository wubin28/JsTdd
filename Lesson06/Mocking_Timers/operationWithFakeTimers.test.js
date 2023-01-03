const ops = require('./operations');

describe('fake timers', () => {

  afterEach(() => {
    jest.useRealTimers();
  });

  test('using fake timers', () => {

    jest.useFakeTimers();
    const spy = jest.spyOn(global, 'setTimeout');

    ops.countdown(() => {}, 4);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith(expect.any(Function), 4_000);
    
    spy.mockRestore();
  });

  test('using real timers again', done => {
    function callback(msg) {
      expect(msg).toBe('4 seconds countdown complete');
      done();
    }
    ops.countdown(callback, 4)
  });
});

