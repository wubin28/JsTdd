import { BankAccount } from './bank-account';

describe('BankAccount', () => {

  let acc1: BankAccount;
  
  beforeEach(() => {
    acc1 = new BankAccount('Andy', 1000);
  });

  it('deposit works', () => {
    acc1.deposit(200);
    expect(acc1.balance).toBe(1200);
  });

  it('withdraw works', () => {
    acc1.withdraw(200);
    expect(acc1.balance).toBe(800);
  });
});
