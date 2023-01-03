class Product {

	static SALES_TAX_RATE = 0.20;
	
	constructor(description, price, ...ratings) {
		this.name = description;
		this.price = price;
		this.ratings = ratings;
	}
	
	taxPayable() {
		return this.price * Product.SALES_TAX_RATE;
	}
	
	displayCountLowRatings() {
		const targetRating = 1;
		let count = this.getCountRating(targetRating);
		console.log(`Number of low ratings: ${count}`);
	}
	
	displayCountHighRatings() {
		const targetRating = 5;
		let count = this.getCountRating(targetRating);
		console.log(`Number of high ratings: ${count}`);
	}

	getCountRating(targetRating) {
		let count = 0;
		for (let r of this.ratings) {
			if (r === targetRating) {
				count++;
			}
		}
		return count;
	}

	toString() {
		let ratingsStr = this.formatRatings();
		return `${this.name}, GBP ${this.price.toFixed(2)}, ${ratingsStr}`
	}

	formatRatings() {
		let ratingsStr = `${this.ratings.length} rating(s): `;
		for (let r of this.ratings) {
			ratingsStr += r + " ";
		}
		return ratingsStr;
	}
}

module.exports = Product;