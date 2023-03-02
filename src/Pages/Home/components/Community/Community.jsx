import React from "react";
import "./Community.scss";
// import rectangleimg from "../../../../Assets/RectangleImg.png";

const Community = () => {
  return (
    <div className="rectangle-section">
      <div className="rectangle-container">
        <div className="rectangle-img"></div>

        <div className="rectangle-left">
          <div className="left-card1">
            <h5>12</h5>
            <p>Live Deals</p>
          </div>
          <div className="left-card2">
            <h5>3082</h5>
            <p>Investors</p>
          </div>
        </div>

        <div className="rectangle-head">
          <h5>Community</h5>
        </div>

        <div className="rectangle-right">
          <div className="right-card1">
            <h5>25</h5>
            <p>Cities</p>
          </div>
          <div className="right-card2">
            <h5>963</h5>
            <p>Startups</p>
          </div>
        </div>

        <div className="rectangle-contant">
          <p>
            We are growing everyday towards our objective to curate an ideal
            platform for investment opportunities & enabling easy access to best
            investment deals
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;
