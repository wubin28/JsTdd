const ops = require('./operations');

describe('using mock functions', () => {

  test('using a simple mock function', () => {
    const mockf1 = jest.fn(); 
    const result = mockf1();
    expect(mockf1).toHaveBeenCalledTimes(1);
    expect(result).toBeUndefined();
  });

  test('using a mock function that takes parameters', () => {
    const mockf2 = jest.fn(); 
    const result = mockf2(10, 20, 30);
    expect(mockf2).toHaveBeenCalledTimes(1);
    expect(mockf2).toHaveBeenCalledWith(10, 20, 30);
    expect(result).toBeUndefined();
  });

  test('using a mock function that returns a value', () => {
    const mockf3 = jest.fn(() => 42); 
    const result = mockf3();
    expect(mockf3).toHaveBeenCalledTimes(1);
    expect(result).toBe(42);
  });
});

