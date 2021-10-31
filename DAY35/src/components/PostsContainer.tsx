import React from 'react';
import { post_data } from '../data';
import Post from './Post';

const PostsContainer = () => {
	return (
		<div className='posts-container'>
			{post_data.map((post, idx) => (
				<Post {...post} key={idx} />
			))}
		</div>
	);
};

export default PostsContainer;
