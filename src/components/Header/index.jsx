import React, { useState } from "react";
import FavoriteCityLink from "./../FavoriteCityLink";
import "./../../styles/search.scss";

const getCurrentPosition = () => {
  const options = {
    timeout: 10000,
  };
  return new Promise((res, rej) =>
    navigator.geolocation.getCurrentPosition(res, rej, options)
  );
};

const getCoords = () => {
  getCurrentPosition()
    .then((location) => {
      const lat = location.coords.latitude.toFixed(4);
      const lon = location.coords.longitude.toFixed(4);
      console.log(`Lat:${lat}; Lon:${lon};`);
      // requst to openWeather
    })
    .catch((err) => console.log(err));
};

const Header = () => {
  const [favoriteCity, setFavoriteCity] = useState([
    "Kharkiv",
    "Kiyv",
    "Moscov",
  ]);
  return (
    <div className="search-wrap">
      <form className="search-wrap__form" action="">
        <div id="location" onClick={getCoords}>
          <div className="search-wrap__geo-img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
            </svg>
          </div>
        </div>
        <input
          className="search-wrap__form-input"
          type="text"
          placeholder="Enter the city"
        />
        <div id="star" className="search-wrap__star-img">
          <svg
            className="svg-star"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </div>
      </form>
      <div className="link-wrap">
        {favoriteCity.map((city) => (
          <FavoriteCityLink key={city} cityName={city} />
        ))}
      </div>
    </div>
  );
};

export default Header;
