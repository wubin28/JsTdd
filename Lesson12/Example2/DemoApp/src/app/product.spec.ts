import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product('Dummy description', 'Dummy category', 0)).toBeTruthy();
  });
});
