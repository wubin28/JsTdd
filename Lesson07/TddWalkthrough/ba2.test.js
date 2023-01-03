const BankAccount = require('./ba2');

describe('Tests for BankAccount class - example 2', () => {

  test('account created, zero balance initially', () => {
    const acc = new BankAccount();
    expect(acc.balance).toBe(0);
  });

  test('single deposit, balance is correct', () => {
    const acc = new BankAccount();
    acc.deposit(100);
    expect(acc.balance).toBe(100);
  });
});