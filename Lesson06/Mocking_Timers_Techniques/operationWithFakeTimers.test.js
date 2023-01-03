const ops = require('./operations');

describe('fake timers', () => {

  afterEach(() => {
    jest.useRealTimers();
  });

  test('running all timers to completion', () => {

    jest.useFakeTimers();
    
    const dummyCallback = jest.fn();
    ops.countdown(dummyCallback, 4);

    expect(dummyCallback).not.toBeCalled();
    
    jest.runAllTimers();
    
    expect(dummyCallback).toBeCalled();
    expect(dummyCallback).toHaveBeenCalledTimes(1);
  });

  test('advancing timers', () => {

    jest.useFakeTimers();

    const dummyCallback1 = jest.fn();
    const dummyCallback2 = jest.fn();
    const dummyCallback3 = jest.fn();
    
    ops.countdown(dummyCallback1, 10);
    ops.countdown(dummyCallback2, 20);
    ops.countdown(dummyCallback3, 30);

    expect(dummyCallback1).not.toBeCalled();
    expect(dummyCallback2).not.toBeCalled();
    expect(dummyCallback3).not.toBeCalled();
    
    jest.advanceTimersByTime(10_000);
    expect(dummyCallback1).toHaveBeenCalledTimes(1);
    expect(dummyCallback2).not.toBeCalled();
    expect(dummyCallback3).not.toBeCalled();

    jest.advanceTimersByTime(10_000);
    expect(dummyCallback1).toHaveBeenCalledTimes(1);
    expect(dummyCallback2).toHaveBeenCalledTimes(1);
    expect(dummyCallback3).not.toBeCalled();

    jest.advanceTimersByTime(10_000);
    expect(dummyCallback1).toHaveBeenCalledTimes(1);
    expect(dummyCallback2).toHaveBeenCalledTimes(1);
    expect(dummyCallback3).toHaveBeenCalledTimes(1);
  });
});

