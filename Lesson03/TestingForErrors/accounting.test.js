const accounting = require('./accounting');

describe('Test the withdraw method', () => {

  let acc1;

  beforeEach(() => {
    acc1 = new accounting.BankAccount('Emily');
    acc1.deposit(2000);
  });

  test('small withdraw works OK', () => {
    acc1.withdraw(100);
    expect(acc1.balance).toBe(1900);
  });

  test('big withdraw causes some error', () => {   
    expect(() => {
      acc1.withdraw(3001)
    }).toThrow();
  });

  test('big withdraw causes BankError', () => {   
    expect(() => {
      acc1.withdraw(3001)
    }).toThrow(accounting.BankError);
  });

  test('big withdraw causes specific error message', () => {   
    expect(() => {
      acc1.withdraw(3001)
    }).toThrow('Insufficient funds');
  });

  test('big withdraw causes specific BankError', () => {   
    try {
      acc1.withdraw(3001);
    }
    catch (err) {
      expect(err).toBeInstanceOf(accounting.BankError);
      expect(err.message).toBe('Insufficient funds');
      expect(err.amount).toBe(3001);
    }
  });

});