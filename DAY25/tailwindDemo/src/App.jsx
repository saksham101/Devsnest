import React, { useState } from "react";
import "./App.css";
import "tailwindcss/tailwind.css";
import ColoGrid from "./Components/ColoGrid";
import Navbar from "./Components/Navbar";
import PaginationBoxes from "./Components/Pagination";
import Content from "./Components/Content";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <ColoGrid /> */}
      <Content />
      <PaginationBoxes />
    </div>
  );
}

export default App;
