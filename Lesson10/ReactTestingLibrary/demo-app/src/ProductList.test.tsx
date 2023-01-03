import React from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ProductItem from './ProductItem';
import ProductList from './ProductList';

describe('Using React Testing Library', () => {

  let products: Array<ProductItem> = [
    new ProductItem('Skis', 1000, 5),
    new ProductItem('Boots', 250, 4),
    new ProductItem('Goggles', 100, 10)
  ];


  it('No products', () => {

    render(<ProductList products={[]} onRangeChanged={s=>{}} />);

    const heading = screen.queryByText(/No products in stock/i);
    expect(heading).toBeTruthy();
  });


  it('Populated products', () => {

    render(<ProductList products={products} onRangeChanged={s=>{}} />);

    const heading = screen.queryByText(/3 product\(s\) in stock/);
    expect(heading).toBeTruthy();

    const prodHeadings = screen.getAllByRole('heading', { level: 2 });
    expect(prodHeadings.length).toBe(3);
    expect(prodHeadings[0].innerHTML).toMatch(/skis/i);
    expect(prodHeadings[1].innerHTML).toMatch(/boots/i);
    expect(prodHeadings[2].innerHTML).toMatch(/goggles/i);

    const totalValue = screen.queryByText(/total value: 7000/i);
    expect(totalValue).toBeTruthy();
  });


  it('Populated products, specify min price', () => {

    render(<ProductList products={products} onRangeChanged={s=>{}} />);

    const minTextBox = screen.getByLabelText(/minimum price:/i);
    userEvent.type(minTextBox, '101');
   
    const prodHeadings = screen.getAllByRole('heading', { level: 2 });
    expect(prodHeadings.length).toBe(2);
    expect(prodHeadings[0].innerHTML).toMatch(/skis/i);
    expect(prodHeadings[1].innerHTML).toMatch(/boots/i);

    const totalValue = screen.queryByText(/total value: 6000/i);
    expect(totalValue).toBeTruthy();
  });


  it('Populated products, specify max price', () => {

    render(<ProductList products={products} onRangeChanged={s=>{}} />);

    const minTextBox = screen.getByLabelText(/maximum price:/i);
    userEvent.type(minTextBox, '999');
   
    const prodHeadings = screen.getAllByRole('heading', { level: 2 });
    expect(prodHeadings.length).toBe(2);
    expect(prodHeadings[0].innerHTML).toMatch(/boots/i);
    expect(prodHeadings[1].innerHTML).toMatch(/goggles/i);

    const totalValue = screen.queryByText(/total value: 2000/i);
    expect(totalValue).toBeTruthy();
  });
});