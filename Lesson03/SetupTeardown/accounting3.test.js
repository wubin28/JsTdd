const BankAccount = require('./accounting');

let acc1;

beforeAll(() => {
  console.log('One-off setup tasks...');
});

afterAll(() => {
  console.log('One-off teardown tasks...');
});
  
beforeEach(() => {
  console.log('Setting up fresh BankAccount object');
  acc1 = new BankAccount('Tom');
});

afterEach(() => {
  console.log('Tearing down BankAccount object');
});

test('accounts have 0 balance initially', () => {
  expect(acc1.balance).toBe(0);
});

test('deposits increase balance', () => {
  acc1.deposit(100);
  expect(acc1.balance).toBe(100);
});

test('withdrawals decrease balance', () => {
  acc1.withdraw(25);
  expect(acc1.balance).toBe(-25);
});
