import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import {
	faUserCircle,
	faCompass,
	faHeart,
} from '@fortawesome/free-regular-svg-icons';

const Nav = () => {
	return (
		<nav className='navigation'>
			<div className='nav-container'>
				<div className='logo'>
					<img src='https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png'></img>
				</div>
				<div className='search-container'>
					<FontAwesomeIcon icon={faSearch} className='icon' />
					<input type='text' placeholder='search' />
				</div>
				<div className='navigation-icons'>
					<div className='nav-icon-container'>
						<FontAwesomeIcon icon={faCompass} className='icon' />
						<FontAwesomeIcon icon={faHeart} className='icon' />
						<FontAwesomeIcon icon={faUserCircle} className='icon' />
						<FontAwesomeIcon icon={faSignOutAlt} className='icon' />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
