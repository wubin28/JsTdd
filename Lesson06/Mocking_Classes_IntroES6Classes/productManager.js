const rc = require('./restClient');

class ProductManager {

	constructor() {
		this.restClient = new rc.RestClient('https://example.com/api/products')
	}

	getStockCount() {
		const productsPromise = this.restClient.getAll();
		return productsPromise
				.then(products => 
					products.map(p => p.stock)
							.reduce((total, next) => total + next, 0.0)
				)
				.catch(_ => 0)
	}

	getStockValue() {
		const productsPromise = this.restClient.getAllProducts();
		return productsPromise
				.then(products => 
					products.map(p => p.price * p.stock)
							.reduce((total, next) => total + next, 0.0)
				)
				.catch(_ => 0)
	}

	removeProducts(...IDs) {
		IDs.forEach(id => this.restClient.delete(id))
	}
}

module.exports = {
	ProductManager
};