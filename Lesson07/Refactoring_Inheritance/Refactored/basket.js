const ProductCollection = require('./productCollection');

class Basket extends ProductCollection {

	get eligibleForFreeDelivery() {
		return this.products.length >= 3;
	}
}

module.exports = Basket;
