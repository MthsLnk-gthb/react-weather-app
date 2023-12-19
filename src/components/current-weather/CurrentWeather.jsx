import "./currentWeather.css";

import React from "react";

const CurrentWeather = ({ data }) => {
  return (
    <article className="weather">
      <section className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          className="weather-icon"
          alt="weather"
        />
      </section>

      <section className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like: </span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind Speed: </span>
            <span className="parameter-value">
              {Math.round(data.wind.speed)} Km/h
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity: </span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure: </span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </section>
    </article>
  );
};

export default CurrentWeather;
