import React from 'react';
import ProductItem from './ProductItem';
import ProductList from './ProductList';

let products: Array<ProductItem> = [
  new ProductItem('Carving skis', 1000, 5),
  new ProductItem('Ski boots', 250, 4),
  new ProductItem('Ski goggles', 100, 10)
];

export default function App() {
  return <ProductList products={products} />;
}