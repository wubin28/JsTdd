const BankAccount = require('./accounting');

describe('Suite 1', () => {

  let acc1;

  beforeAll(() => {
    console.log('Suite 1 beforeAll...');
  });

  afterAll(() => {
    console.log('Suite 1 afterAll...');
  });

  beforeEach(() => {
    console.log('Suite 1 beforeEach...');
    acc1 = new BankAccount('Tom');
  });
  
  afterEach(() => {
    console.log('Suite 1 afterEach...');
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
  
});

describe('Suite 2', () => {

  let acc1;

  beforeAll(() => {
    console.log('Suite 2 beforeAll...');
  });

  afterAll(() => {
    console.log('Suite 2 afterAll...');
  });

  beforeEach(() => {
    console.log('Suite 2 beforeEach...');
    acc1 = new BankAccount('Emily');
    acc1.deposit(10_000);
  });
  
  afterEach(() => {
    console.log('Suite 2 afterEach...');
  });
  
  test('deposits are cumulative', () => {
    acc1.deposit(1_000);
    acc1.deposit(5_000);
    expect(acc1.balance).toBe(16_000);
  });
  
  test('withdrawals are cumulative', () => {
    acc1.withdraw(1_000);
    acc1.withdraw(5_000);
    expect(acc1.balance).toBe(4_000);
  });

});



