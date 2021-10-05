import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Weather from "../Components/Weather";

function App() {
  const [placeData, setPlaceData] = useState({ error: "" });
  const [placeName, setPlaceName] = useState("");
  const fetchData = async () => {
    if (placeName === "") return;
    try {
      const data = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=4a81f48477fc4799a9290936212907&q=${placeName}`
      );

      const res = await data.json();
      console.log(res);
      setPlaceData(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App">
      <div className="input-field">
        <input
          className="input"
          type="text"
          value={placeName}
          onChange={(e) => setPlaceName(e.target.value)}
        />
        <button onClick={fetchData}>Search</button>
        {"error" in placeData ? (
          <div className="not-found">Place not found</div>
        ) : (
          <Weather placeData={placeData} />
        )}
      </div>
    </div>
  );
}

export default App;
