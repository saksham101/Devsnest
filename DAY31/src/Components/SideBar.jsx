import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
	toggleVisibility,
	increaseQuantity,
	decreaseQuantity,
	removeItem,
} from '../redux/slices/cartSlice';
import '../styles/sideBar.css';

const SideBar = () => {
	const dispatch = useDispatch();
	const { isSidebarVisible, cartItems } = useSelector(state => state.cart);
	console.log(cartItems);
	return (
		<div
			className='sidebar-container'
			style={{ width: isSidebarVisible ? '470px' : '0' }}
		>
			<div className='sidebar-header'>
				<header>Your Items</header>
				<span
					className='cursor-pointer'
					onClick={() => dispatch(toggleVisibility())}
				>
					X
				</span>
			</div>
			<div className='sidebar-product-container'>
				{cartItems.map((item, idx) => (
					<div key={idx} className='cart-card'>
						<div className='sidebar-product-img'>
							<img src={item.image} />
						</div>
						<div>
							<h2 className='cart-item-header'>{item.title}</h2>
							<div className='control-container'>
								<div className='control-button'>
									<button
										style={{ cursor: 'pointer' }}
										className='controls'
										onClick={() => dispatch(increaseQuantity(item.id))}
									>
										+
									</button>
									<input
										className='controls'
										type='text'
										value={item.quantity}
										onChange={() => {}}
									/>
									<button
										style={{ cursor: 'pointer' }}
										className='controls'
										onClick={() => dispatch(decreaseQuantity(item.id))}
									>
										-
									</button>
								</div>
								<span onClick={() => dispatch(removeItem(item.id))}>
									Delete
								</span>
							</div>
							<h3>Rs. {item.price}</h3>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SideBar;
