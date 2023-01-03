import React from 'react';
import { mount } from 'enzyme';

import Product from './Product';
import ProductItem from './ProductItem';
import ProductList from './ProductList';

describe('Test React state', () => {

  let products: Array<ProductItem> = [
    new ProductItem('Skis', 1000, 5),
    new ProductItem('Boots', 250, 4),
    new ProductItem('Goggles', 100, 10)
  ];

  afterEach(() => {
    jest.restoreAllMocks()
  });


  it('state updated for specified minimum value', () => {

    const setMin = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation(() => [0, setMin]);

    const wrapper = mount(<ProductList products={products} />)
    wrapper.find('#min').simulate('change', { target: { value: '200' }});
    expect(setMin).toHaveBeenCalledWith(200);
  });


  it('state updated for unspecified minimum value', () => {

    const setMin = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation(() => [0, setMin]);

    const wrapper = mount(<ProductList products={products} />)
    wrapper.find('#min').simulate('change', { target: { value: '' }});
    expect(setMin).toHaveBeenCalledWith(0);
  });


  it('state updated for specified maximum value', () => {

    const setMax = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation(() => [0, setMax]);

    const wrapper = mount(<ProductList products={products} />)
    wrapper.find('#max').simulate('change', { target: { value: '5000' }});
    expect(setMax).toHaveBeenCalledWith(5000);
  });


  it('state updated for unspecified maximum value', () => {

    const setMax = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation(() => [0, setMax]);

    const wrapper = mount(<ProductList products={products} />)
    wrapper.find('#max').simulate('change', { target: { value: '' }});
    expect(setMax).toHaveBeenCalledWith(1_000_000);
  });
});