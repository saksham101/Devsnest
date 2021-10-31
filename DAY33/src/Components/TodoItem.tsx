import React from 'react';
import { useTodoContext } from '../context/todoContext';

const TodoItem = ({
	title,
	isDone,
	index,
}: {
	title: string;
	isDone: boolean;
	index: number;
}) => {
	const { todos, setTodos } = useTodoContext();
	const handleDelete = () => {
		setTodos(todos.filter((val, idx) => idx !== index));
	};

	return (
		<div className='todo-item'>
			<span>{title}</span>
			<span onClick={() => handleDelete()}>X</span>
		</div>
	);
};

export default TodoItem;
