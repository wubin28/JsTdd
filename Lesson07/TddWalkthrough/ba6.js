// -----------------------------------------------------------------------------------
// Original code:
// -----------------------------------------------------------------------------------
class BankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}


// -----------------------------------------------------------------------------------
// Enhanced code:
// -----------------------------------------------------------------------------------
// class BankAccount {
//   constructor() {
//     this.balance = 0;
//   }

//   deposit(amount) {
//     this.balance += amount;
//   }

//   withdraw(amount) {
//     if (amount > this.balance) {
//       throw new Error('Insufficient funds');
//     }
//     this.balance -= amount;
//   }
// }

module.exports = BankAccount;