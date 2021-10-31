import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from './actions';

const UserInput = () => {
	const [input, setInput] = useState<string>('');

	const dispatch = useDispatch();

	return (
		<div className='user-input'>
			<input
				type='text'
				value={input}
				onChange={e => setInput(e.target.value)}
			/>
			<button
				onClick={() => {
					dispatch(addNote(input));
					setInput('');
				}}
			>
				Add Note
			</button>
		</div>
	);
};

export default UserInput;
