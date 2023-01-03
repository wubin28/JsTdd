const doTask = require('./task');

describe('test promises using then/catch', () => {

  test('task resolves if value < 0.5', () => {
    return doTask(1, 0.3).then(data => {
      expect(data).toBe('Task 1 resolved');
    });
  });

  test('task rejects if value >= 0.5', () => {
    expect.assertions(1);
    return doTask(1, 0.5).catch(err => {
      expect(err).toBe('Task 1 rejected');
    });
  });
});

describe('test promises using resolves/rejects matchers', () => {

  test('task resolves if value < 0.5', () => {
    return expect(doTask(1, 0.3))
      .resolves
      .toBe('Task 1 resolved');
  });

  test('task rejects if value >= 0.5', () => {
    return expect(doTask(1, 0.5))
      .rejects
      .toBe('Task 1 rejected');
  });
});

