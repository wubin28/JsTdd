const doTask = require('./task');

describe('using async/await directly', () => {

  test('task resolves if value < 0.5', async () => {
    const data = await doTask(1, 0.3);
    expect(data).toBe('Task 1 resolved');
  });

  test('task rejects if value >= 0.5', async () => {
    expect.assertions(1);
    try {
      await doTask(1, 0.5);
    }
    catch(err) {
      expect(err).toBe('Task 1 rejected');
    }
  });
});

describe('using async/await with resolves/rejects matchers', () => {

  test('task resolves if value < 0.5', async () => {
    await expect(doTask(1, 0.3))
      .resolves
      .toBe('Task 1 resolved');
  });

  test('task rejects if value >= 0.5', async () => {
    await expect(doTask(1, 0.5))
      .rejects
      .toBe('Task 1 rejected');
  });
});

