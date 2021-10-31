import React from 'react';

const Stories = () => {
	return (
		<div className='story-container'>
			<div className='story-card-container'>
				{[...Array(15)].map((_, idx) => (
					<div key={idx} className='story-card'></div>
				))}
			</div>
		</div>
	);
};

export default Stories;
