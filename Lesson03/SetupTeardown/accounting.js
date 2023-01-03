class BankAccount {

	constructor(name) {
		this.name = name;
		this.balance = 0;
	}

	deposit(amount) {
		this.balance += amount;
	}

	withdraw(amount) {
		this.balance -= amount;
	}
}

module.exports = BankAccount;