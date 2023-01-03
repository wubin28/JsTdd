import React from 'react';
import { shallow } from 'enzyme';

import Product from './Product';
import ProductItem from './ProductItem';
import ProductList from './ProductList';
import TotalValue from './TotalValue';

describe('ProductList - shallow rendering', () => {

  let products: Array<ProductItem> = [
    new ProductItem('Skis', 1000, 5),
    new ProductItem('Boots', 250, 4),
    new ProductItem('Goggles', 100, 10)
  ];

  
  it('No products', () => {

    const wrapper = shallow(<ProductList products={[]} />)

    // Verify there is one <h1> node, with the correct text.
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('h1').first().text()).toBe('No products in stock');

    // Verify no <Product> node and no <TotalValue> node. 
    expect(wrapper.find(Product).length).toBe(0);
    expect(wrapper.find(TotalValue).length).toBe(0);
  });


  it('Populated products', () => {
    
    const wrapper = shallow(<ProductList products={products} />)
    
    // Verify there is one <h1> node, with the correct text.
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('h1').first().text()).toBe('3 product(s) in stock');

    // Verify 3 <Product> nodes, but not rendered. 
    expect(wrapper.find(Product).length).toBe(3);
    expect(wrapper.find('div.productItem').length).toBe(0);

    // Verify 1 <TotalValue> node, but not rendered. 
    expect(wrapper.find(TotalValue).length).toBe(1);
    expect(wrapper.find('div.totalValue').length).toBe(0);
  });


  it('Access component properties', () => {

    const wrapper = shallow(<ProductList products={products} />)

    expect(
      wrapper.find(TotalValue)
              .first()
              .prop('products')
              .length).toBe(3);
  });
});