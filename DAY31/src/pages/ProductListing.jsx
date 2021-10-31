import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../redux/slices/productSlice';
import Card from '../Components/Card';

export const ProductListing = () => {
	const { products } = useSelector(state => state.products);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadProducts());
	}, []);

	console.log(products);

	return (
		<div>
			<section className='products-container'>
				{products.map((item, idx) => (
					<Card key={idx} {...item} />
				))}
			</section>
		</div>
	);
};
