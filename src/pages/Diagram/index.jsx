import React from "react";
import "./../../styles/diagram.scss";

const Diagram = () => {
  return (
    <section className="diagram ">
      <div className="button-holder button-holder--show">
        <label className="diagram__label ">Show Chart</label>
        <button className="diagram__button--show-chart "></button>
      </div>

      <div className="diagram__wrap ">
        <div className="button-holder button-holder--hide">
          <label className="diagram__label">Hide Chart</label>
          <button className="diagram__button--hide-chart"></button>
        </div>

        <div className="diagram__block">
          <canvas id="myChart" className="diagram__chart"></canvas>
        </div>
      </div>
    </section>
  );
};

export default Diagram;
