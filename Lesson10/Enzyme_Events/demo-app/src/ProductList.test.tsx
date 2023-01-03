import React from 'react';
import { mount } from 'enzyme';

import Product from './Product';
import ProductItem from './ProductItem';
import ProductList from './ProductList';

describe('Simulate events', () => {

  let products: Array<ProductItem> = [
    new ProductItem('Skis', 1000, 5),
    new ProductItem('Boots', 250, 4),
    new ProductItem('Goggles', 100, 10)
  ];


  it('simulate "min" change event', () => {

    const wrapper = mount(<ProductList products={products} />)

    expect(wrapper.find(Product).length).toBe(3);

    wrapper.find('#min').simulate('change', { target: { value: '101' }});
    expect(wrapper.find(Product).length).toBe(2);

    wrapper.find('#min').simulate('change', { target: { value: '251' }});
    expect(wrapper.find(Product).length).toBe(1);

    wrapper.find('#min').simulate('change', { target: { value: '1001' }});
    expect(wrapper.find(Product).length).toBe(0);
  });


  it('simulate "max" change event', () => {

    const wrapper = mount(<ProductList products={products} />)

    expect(wrapper.find(Product).length).toBe(3);

    wrapper.find('#max').simulate('change', { target: { value: '999' }});
    expect(wrapper.find(Product).length).toBe(2);

    wrapper.find('#max').simulate('change', { target: { value: '249' }});
    expect(wrapper.find(Product).length).toBe(1);

    wrapper.find('#max').simulate('change', { target: { value: '99' }});
    expect(wrapper.find(Product).length).toBe(0);
  });
});