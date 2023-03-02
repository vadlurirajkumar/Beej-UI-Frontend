import React from "react";
import InvestedData from "./InvestedData";

import "./InvestedCards.scss";

const InvestedCards = () => {
  return (
    <div className="InvestedCards">
      {InvestedData.map((invested, index) => {
        const { title, date, amount, img } = invested;
        return (
          <div className="invested-card">
            <div className="top">
              <h3>{title}</h3>
              <p>{date}</p>
            </div>
            <div className="bottom">
              <h2>{amount}</h2>
              <img src={img} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InvestedCards;
