import React from 'react';
import { useThemeContext } from '../context/themeContext';

const ThemeToggler = () => {
	const { theme, setTheme } = useThemeContext();

	return (
		<button className='theme-toggle-btn' onClick={() => setTheme(!theme)}>
			{theme ? 'Dark' : 'Light'}
		</button>
	);
};

export default ThemeToggler;
