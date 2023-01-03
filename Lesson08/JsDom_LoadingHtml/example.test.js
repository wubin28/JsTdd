const fs = require("fs");
const html = fs.readFileSync("./index.html");

describe('Loading an HTML file', () => {

  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  test('document node exists', () => {
    expect(document).not.toBeUndefined();
  });

  test('document element exists', () => {
    const docElem = document.documentElement;
    expect(docElem).not.toBeUndefined();
    expect(docElem.nodeName).toMatch(/html/i);
  });

  test('access element by id', () => {
    const p1 = document.getElementById('p1');
    expect(p1.innerHTML).toBe('This para says <b>hi</b>');
  });

  test('access element by CSS selector', () => {
    const p2 = document.querySelector('#p2');
    expect(p2.innerHTML).toBe('This para says <i>bye</i>');
  });
});



