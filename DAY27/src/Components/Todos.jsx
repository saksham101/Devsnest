import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToDo, loadToDo, clearToDo } from "../actions/todoActions";
import addbtn from "../assets/add.svg";
import loadbtn from "../assets/load.svg";
import clearbtn from "../assets/clear.svg";
const Todos = () => {
  const dispatch = useDispatch();
  const [todoItem, setTodoItem] = useState("");
  useEffect(() => {
    const localtodos = JSON.parse(localStorage.getItem("todos"));
    if (localtodos)
      localtodos.map((todo) => {
        dispatch(addToDo(todo));
      });
  }, []);
  return (
    <div className="input-container">
      <label htmlFor="todo-item" style={{ fontSize: "1.1rem" }}>
        ToDo:
        <input
          type="text"
          name="todo-item"
          value={todoItem}
          onChange={(e) => {
            setTodoItem(e.target.value);
          }}
        />
      </label>
      <img
        src={addbtn}
        className="btn add"
        onClick={() => {
          if (todoItem !== "")
            dispatch(addToDo({ title: todoItem, done: false }));
          setTodoItem("");
        }}
      />
      <img
        className="btn load"
        src={loadbtn}
        onClick={() => {
          dispatch(loadToDo("https://jsonplaceholder.typicode.com/todos"));
        }}
      />
      <img
        className="btn clear"
        src={clearbtn}
        onClick={() => {
          dispatch(clearToDo());
        }}
      />
    </div>
  );
};

export default Todos;
