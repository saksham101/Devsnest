import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import { ProductListing } from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import SideBar from './Components/SideBar';

function App() {
	return (
		<div className='App'>
			<Router>
				<Nav />
				<Route exact path='/' component={ProductListing} />
				<Route exact path='/:id' component={ProductDetails} />
				<SideBar />
			</Router>
		</div>
	);
}

export default App;
