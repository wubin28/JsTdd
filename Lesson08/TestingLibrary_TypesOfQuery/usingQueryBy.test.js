import {screen} from '@testing-library/dom'

describe('queryByXxx', () => {

  beforeEach(() => {
    document.body.innerHTML = "<div>Hello</div>";
  });

  test('Query for element successfully', () => {
    const elem = screen.queryByText(/h...o/i);
    expect(elem).not.toBeNull();
  });

  test('Query for element unsuccessfully', () => {
    const elem = screen.queryByText(/wibble/i);
    expect(elem).toBeNull();
  });
});