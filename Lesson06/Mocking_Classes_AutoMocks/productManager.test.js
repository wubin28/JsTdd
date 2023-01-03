const pm = require('./productManager');
const rc  = require('./restClient');

// Mock all the functions (including constructor function) in restClient.
jest.mock('./restClient');

describe('using mocked class', () => {

  afterEach(() => {
	// Clear all instances and calls to constructor and all methods.
	jest.clearAllMocks();
  });

  test('call the RestClient constructor directly', () => {
	const restClient = new rc.RestClient();
	expect(rc.RestClient).toHaveBeenCalledTimes(1);
	expect(rc.RestClient.mock.instances[0]).not.toBeUndefined();
  });

  test('call the RestClient constructor indirectly', () => {
	const productManager = new pm.ProductManager();
	expect(rc.RestClient).toHaveBeenCalledTimes(1);
	expect(rc.RestClient.mock.instances[0]).not.toBeUndefined();
  });

  test('call RestClient methods', () => {

	const productManager = new pm.ProductManager();
	expect(rc.RestClient).toHaveBeenCalledTimes(1);

	productManager.removeProducts(101, 102, 103);

	// mock.instances is available with automatic mocks:
	const restClientInstance = rc.RestClient.mock.instances[0];
	const deleteMethod = restClientInstance.delete;
	expect(deleteMethod.mock.calls.length).toBe(3);
	expect(deleteMethod.mock.calls[0][0]).toBe(101);
	expect(deleteMethod.mock.calls[1][0]).toBe(102);
	expect(deleteMethod.mock.calls[2][0]).toBe(103);

	// Equivalent to above checks:
	expect(deleteMethod).toHaveBeenCalledTimes(3);
	expect(deleteMethod).toHaveBeenNthCalledWith(1, 101)
	expect(deleteMethod).toHaveBeenNthCalledWith(2, 102)
	expect(deleteMethod).toHaveBeenNthCalledWith(3, 103);
  });
});

