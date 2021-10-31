import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeContextProvider from './context/themeContext';
import TodoContextProvider from './context/todoContext';

ReactDOM.render(
	<React.StrictMode>
		<ThemeContextProvider>
			<TodoContextProvider>
				<App />
			</TodoContextProvider>
		</ThemeContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
