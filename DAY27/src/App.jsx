import React, { useState } from "react";
import Todos from "./Components/Todos";
import "./App.css";
import TodoItem from "./Components/TodoItem";
function App() {
  return (
    <div className="App">
      <Todos />
      <TodoItem />
    </div>
  );
}

export default App;
