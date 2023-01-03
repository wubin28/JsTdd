const rc = require('./restClient');

function getStockCount() {
	const productsPromise = rc.getAllProducts();
	return productsPromise
			.then(products => 
				products.map(p => p.stock)
						.reduce((total, next) => total + next, 0.0)
			)
			.catch(_ => 0)
}

function getStockValue() {
	const productsPromise = rc.getAllProducts();
	return productsPromise
			.then(products => 
				products.map(p => p.price * p.stock)
						.reduce((total, next) => total + next, 0.0)
			)
			.catch(_ => 0)
}

module.exports = {
	getStockCount, getStockValue
};