import React from 'react';
import { mount } from 'enzyme';

import ProductItem from './ProductItem';
import ProductList from './ProductList';

describe('Test React effect hooks', () => {

  let products: Array<ProductItem> = [
    new ProductItem('Skis', 1000, 5),
    new ProductItem('Boots', 250, 4),
    new ProductItem('Goggles', 100, 10)
  ];

  it('effect hook triggered when min changes', () => {

    const callback = jest.fn();
    const wrapper = mount(<ProductList products={products} onRangeChanged={callback} />);

    wrapper.find('#min').simulate('change', { target: { value: '100' }});
    expect(callback).toHaveBeenCalledWith('Range changed: min=100, max=1000000');
  });


  it('effect hook triggered when max changes', () => {

    const callback = jest.fn();
    const wrapper = mount(<ProductList products={products} onRangeChanged={callback} />);

    wrapper.find('#max').simulate('change', { target: { value: '500' }});
    expect(callback).toHaveBeenCalledWith('Range changed: min=0, max=500');
  });
});