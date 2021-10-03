import React from "react";
import "./App.css";
import { firstNameInput, lastNameInput } from "./actions/userInputAction";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="first-heading">User Form using Redux</h1>
      <div className="App">
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => {
            dispatch(firstNameInput(e.target.value));
          }}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => {
            dispatch(lastNameInput(e.target.value));
          }}
        />
      </div>
      <div className="show-names">
        <div>First Name : {firstName}</div>
        <div>Last Name : {lastName}</div>
      </div>
    </>
  );
}

export default App;
