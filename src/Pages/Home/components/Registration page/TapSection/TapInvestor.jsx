import React from "react";
// import "./Registration.scss";

import newlaptop from "../../../../../Assets/newlaptop.png";

import "./TapInvestor.scss";

const TapInvestor = () => {
  return (
    <>
      <div className="mainregister">
        <div className="childcontainer">
         

          <img src={newlaptop} alt="laptopimg" className="laptopimg" />
          <div className="childdata">
            <h1>Our process is simple.</h1>
            <p id="in"> Taplnvestor Lorem ipsum dolor sit amet, consectetuer</p>
            <p id="in"> TapInvestor Lorem ipsum dolor sit amet, consectetuer</p>
            <p id="in"> TapInvestor Lorem ipsum dolor sit amet, consectetuer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TapInvestor;
