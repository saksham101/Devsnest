import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import UserInput from './UserInput';

import { reducerType } from './reducers';
import { removeNote } from './actions';

function App() {
	const notes = useSelector((state: reducerType) => state.notes);
	const dispatch = useDispatch();
	return (
		<div className='App'>
			<UserInput />
			<div className='notes-container'>
				{notes.length === 0 ? (
					<h3>Add Some Notes 🙄</h3>
				) : (
					<div>
						{notes.map((val: string, idx: number) => (
							<div className='note-item'>
								<span>{val}</span>
								<span onClick={() => dispatch(removeNote(idx))}>X</span>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
