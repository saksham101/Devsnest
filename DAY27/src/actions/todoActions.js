import {
  addTodo,
  delTodo,
  completeTodo,
  loadTodo,
  clearTodo,
} from "./actionNames";
export const addToDo = (todo) => {
  return {
    type: addTodo,
    payload: todo,
  };
};
export const delToDo = (delIndx) => {
  return {
    type: delTodo,
    payload: delIndx,
  };
};
export const completeToDo = (Indx) => {
  return {
    type: completeTodo,
    payload: Indx,
  };
};
export const clearToDo = () => {
  return {
    type: clearTodo,
  };
};
export const loadToDo = (todos) => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        return dispatch({
          type: loadTodo,
          payload: data.slice(0, 10),
        });
      });
  };
};
