const Basket  = require('./basket');
const Catalog = require('./catalog');

describe('Tests', () => {

  test('Basket test', () => {
    const b = new Basket();
    b.addProduct('Skis');
    b.addProduct('Boots');
    b.addProduct('Catalog');
	  expect(b.eligibleForFreeDelivery).toBeTruthy();
  });

  test('Catalog test', () => {
    const c = new Catalog();
    c.addProduct('Ski jacket');
	  expect(c.luckyDip).toBe('Ski jacket');
  });
});