import React from "react";
import "./Business.scss";

import circleimg from "../../../../Assets/CircleImg.png";

const Business = () => {
  return (
    <div className="circle-section">
      <div className="circle-container">
        <div className="circle-contant">
          <p>
            Our business model builds community relations to create active
            business engagement & the itinerary followed ensures efficient
            decision making takes place
          </p>
        </div>

        <div className="circle-left">
          <div className="left-card">
            <h5>$5M</h5>
            <p>Minutes of cumulative investors engagement</p>
          </div>
        </div>
        <div className="circle-head">
          <h5>Business Engagement</h5>
        </div>
        <div className="circle-right">
          <div className="right-card1">
            <h5>202</h5>
            <p>Minutes of Investment counseling & reviews</p>
          </div>
          <div className="right-card2">
            <h5>63</h5>
            <p>Questions asked</p>
          </div>
        </div>

        <div className="circle-img">
          <img src={circleimg} alt="circleimg" className="img-circle" />
          <div className="business-text">
            <p>
              {" "}
              Our business model builds community relations to create active
              business engagement & the itinerary followed ensures efficient
              decision making takes place{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
