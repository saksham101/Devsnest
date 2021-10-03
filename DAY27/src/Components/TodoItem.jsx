import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delToDo, completeToDo } from "../actions/todoActions";
import cut from "../assets/close.svg";
const TodoItem = () => {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="todo-container">
      {todos.map((todo, indx) => {
        return (
          <div key={indx} className="todo">
            <div
              className="title"
              style={
                todo.done
                  ? {
                      textDecoration: "line-through",
                      display: "inline-block",
                      userSelect: "none",
                    }
                  : {
                      textDecoration: "none",
                      display: "inline-block",
                      userSelect: "none",
                    }
              }
              onClick={() => {
                dispatch(completeToDo(indx));
              }}
            >
              {todo.title}
            </div>
            <img
              src={cut}
              className="del-btn"
              onClick={() => {
                dispatch(delToDo(indx));
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TodoItem;
