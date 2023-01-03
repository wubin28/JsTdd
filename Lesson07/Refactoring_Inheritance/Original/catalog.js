class Catalog {

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

	get luckyDip() {
		const index = Math.floor(Math.random() * this.products.length);
		return this.products[index];
	}
}

module.exports = Catalog;
