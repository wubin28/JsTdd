import React from "react";
import ProductItem from './ProductItem'
import Product from './Product'
import TotalValue from "./TotalValue";

export default function ProductList({products}: {products: ProductItem[]}) {

	if (products.length === 0) {
		return (
			<div>
				<h1>No products in stock</h1>
			</div>
		)
	}
	else {
		return (

			<div>
				<h1>{products.length} product(s) in stock</h1>
				{
					products.map((p,i) => <Product key={i} {...p} />)
				}
				<TotalValue products={products} />
			</div>

		)
	}
}