const BankAccount = require('./ba3');

describe('Tests for BankAccount class - example 3', () => {

  test('account created, zero balance initially', () => {
    const acc = new BankAccount();
    expect(acc.balance).toBe(0);
  });

  test('single deposit, balance is correct', () => {
    const acc = new BankAccount();
    acc.deposit(100);
    expect(acc.balance).toBe(100);
  });

  test('multiple deposits, balance is cumulative', () => {
    const acc = new BankAccount();
    acc.deposit(100);
    acc.deposit(75);
    expect(acc.balance).toBe(175);
  });
});