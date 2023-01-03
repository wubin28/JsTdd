const ops = require('./operations');

describe('using the .mock property on a mock function', () => {

  test('accessing the .mock property', () => {

    const mockf1 = jest.fn(); 

    // Mock functions have a .mock property, 
    // which yields an object with info about mock function usage. 
    let mockObj = mockf1.mock;

    // Let's see the properties available in the mock object.
    console.log(Object.keys(mockObj));
  });
  
  test('accessing call and result info - ex 1', () => {

    const mockAdd = jest.fn(() => 30); 
    let result = mockAdd(10, 20);

    // The mock object has a .calls property.
    expect(mockAdd.mock.calls.length).toBe(1);

    // In call 0: arg 0 was 10, arg 1 was 20, and the result was 30.
    expect(mockAdd.mock.calls[0][0]).toBe(10);
    expect(mockAdd.mock.calls[0][1]).toBe(20);
    expect(mockAdd.mock.results[0].value).toBe(30);
  });

  test('accessing call and result info - ex 2', () => {

    const mockOp = jest.fn(i => i * i); 
    ops.processArray([10, 20, 30], mockOp)

    expect(mockOp.mock.calls.length).toBe(3);

    expect(mockOp.mock.calls[0][0]).toBe(10);
    expect(mockOp.mock.results[0].value).toBe(100);

    expect(mockOp.mock.calls[1][0]).toBe(20);
    expect(mockOp.mock.results[1].value).toBe(400);

    expect(mockOp.mock.calls[2][0]).toBe(30);
    expect(mockOp.mock.results[2].value).toBe(900);
  });
});

