import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, User } from './actions';
import Stories from './components/Stories';
import PostsContainer from './components/PostsContainer';

function App() {
	const user = useSelector((state: any) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(updateUser());
	}, []);

	return (
		<div className='App'>
			<Nav />
			<Stories />
			<PostsContainer />
		</div>
	);
}

export default App;
