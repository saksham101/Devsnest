import React from 'react';
import { Link, useParams } from 'react-router-dom';
import HeartIcon from './HeartIcon';

const Card = ({ id, description, catagory, image, price, title }) => {
	// const { id } = useParams();

	return (
		<div className='card-container'>
			<HeartIcon onClick={() => {}} width='80px' height='80px' />

			<Link to={`/${id}`}>
				<div className='card'>
					<div className='card-img-container'>
						<img src={image} alt='product' />
					</div>
					<div className='card-body'>
						<div className='card-title'>{title}</div>
						<p className='card-description'>{description.slice(0, 55)}</p>
						<h2>Price: {price}</h2>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Card;
