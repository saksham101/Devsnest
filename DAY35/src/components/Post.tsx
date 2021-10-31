import React from 'react';

type propTypes = {
	title: string;
	url: string;
};

const Post = ({ title, url }: propTypes) => {
	return (
		<div className='post'>
			<div className='post-header'>
				<div
					className='post-header-img'
					style={{
						backgroundImage: `url(${url})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				></div>
				<div className='post-header-title'>{title}</div>
			</div>
			<div className='post-main-img'>
				<img src={url} alt='cute cat' />
			</div>
		</div>
	);
};

export default Post;
