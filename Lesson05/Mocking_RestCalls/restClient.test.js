const axios = require('axios');

jest.mock('axios');

const rc = require('./restClient');

const products = [
	{description: 'Skis',    price: 500, stock: 10},
	{description: 'Boots',   price: 200, stock: 5},
	{description: 'Goggles', price: 100, stock: 3},
];

describe('mocking REST calls', () => {

  test('get all products', () => {
	const response = {data: products};
	axios.get.mockResolvedValueOnce(response);

	rc.getAllProducts()
	  .then(data => expect(data).toEqual(products));

	expect(axios.get).toHaveBeenCalledWith('https://example.com/api/products');
  });

  test('get one products', () => {
	const response = {data: products[1]};
	axios.get.mockResolvedValueOnce(response);

	rc.getProductById(1)
	  .then(data => expect(data).toEqual(products[1]));

	expect(axios.get).toHaveBeenCalledWith('https://example.com/api/products/1');
  });
});