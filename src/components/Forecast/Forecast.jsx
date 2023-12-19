import React from "react";
import "./Forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );

  return (
    <>
      <label className="title">7 days forecast</label>

      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <section className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    Min: {Math.round(item.main.temp_min)}°C 
                    Max: {Math.round(item.main.temp_max)}°C
                  </label>
                </section>
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <section className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure: </label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity: </label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels Like: </label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind Speed: </label>
                  <label>{Math.round(item.wind.speed * 3.6)} Km/h</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds: </label>
                  <label>{item.clouds.all}%</label>
                </div>
              </section>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
