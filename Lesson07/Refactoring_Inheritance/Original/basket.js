class Basket {

	constructor() {
		this.products = [];
	}

	addProduct(product) {
		this.products.push(product);
	}
	
	displayProducts() {
		for (let product of this.products) {
			console.log(product);
		}
	}

	get eligibleForFreeDelivery() {
		return this.products.length >= 3;
	}
}

module.exports = Basket;
