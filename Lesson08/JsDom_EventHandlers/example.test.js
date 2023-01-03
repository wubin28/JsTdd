const fs = require("fs");
const html = fs.readFileSync("./index.html");

import {addProduct} from './myscript'

describe('Handle events', () => {

  beforeEach(() => {  
    document.documentElement.innerHTML = html.toString();
    document.getElementById('add').onclick = addProduct;
  });

  test('add product', () => {

    // Mimic user input and a button click.
    document.getElementById('description').value = 'Skis';
    document.getElementById('price').value = '800';
    document.getElementById('add').click();

    // Verify <tr> has been added to <table>.
    const table = document.getElementById('products');
    const trs = table.getElementsByTagName('tr');
    expect(trs.length).toBe(1);

    // Verify <td> 0 contains description. 
    const td0 = trs[0].getElementsByTagName('td')[0]; 
    expect(td0.innerHTML).toBe('Skis');
    
    // Verify <td> 1 contains price. 
    const td1 = trs[0].getElementsByTagName('td')[1]; 
    expect(td1.innerHTML).toBe('800');
  });
});



