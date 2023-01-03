const BankAccount = require('./ba6');

describe('Tests for BankAccount class - example 6', () => {

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

  test('withdrawal within limit, balance is reduced', () => {
    const acc = new BankAccount();
    acc.deposit(100);
    acc.withdraw(75);
    expect(acc.balance).toBe(25);
  });

  test('withdrawal just up to limit, balance is zero', () => {
    const acc = new BankAccount();
    acc.deposit(100);
    acc.withdraw(100);
    expect(acc.balance).toBe(0);
  });

  test('withdrawal exceeds limit, error occurs', () => {
    const acc = new BankAccount();
    acc.deposit(100);
    expect(() => {
      acc.withdraw(101);
    }).toThrow();
  });
});