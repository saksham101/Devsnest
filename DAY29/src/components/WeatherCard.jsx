import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/weather.scss";
import { useSelector } from "react-redux";
const WeatherCard = () => {
  const placeData = useSelector((state) => state.placeData);
  const HourlyTemperature = () => {
    const hourlyData = placeData.forecast.forecastday[0].hour;
    return (
      <div className="hourly">
        {hourlyData.map((data, indx) => {
          return (
            <div className="hour" key={indx}>
              {data.time.slice(10)}
              <div className="temp">{data.temp_c}°C</div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="container weather">
      <div className="row">
        <div className="col-3 city-details">
          <div className="row">
            <div>
              <img
                src={placeData.current.condition.icon}
                alt="icon"
                className="place-weather-img"
              />
            </div>
          </div>
          <div className="row p-2">
            <div>{placeData.current.condition.text}</div>
          </div>
          <div className="row p-2">
            <div style={{ fontSize: "1.5rem" }}>{placeData.location.name}</div>
            <div>{placeData.location.localtime}</div>
          </div>
          <div className="row p-2">
            <div style={{ fontSize: "1.1rem" }}>
              {placeData.current.feelslike_c}°C
            </div>
          </div>
        </div>
        <div className="col-6"></div>
        <div className="col-3 right-side-infos ">
          <div className="p-1 side-info">
            <span>
              <img
                src="./icons/icons8-dew-point-100.png"
                alt="icon"
                className="icon"
              />
              Humiditiy:
            </span>
            <span> {placeData.current.humidity}</span>
          </div>
          <div className=" p-1 side-info">
            <span>
              <img
                src="./icons/icons8-air-100.png"
                alt="icon"
                className="icon"
              />
              Air Pressure:
            </span>
            <span>{placeData.current.pressure_in}</span>
          </div>
          <div className=" p-1 side-info">
            <span>
              <img
                src="./icons/icons8-heavy-rain-100.png"
                alt="icon"
                className="icon"
              />
              Chance of Rain:
            </span>
            <span>
              {placeData.forecast.forecastday[0].day.daily_chance_of_rain}%
            </span>
          </div>
          <div className="p-1 side-info">
            <span>
              <img
                src="./icons/icons8-night-wind-100.png"
                alt="icon"
                className="icon"
              />
              Wind Speed:
            </span>
            <span>{placeData.current.wind_kph} km/h</span>
          </div>
        </div>
      </div>
      <div className="hour-container">
        <HourlyTemperature />
      </div>
    </div>
  );
};

export default WeatherCard;
