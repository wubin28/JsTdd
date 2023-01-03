describe('Adding content to the document', () => {

  test('create an element', () => {

    const element = document.createElement('div');
    element.innerHTML = 'Hello';

    expect(element).not.toBeNull();
    expect(element.innerHTML).toBe('Hello');
  });

  test('add content to document via the DOM API', () => {

    const div = document.createElement('div');
    div.innerHTML = 'Hi';
    div.id = 'mydiv';
    document.body.appendChild(div);

    elementFound = document.getElementById('mydiv');
    expect(elementFound).not.toBeNull();
    expect(elementFound.innerHTML).toBe('Hi');
  });

  test('add content to document as a string of HTML', () => {

    document.body.innerHTML = `
      <ul>
        <li>Skis</li>
        <li>Boots</li>
        <li>Goggles</li>
      </ul>`;
      
    const lis = document.querySelectorAll('li');
    expect(lis.length).toBe(3);
    expect(lis[0].innerHTML).toBe('Skis');
    expect(lis[1].innerHTML).toBe('Boots');
    expect(lis[2].innerHTML).toBe('Goggles');
  });
});



