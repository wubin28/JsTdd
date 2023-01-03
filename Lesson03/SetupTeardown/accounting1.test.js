const BankAccount = require('./accounting');

test('accounts have 0 balance initially', () => {
  const acc1 = new BankAccount('Tom');
  expect(acc1.balance).toBe(0);
});

test('deposits increase balance', () => {
  const acc1 = new BankAccount('Tom');
  acc1.deposit(100);
  expect(acc1.balance).toBe(100);
});

test('withdrawals decrease balance', () => {
  const acc1 = new BankAccount('Tom');
  acc1.withdraw(25);
  expect(acc1.balance).toBe(-25);
});
