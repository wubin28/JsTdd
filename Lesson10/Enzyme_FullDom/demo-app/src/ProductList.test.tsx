import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Product from './Product';
import ProductItem from './ProductItem';
import ProductList from './ProductList';
import TotalValue from './TotalValue';

describe('ProductList - full DOM rendering', () => {

  let products: Array<ProductItem> = [
    new ProductItem('Skis', 1000, 5),
    new ProductItem('Boots', 250, 4),
    new ProductItem('Goggles', 100, 10)
  ];


  it('No products', () => {

    const wrapper = mount(<ProductList products={[]} />)

    // Verify there is one <h1> node, with the correct text.
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('h1').first().text()).toBe('No products in stock');

    // Verify no <Product> or <TotalValue> nodes. 
    expect(wrapper.find(Product).length).toBe(0);
    expect(wrapper.find(TotalValue).length).toBe(0);
  });


  it('Populated products', () => {

    const wrapper = mount(<ProductList products={products} />)

    // Verify there is one <h1> node, with the correct text.
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('h1').first().text()).toBe('3 product(s) in stock');

    // Verify 3 <Product> nodes and 3 <div class="productItem"> nodes. 
    expect(wrapper.find(Product).length).toBe(3);
    expect(wrapper.find('div.productItem').length).toBe(3);
    
    // Get the first <div class="productItem"> node and verify its contents.
    const p0 = wrapper.find('div.productItem').at(0); 
    expect(p0.find('h2').first().text()).toBe('Skis');
    expect(p0.find('p').at(0).text()).toBe('Price: 1000');
    expect(p0.find('p').at(1).text()).toBe('In stock: 5');

    // Get the next <div class="productItem"> node and verify its contents.
    const p1 = wrapper.find('div.productItem').at(1); 
    expect(p1.find('h2').first().text()).toBe('Boots');
    expect(p1.find('p').at(0).text()).toBe('Price: 250');
    expect(p1.find('p').at(1).text()).toBe('In stock: 4');

    // Get the next <div class="productItem"> node and verify its contents.
    const p2 = wrapper.find('div.productItem').at(2); 
    expect(p2.find('h2').first().text()).toBe('Goggles');
    expect(p2.find('p').at(0).text()).toBe('Price: 100');
    expect(p2.find('p').at(1).text()).toBe('In stock: 10');

    // Verify <TotalValue> node and <div class="totalValue"> node. 
    expect(wrapper.find(TotalValue).length).toBe(1);
    expect(wrapper.find('div.totalValue').length).toBe(1);
    expect(wrapper.find('div.totalValue').text()).toBe('Total value: 7000');
  });
});