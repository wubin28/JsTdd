import React from "react";
import ProductItem from "./ProductItem"

export default function Product(product: ProductItem) {
	return (
		<div className="productItem">
			<h2>{product.description}</h2>		
			<p>Price: {product.price}</p>
			<p>In stock: {product.inStock}</p>
		</div>
	)
}