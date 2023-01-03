import {screen} from '@testing-library/dom'

describe('getByXxx', () => {

  beforeEach(() => {
    document.body.innerHTML = "<div>Hello</div>";
  });

  test('Get element via a string text match', () => {
    const elem = screen.getByText("Hello");
    expect(elem.innerHTML).toBe("Hello");
  });

  test('Get element via a regexp text match', () => {
    const elem = screen.getByText(/h...o/i);
    expect(elem.innerHTML).toBe("Hello");
  });

  test('Get element via a functional text match', () => {
    const elem = screen.getByText((c, e) => {
      return e.tagName.toLowerCase() == 'div' && c.length == 5
    });
    expect(elem.innerHTML).toBe("Hello");
  });
});