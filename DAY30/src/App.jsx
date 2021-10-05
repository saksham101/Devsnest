import React, { useState } from "react";
import "./App.css";
import TopNavbar from "./Components/Navbar";
import Products from "./Components/Products";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Products />
    </div>
  );
}

export default App;
