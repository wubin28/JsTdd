const ProductCollection = require('./productCollection');

class Catalog extends ProductCollection {

	get luckyDip() {
		const index = Math.floor(Math.random() * this.products.length);
		return this.products[index];
	}
}

module.exports = Catalog;
