export class BankAccount {

    constructor(private _name: string = '', 
                private _balance: number = 0.0) {}
  
    deposit(amount: number) {
      this._balance += amount;
    }
  
    withdraw(amount: number) {
      this._balance -= amount;
    }
  
    get balance() {
      return this._balance;
    }
  }
  