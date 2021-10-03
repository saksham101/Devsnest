import React from "react";
import "./App.css";
import CarouselComponent from "./Components/CarouselComponent";
import NavbarComponent from "./Components/NavbarComponent";
import PaginationComponent from "./Components/PaginationComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <CarouselComponent />
      <PaginationComponent />
    </div>
  );
}

export default App;
