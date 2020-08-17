import React from "react";

const FavoriteCityLink = ({ cityName }) => {
  return (
    <div className="link-wrap__text">
      <p>{cityName}</p>

      <svg
        className="link-wrap__text-btn-clear"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        height="27"
        viewBox="0 0 27 27"
        width="35"
      >
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </div>
  );
};

export default FavoriteCityLink;
