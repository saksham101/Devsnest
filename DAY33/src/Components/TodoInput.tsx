import React, { useState } from 'react';
import { useTodoContext } from '../context/todoContext';

const TodoInput = () => {
	const [userinput, setUserinput] = useState<string>('');
	const { setTodos, todos } = useTodoContext();

	return (
		<div>
			<input
				type='text'
				value={userinput}
				onChange={e => setUserinput(e.target.value)}
			/>
			<button
				onClick={() => {
					setTodos([...todos, { title: userinput, isDone: false }]);
					setUserinput('');
				}}
			>
				Add Todo
			</button>
		</div>
	);
};

export default TodoInput;
