const code = require('./code');

describe('test rxjs', () => {

  test('test Observable that emits single value', done => {
    const observable = code.emitSingleValue();
    observable.subscribe({
      next: data => {
        expect(data).toBe(42); 
        done();
      }
    })
  });
});

