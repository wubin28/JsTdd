const code = require('./code');

describe('test rxjs', () => {

  test('test emitStream1', done => {
    const observable = code.emitStream1();
    let expected = 100;
    observable.subscribe({
      next: data => {
        expect(data).toBe(expected); 
        expected += 100;
      },
      complete: () => done()
    })
  });

  test('test emitStream2', done => {
    const observable = code.emitStream2(5);
    observable.subscribe({
      next: data => {
        expect(data >= 0 && data < 100).toBeTruthy(); 
      },
      complete: () => done()
    })
  });

  test('test emitStream3', done => {
    const observable = code.emitStream3(0);
    observable.subscribe({
      error: err => {
        expect(err.message).toBe('Bad length');
        done(); 
      }
    })
  });
});

