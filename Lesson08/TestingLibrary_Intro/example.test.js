import {getByText, screen} from '@testing-library/dom'

describe('Intro to Testing Library', () => {

  beforeEach(() => {
    document.body.innerHTML = "<div>Hello</div";
  });

  test('Get element in explicit container', () => {
    const elem = getByText(document, "Hello");
    expect(elem.innerHTML).toBe("Hello");
  });

  test('Get element in implicit container', () => {
    const elem = screen.getByText("Hello");
    expect(elem.innerHTML).toBe("Hello");
  });
});