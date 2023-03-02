import React from "react";
import "./Hero.scss";
import img1 from "../../../../Assets/homeimage.png";

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="mainSection">
        <div className="contentbox">
          <h1> STARTUPS & INVESTORS ALIKE</h1>
          <h3>Redefining the financing ecosystem for</h3>
          <p>
            Beej Network is a financing platform engaged in financing startups
            whilst creating value for its stakeholders. We guide the investors
            to invest in the right prospects & provide startups with the right
            funding
          </p>
        </div>
        <div className="imgContainer">
          <img src={img1} alt="heroimage" />
        </div>

        <div className="responsive-para">
          <p>
            Beej Network is a financing platform engaged in financing startups
            whilst creating value for its stakeholders. We guide the investors
            to invest in the right prospects & provide startups with the right
            funding
          </p>
        </div>
      </div>

      {/* dolar section */}

      <div className="dolarContainer">
        <div className="dolaritems1">
          <h2>$ 12M</h2>
          <p>Total investment raised</p>
        </div>
        <div className="dolaritems1">
          <h2>$ 20M</h2>
          <p>Portfolio Market Cap</p>
        </div>
        <div className="dolaritems1">
          <h2>1500</h2>
          <p>Investors Transactions</p>
        </div>
        <div className="dolaritems1">
          <h2>$ 15M</h2>
          <p>Raised by Repeat Investors</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
