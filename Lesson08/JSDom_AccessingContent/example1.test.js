describe('Accessing default content in the document', () => {

  test('access document node', () => {
    expect(document).toBeTruthy();
  });

  test('access document element', () => {
    const docElem = document.documentElement;
    expect(docElem).not.toBeUndefined();
    expect(docElem.nodeName).toMatch(/html/i);
  });

  test('access head and body elements', () => {
    const docElem = document.documentElement;
    expect(docElem.querySelector('head')).not.toBeUndefined();
    expect(docElem.querySelector('body')).not.toBeUndefined();
  });
});



