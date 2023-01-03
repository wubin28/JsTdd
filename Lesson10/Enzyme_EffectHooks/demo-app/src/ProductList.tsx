import React from "react";
import ProductItem from './ProductItem'
import Product from './Product'
import TotalValue from "./TotalValue";

const defaultMax = 1_000_000;

export default function ProductList({products, onRangeChanged} : 
	                                {products: Array<ProductItem>, onRangeChanged : (s: string) => void } ) {

	let [min, setMin] = React.useState(0)
	let [max, setMax] = React.useState(defaultMax)

	function onChangeMin(e: any) { 
		const val = Number(e.target.value) || 0
		setMin(val)
	}

	function onChangeMax(e: any) { 
		const val = Number(e.target.value) || defaultMax
		setMax(val)
	}

	React.useEffect(() => {
		onRangeChanged(`Range changed: min=${min}, max=${max}`)
	}, [min, max])

	if (products.length === 0) {
		return (
			<div>
				<h1>No products in stock</h1>
			</div>
		)
	}
	else {
	
		const filteredProducts = products.filter(p => p.price >= min && p.price <= max);

		return (

			<div>
				<h1>{products.length} product(s) in stock</h1>

				<p>
					<label htmlFor='min'>Minimum price: </label>
					<input type='text' id='min' onChange={onChangeMin} />
				</p>
				<p>
					<label htmlFor='max'>Maximum price: </label>
					<input type='text' id='max' onChange={onChangeMax} />
				</p>
				
				{
					filteredProducts.map((p,i) => <Product key={i} {...p} />)
				}
				<TotalValue products={filteredProducts} />
			</div>
		)
	}
}