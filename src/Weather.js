import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Ibadan",
    temperature: 72,
    date: "Friday 10:00",
    description: "Broken Clouds",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 99,
    wind: 1,
  };

  return (
    <div className="Weather">
      <form>
        <input
          type="text"
          placeholder="Type a City"
          autofocus="on"
          autocomplete="off"
        />
        <button type="submit" className="btn btn-info m-3">
          {" "}
          Search{" "}
        </button>
        <button type="button" className="btn btn-info">
          Current
        </button>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
