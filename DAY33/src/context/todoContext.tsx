import React, { FC, useState, useContext, createContext } from 'react';

type todoItemType = {
	title: string;
	isDone: boolean;
};

type todoContextType = {
	todos: todoItemType[];
	setTodos: any;
};

const initialState: todoContextType = {
	todos: [],
	setTodos: (todos: todoItemType) => {},
};

const TodoContext = createContext<todoContextType>(initialState);

const TodoContextProvider: FC = ({ children }) => {
	const [todos, setTodos] = useState<todoItemType[]>([]);

	return (
		<TodoContext.Provider value={{ todos, setTodos }}>
			{children}
		</TodoContext.Provider>
	);
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoContextProvider;
