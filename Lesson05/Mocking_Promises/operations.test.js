const ops = require('./operations');
const rc  = require('./restClient')

const products = [
	{description: 'Skis',    price: 500, stock: 10},
	{description: 'Boots',   price: 200, stock: 5},
	{description: 'Goggles', price: 100, stock: 3},
];

jest.mock('./restClient');
rc.getAllProducts.mockResolvedValue(products);

describe('mocking promises', () => {

  test('mock a promise that resolves', () => {
	const result = ops.getStockCount();
	expect(rc.getAllProducts).toHaveBeenCalled();
	expect(result).resolves.toBe(18);
  });

  test('mock another promise that resolves', () => {
	const result = ops.getStockValue();
	expect(rc.getAllProducts).toHaveBeenCalled();
	expect(result).resolves.toBe(6300);
  });

  test('mock a promise that rejects', () => {
	rc.getAllProducts.mockRejectedValue(new Error('error'));
	const result = ops.getStockValue();
	expect(rc.getAllProducts).toHaveBeenCalled();
	expect(result).resolves.toBe(0);
  });
});

