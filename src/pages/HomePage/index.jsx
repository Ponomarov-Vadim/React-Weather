import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/main_city_weather.scss";
import "./../../styles/main_date.scss";

const HomePage = () => (
  <>
    <div className="main-information-wrap">
      <div className="main-city-weather">
        <img
          className="main-city-weather__img"
          src="./images/cloud.png"
          alt="cloud"
        />
        {/*params*/}
        <p className="main-city-weather__city-name">Kyiv, UA</p> {/*params*/}
        <div className="temperature-difference">
          <p className="main-city-weather__temperature">-3</p> {/*params*/}
          <span className="main-degree-icon">{`\xB0`}</span>
          <div className="temperature-difference-wrap">
            <div className="min-temperature">
              <p className="min-temperature__title">min</p>
              <p className="min-temperature__value">{`-5\xB0`}</p> {/*params*/}
            </div>
            <div className="max-temperature">
              <p className="max-temperature__title">max</p>
              <p className="max-temperature__value">{`-2\xB0`}</p> {/*params*/}
            </div>
          </div>
        </div>
      </div>
      <div className="main-buttons">
        <div className="main-buttons-container">
          <Link to="/">
            <button className="main-buttons__button-today">today</button>
          </Link>
          <Link to="/fivedays">
            <button className="main-buttons__button-five-days">5 days</button>
          </Link>
        </div>
      </div>
    </div>
    <div className="date-quote-wrap">
      <div className="main-date-wrap">
        <h3 className="main-date-wrap__title" data-action="load-main-date">
          Today {/*params*/}
        </h3>
        <div className="main-date-wrap__info">
          <p className="main-date-wrap__info-month" data-action="load-month">
            Month {/*params*/}
          </p>
          <p className="main-date-wrap__info-time" data-action="load-info-time">
            00:00:00 {/*params*/}
          </p>
        </div>
        <div className="main-date-wrap__sun">
          <img src="./images/sunrise.png" alt="" />
          <p className="main-date-wrap__sun-sunrise">6:30</p> {/*params*/}
          <img src="./images/sunset.png" alt="" />
          <p className="main-date-wrap__sun-sunset">19:28</p> {/*params*/}
        </div>
      </div>
      <div className="quote-wrap">
        <p className="quote-wrap__text">This is a prank man!</p> {/*params*/}
        <p className="quote-wrap__author">Vadim</p> {/*params*/}
      </div>
    </div>
  </>
);

export default HomePage;
