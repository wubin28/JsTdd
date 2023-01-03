import {screen} from '@testing-library/dom'

describe('Query techniques in Testing Library', () => {

  test('getByRole - example 1', () => {

    document.body.innerHTML = `
      <button>Submit form</button>
    `;

    const el = screen.getByRole('button', {name: /submit/i});
    expect(el).toBeTruthy();
    expect(el.innerHTML).toBe('Submit form');
  });


  test('getByRole - example 2', () => {

    document.body.innerHTML = `
      <table>
        <caption>Products table</caption>
        <tr><td>Skis</td><td>800</td></tr>
        <tr><td>Boots</td><td>300</td></tr>
      <table>
    `;

    const el = screen.getByRole('table', {name: /products/i});
    expect(el.getElementsByTagName('tr').length).toBe(2);
  });


  test('getByLabelText', () => {

    document.body.innerHTML = `
      <label for="price">Price:</label>
      <input id="price" value="300">
    `;

    const el = screen.getByLabelText(/price:/i);
    expect(el.value).toBe('300');
  });


  test('getByPlaceholderText', () => {

    document.body.innerHTML = `
      <label for="price">Price:</label>
      <input id="price" placeholder="Enter price" value="25">
    `;

    const el = screen.getByPlaceholderText(/enter price/i);
    expect(el.value).toBe('25');
  });


  test('getByText', () => {

    document.body.innerHTML = `
      <div>Wales win the World Cup in 2022</div>
    `;

    const el = screen.getByText(/2022/i);
    expect(el.innerHTML).toMatch(/wales/i);
  });


  test('getByDisplayValue', () => {

    document.body.innerHTML = `
      <input type="text" value="Wales in 2022">
    `;

    const el = screen.getByDisplayValue(/2022/i);
    expect(el.value).toMatch(/wales/i);
  });


  test('getByAltText', () => {

    document.body.innerHTML = `
      <img src="image123.jpg" alt="image123">
    `;

    const el = screen.getByAltText(/image123/i);
    expect(el.src).toMatch(/image123.jpg/i);
  });


  test('getByTitle', () => {

    document.body.innerHTML = `
      <div title="World Cup winners 2022">Wales</div>
    `;

    const el = screen.getByTitle(/2022/i);
    expect(el.innerHTML).toBe('Wales');
  });


  test('getByTestId', () => {

    document.body.innerHTML = `
      <div data-testid="fifa2022winners">Wales</div>
    `;

    const el = screen.getByTestId(/2022/i);
    expect(el.innerHTML).toBe('Wales');
  });
});