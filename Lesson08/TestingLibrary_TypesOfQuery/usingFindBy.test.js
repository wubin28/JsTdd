import {screen} from '@testing-library/dom'

describe('findByXxx', () => {

  beforeEach(() => {
    document.body.innerHTML = "<div>Hello</div>";
  });

  test('Find element successfully', done => {
    screen.findByText(/h...o/i)
          .then(elem => {
            expect(elem.innerHTML).toBe("Hello");
            done();
          });
  });

  test('Find element unsuccessfully', done => {
    screen.findByText(/wibble/i)
          .catch(err => {
            expect(err instanceof Error).toBeTruthy();
            done();
          });
  });
});