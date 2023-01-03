import {screen, getAllByRole} from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import {addProduct} from './myscript'

describe('Handle events', () => {

  beforeEach(() => {  
    document.body.innerHTML = `
      <h1>Products</h1>
      <p>
        <label for='description'>Description:</label>
        <input id='description' type='text'>
      </p>
      <p>
        <label for='price'>Price:</label>
        <input id='price' type='text'>
      </p>
      <p>
        <button id='add'>Add Product</button>
      </p>
      <table id='products'>
        <caption>Products</caption>
      </table>
    `;
    
    const addButton = screen.getByRole('button', {name: /add product/i});
    addButton.onclick = addProduct;
  });

  test('add product', () => {

    // Mimic user input.
    const inputDescription = screen.getByLabelText('Description:');
    const inputPrice = screen.getByLabelText('Price:');
    inputDescription.value = 'Skis';
    inputPrice.value = '800';
  
    // Mimic a button click.
    const addButton = screen.getByRole('button', {name: /add product/i});
    userEvent.click(addButton);

    // Verify <tr> has been added to <table>.
    const table = screen.getByRole('table', {name: /products/i});
    const rows = getAllByRole(table, 'row');
    expect(rows.length).toBe(1);

    // Verify the <tr> has a <td class="description">Skis</td>.
    const tds = getAllByRole(rows[0], 'cell');
    expect(tds.length).toBe(2);
    expect(tds[0]).toHaveClass('description');
    expect(tds[0]).toHaveTextContent('Skis');
    expect(tds[1]).toHaveClass('price');
    expect(tds[1]).toHaveTextContent('800');

    // Verify the 2 text boxes are now empty, and the description text box has focus.
    expect(inputDescription).toHaveValue('');
    expect(inputPrice).toHaveValue('');
    expect(inputDescription).toHaveFocus();
  });
});