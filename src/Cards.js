import React from "react";
import Data from "./CardsData.js";
import ellipsisIcon from "./images/icon-ellipsis.svg";

const Cards = ({ Time }) => {
  return Data.map((el) => {
    let timeframe = el.timeframes.weekly;

    if (Time === 0) {
      timeframe = el.timeframes.daily;
    } else if (Time === 2) {
      timeframe = el.timeframes.monthly;
    } else {
      timeframe = el.timeframes.weekly;
    }

    return (
      <div className="card" key={el.id}>
        <div className={"card-color-bg bg-" + el.bgColor}>
          <img src={el.bgIcon} alt={el.IconAlt} />
        </div>
        <div className="card-main">
          <div className="card-head">
            <h3>{el.title}</h3>
            <img
              src={ellipsisIcon}
              className="h-1 cursor-pointer"
              alt="ellipsis icon"
            />
          </div>
          <div className="card-content ">
            <p className="hrs">{timeframe.current}hrs</p>
            <p className="last-week-report">
              Last Week - {timeframe.previous}hrs
            </p>
          </div>
        </div>
      </div>
    );
  });
};

export default Cards;
