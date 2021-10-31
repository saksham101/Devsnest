import React, { useState } from 'react';

import '../styles/heartIconAnimate.css';

const HeartIcon = ({ onClick, height, width }) => {
	const [animate, setAnimate] = useState(false);

	return (
		<div
			className={`HeartAnimation ${animate && 'animate'}`}
			onClick={e => {
				setAnimate(s => !s);
				onClick(e);
			}}
			style={{ height, width }}
		></div>
	);
};

export default HeartIcon;
