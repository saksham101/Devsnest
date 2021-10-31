import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProdcutDetails } from '../redux/slices/productSlice';
import { addItem, toggleVisibility } from '../redux/slices/cartSlice';
import { useParams } from 'react-router-dom';

import '../styles/productDetails.css';

const ProductDetails = () => {
	const parems = useParams();
	const dispatch = useDispatch();
	const { currentProduct } = useSelector(state => state.products);
	const { cartItems } = useSelector(state => state.cart);
	const [itemQuantity, setItemQuantity] = useState(1);

	useEffect(() => {
		dispatch(getProdcutDetails(parems.id));
	}, [parems?.id]);

	if (!currentProduct) {
		return (
			<div>
				<p>Loading...</p>
			</div>
		);
	}

	return (
		<div className='prodcut-container'>
			<div className='product-image'>
				<img src={currentProduct.image} alt='product' />
			</div>
			<div className='info-container'>
				<h2 className='title-header'>{currentProduct.title}</h2>
				<div className='product-description'>{currentProduct.description}</div>
				<h2 className='price'>Rs.{currentProduct.price}</h2>
				<div className='control-button'>
					<button
						style={{ cursor: 'pointer' }}
						className='controls'
						onClick={() => setItemQuantity(s => s + 1)}
					>
						+
					</button>
					<input
						className='controls'
						type='text'
						value={itemQuantity}
						onChange={() => {}}
					/>
					<button
						style={{ cursor: 'pointer' }}
						className='controls'
						onClick={() => setItemQuantity(s => (s === 1 ? s : s - 1))}
					>
						-
					</button>
				</div>
				<button
					className='add-cart-btn'
					onClick={() => {
						dispatch(
							addItem({
								title: currentProduct.title,
								id: currentProduct.id,
								image: currentProduct.image,
								quantity: itemQuantity,
								price: currentProduct.price,
							})
						);

						dispatch(toggleVisibility());
					}}
				>
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default ProductDetails;
