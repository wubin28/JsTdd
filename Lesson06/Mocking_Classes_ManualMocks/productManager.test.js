const pm = require('./productManager');
const rc  = require('./restClient')

// Mock all the functions (including constructor function) in restClient.
jest.mock('./restClient');

describe('using mocked class', () => {

  test('check ProductManager can be created', () => {
	const productManager = new pm.ProductManager();
  });

  test('check ProductManager delete works', () => {
	const productManager = new pm.ProductManager();
	productManager.removeProducts(101, 102, 103);
  });

  test('check ProductManager getStockCount works', () => {
	const productManager = new pm.ProductManager();
	const result = productManager.getStockCount();
	expect(result).resolves.toBe(18);
  });

  test('check ProductManager getStockValue works', () => {
	const productManager = new pm.ProductManager();
	const result = productManager.getStockValue();
	expect(result).resolves.toBe(6300);
  });

  test('check ProductManager getPriceOf works - valid id', () => {
	const productManager = new pm.ProductManager();
	const result = productManager.getPriceOf(101);
	expect(result).resolves.toBe(500);
  });

  test('check ProductManager getPriceOf works - invalid id', () => {
	const productManager = new pm.ProductManager();
	const result = productManager.getPriceOf(12345);
	expect(result).resolves.toBe(0);
  });
});

