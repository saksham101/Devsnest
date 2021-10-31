import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import cartIcon from '../assests/cart.svg';

import { toggleVisibility } from '../redux/slices/cartSlice';
import '../styles/Nav.css';

const NavBarTitle = ({ title, className }) => {
	return (
		<Link to={'/'} className={className}>
			<h2>{title}</h2>
		</Link>
	);
};

const Nav = () => {
	const dispatch = useDispatch();
	return (
		<div className='nav-bar'>
			<NavBarTitle title='Redux Cart' className='nav-title' />
			<div>
				<img
					src={cartIcon}
					alt='cart'
					height={30}
					width={30}
					onClick={() => dispatch(toggleVisibility())}
				/>
			</div>
		</div>
	);
};

export default Nav;
