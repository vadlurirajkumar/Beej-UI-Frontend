import React from "react";
import "./Founders.scss";
import founder1 from "../../../../Assets/founderImg1.png";
import founder2 from "../../../../Assets/founderImg2.png";
import founder3 from "../../../../Assets/founderImg3.png";
import founder4 from "../../../../Assets/founderImg4.png";

const Founders = () => {
  return (
    <div id="main-founder">
      <div className="founder-container">
        <h1>Featured Founders</h1>
      
        <div className="founders">
          <div className="founders-data">
            <img src={founder1} alt="founderimg" className="founderimg" />
            <h3>Norman Moss</h3>
            <p>The Wing</p>
          </div>
          <div className="founders-data">
            <img src={founder2} alt="founderimg" className="founderimg"/>
            <h3>Don Snider</h3>
            <p>Fathom</p>
          </div>
          <div className="founders-data">
            <img src={founder3} alt="founderimg" className="founderimg" />
            <h3>Jasmine Tillery</h3>
            <p>Brightline</p>
          </div>
          <div className="founders-data">
            <img src={founder4} alt="founderimg"  className="founderimg"/>
            <h3>Fred Gordon</h3>
            <p>Lemonade</p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Founders;
