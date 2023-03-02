import React from "react";

import newlaptop from "../../../../../Assets/newlaptop.png";

import "../Registration.scss";

const TapFounder = () => {
  return (
    <>
      <div className="mainregister">
        <div className="childcontainer">
         

          <img src={newlaptop} alt="laptopimg" className="laptopimg" />

          <div className="childdata">
            <h1>Our process is simple.</h1>
            <p id="p">Lorem ipsum dolor sit amet, consectetuer</p>
            <p id="p">Lorem ipsum dolor sit amet, consectetuer</p>
            <p id="p">Lorem ipsum dolor sit amet, consectetuer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TapFounder;
