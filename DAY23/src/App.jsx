import React, { useState, useEffect } from "react";
import "./App.css";
import { useCars } from "./Hooks/useCars";
function App() {
  const car = useCars();
  // useEffect(() => {
  //   car.setCars("https://parallelum.com.br/fipe/api/v1/carros/marcas");
  // }, []);
  return (
    <div className="App">
      <h1>{car.display()}</h1>
      <button onClick={car.prev}>Prev</button>
      <button onClick={car.next}>Next</button>
    </div>
  );
}

export default App;
