import {
  addTodo,
  delTodo,
  completeTodo,
  loadTodo,
  clearTodo,
} from "../actions/actionNames";
export const todoReducer = (state = [], action) => {
  const saveToLocalStorage = (data) => {
    localStorage.setItem("todos", JSON.stringify(data));
  };
  switch (action.type) {
    case addTodo:
      const newState = [...state, action.payload];
      saveToLocalStorage(newState);
      return newState;
    case delTodo:
      const newState1 = state.filter((todo, indx) => indx !== action.payload);
      saveToLocalStorage(newState1);
      return newState1;
    case completeTodo:
      const newState2 = state.map((todo, indx) => {
        if (indx === action.payload) return { ...todo, done: !todo.done };
        return todo;
      });
      saveToLocalStorage(newState2);
      return newState2;
    case loadTodo:
      const newState4 = [...state, ...action.payload];
      saveToLocalStorage(newState4);
      return newState4;
    case clearTodo:
      saveToLocalStorage([]);
      return [];
    default:
      return state;
  }
};
