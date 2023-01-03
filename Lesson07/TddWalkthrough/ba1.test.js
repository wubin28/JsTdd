const BankAccount = require('./ba1');

describe('Tests for BankAccount class - example 1', () => {

  test('account created, zero balance initially', () => {
    const acc = new BankAccount();
    expect(acc.balance).toBe(0);
  });
});