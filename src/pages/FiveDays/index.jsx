import React, { Component } from "react";
import {
  Route,
  Switch,
  Redirect,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";
import ThreeHourWeather from "./../ThreeHourWeather";
import Diagram from "./../Diagram";
import "./../../styles/fivedays.scss";
import "./../../styles/three-hour-weather__more-info.scss";

class FiveDays extends Component {
  render() {
    const {
      match: { path },
    } = this.props;
    return (
      <>
        <div className="main-buttons">
          <h2 className="main-buttons-title hidden">Kyiv, UA</h2> {/*params*/}
          {/*params видно не всегда ^^^^^*/}
          <div className="main-buttons-container">
            <Link to="/">
              <button className="main-buttons__button-today">today</button>
            </Link>
            <Link to="/fivedays">
              <button className="main-buttons__button-five-days">5 days</button>
            </Link>
          </div>
        </div>
        <div className="five-days-info ">
          <h2 className="five-days-title ">Kyiv, UA</h2>
          <div className="date-container ">
            <div className="date-time-container">
              <div className="date-time-wrap">
                <h3 className="date-time-wrap__title">this.weekDay</h3>
                <div className="date-time-wrap__info">
                  <p className="date-time-wrap__info-date">this.monthDay</p>
                  <img
                    className="date-time-wrap__info-img"
                    src="http://openweathermap.org/img/wn/{{this.icon}}d@2x.png"
                    alt="show weather"
                  />
                  <div className="info-container">
                    <p className="date-time-wrap__info-temperature">
                      min<span>this.minTemp&#176</span>
                    </p>
                    <p className="date-time-wrap__info-temperature">
                      max<span>this.maxTemp&#176</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="quote-wrap"></div>
            <div className="date-time-arrow">
              <img
                className="date-time-arrow-left"
                src="./../../images/icons/chevron-left/chevron_right-24px.svg"
                alt="arrow"
              />
              <img
                className="date-time-arrow-right"
                src="./../../images/icons/chevron-left/chevron_right-24px.svg"
                alt="arrow"
              />
            </div>
          </div>
          <Route path={`${path}/moreinfo`} component={ThreeHourWeather} />
        </div>
        <Route path={`${path}/diagram`} component={Diagram} />
      </>
    );
  }
}

export default FiveDays;
