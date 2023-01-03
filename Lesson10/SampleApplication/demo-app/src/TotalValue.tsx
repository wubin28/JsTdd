import React from "react";
import ProductItem from './ProductItem'

export default function TotalValue({products}: {products: ProductItem[]}) {

    const totalValue = products.map(p => p.price * p.inStock)
                               .reduce((t, c) => t + c, 0.0);

    return <div className="totalValue">Total value: {totalValue}</div>;
}