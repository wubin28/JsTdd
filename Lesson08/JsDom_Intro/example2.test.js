/**
 * @jest-environment jsdom
 */

describe('Example 2', () => {

  test('try to access document node', () => {
    expect(document).toBeTruthy();
  });
});



