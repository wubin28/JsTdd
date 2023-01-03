const rc = require('./restClient');

class ProductManager {

	constructor() {
		this.restClient = new rc.RestClient('https://example.com/api/products')
	}

	removeProducts(...IDs) {
		IDs.forEach(id => this.restClient.delete(id))
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
		const productsPromise = this.restClient.getAll();
		return productsPromise
				.then(products => 
					products.map(p => p.price * p.stock)
							.reduce((total, next) => total + next, 0.0)
				)
				.catch(_ => 0)
	}

	getPriceOf(id) {
		const productPromise = this.restClient.get(id);
		return productPromise
				.then(p => p.price)  
				.catch(_ => 0)
	}
}

module.exports = {
	ProductManager
};