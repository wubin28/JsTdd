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
//
//   deposit(amount) {
//     this.balance += amount;
//   }
//
//   withdraw(amount) {
//     this.balance -= amount;
//   }
// }

module.exports = BankAccount;