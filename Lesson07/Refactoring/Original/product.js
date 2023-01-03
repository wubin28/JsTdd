class Product {

	constructor(description, price, ...ratings) {
		this.description = description;
		this.price = price;
		this.ratings = ratings;
	}
	
	taxPayable() {
		return this.price * 0.20;
	}
	
	displayCountLowRatings() {
		let count = 0;
		for (let r of this.ratings) {
			if (r === 1) {
				count++;
			}
		}
		console.log(`Number of low ratings: ${count}`);
	}
	
	displayCountHighRatings() {
		let count = 0;
		for (let r of this.ratings) {
			if (r === 5) {
				count++;
			}
		}
		console.log(`Number of high ratings: ${count}`);
	}

	toString() {
		let ratingsStr = `${this.ratings.length} rating(s): `;
		for (let r of this.ratings) {
			ratingsStr += r + " ";
		}
		return `${this.description}, GBP ${this.price.toFixed(2)}, ${ratingsStr}`
	}
}

module.exports = Product;