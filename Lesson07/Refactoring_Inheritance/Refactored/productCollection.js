class ProductCollection {

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
}

module.exports = ProductCollection;