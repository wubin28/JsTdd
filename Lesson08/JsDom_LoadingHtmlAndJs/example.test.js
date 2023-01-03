const fs = require("fs");
const html = fs.readFileSync("./index.html");

import {calculateTotalPrice} from './myscript'

describe('Test JS code that accesses HTML', () => {

  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  test('calculate total price', () => {
    const totalPrice = calculateTotalPrice();
    expect(totalPrice).toBe(1200);
  });
});



