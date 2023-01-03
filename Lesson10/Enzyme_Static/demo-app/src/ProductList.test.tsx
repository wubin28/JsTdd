import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Product from './Product';
import ProductItem from './ProductItem';
import ProductList from './ProductList';

describe('ProductList - static HTML rendering, returns HTML accessible via Cheerio API', () => {

  let products: Array<ProductItem> = [
    new ProductItem('Skis', 1000, 5),
    new ProductItem('Boots', 250, 4),
    new ProductItem('Goggles', 100, 10)
  ];


  it('No products', () => {

    const wrapper = render(<ProductList products={[]} />)

    // Verify there is one <h1> node, with the correct text.
    expect(wrapper.find('h1').length).toBe(1);
    const h1ElementNode = wrapper.find('h1')[0] as any;
    const h1TextNode = h1ElementNode.firstChild;
    expect(h1TextNode.data).toBe('No products in stock');

    // Verify no <Product> node, and no <div class="productItem"> nodes. 
    expect(wrapper.find('Product').length).toBe(0);
    expect(wrapper.find('div.productItem').length).toBe(0);

    // Verify no <TotalValue> node, and no <div class="totalValue"> node. 
    expect(wrapper.find('TotalValue').length).toBe(0);
    expect(wrapper.find('div.totalValue').length).toBe(0);
  });


  it('Populated products', () => {

    const wrapper = render(<ProductList products={products} />)

    // Verify there is one <h1> node, with the correct text.
    expect(wrapper.find('h1').length).toBe(1);
    const h1ElementNode = wrapper.find('h1')[0] as any;
    const h1TextNode = h1ElementNode.firstChild;
    expect(h1TextNode.data).toBe('3 product(s) in stock');

    // Verify no <Product> node, but 3 <div class="productItem"> nodes. 
    expect(wrapper.find('Product').length).toBe(0);
    expect(wrapper.find('div.productItem').length).toBe(3);

    // Get the first <div class="productItem"> node and verify its contents.
    const prod0 = wrapper.find('div.productItem')[0] as any; 

    const h2TextNode = prod0.children[0].firstChild;
    expect(h2TextNode.data).toBe('Skis');

    const pPriceTextNode = prod0.children[1].firstChild;
    expect(pPriceTextNode.data).toBe('Price: 1000');

    const pInStockTextNode = prod0.children[2].firstChild;
    expect(pInStockTextNode.data).toBe('In stock: 5');

    // Get the <div class="totalValue"> node and verify its contents.
    const totalValue = wrapper.find('div.totalValue')[0] as any; 
    expect(totalValue.firstChild.data).toBe('Total value: 7000');
  });
});