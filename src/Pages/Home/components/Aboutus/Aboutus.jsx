import React from "react";
import "./Aboutus.scss";
import leaf from "../../../../Assets/leafimg.png";

const Aboutus = () => {
  return (
    <div className="about-container">
      <h4 className="about-head">About us</h4>
      <div className="about-section">
        <div className="main-about">
          <div className="content">
            <h3>CREATING WEALTH GENERATION OPPORTUNITIES FOR OUR COMMUNITY</h3>
            <p>
              Beej Network aims to uplift the financial strength of startups and
              create value for their business, in turn contributing to the
              economic growth. We help investors to be a part of world changing
              startups & similarly, enable the startups to create impact on the
              world economy
            </p>
          </div>
          <div className="data-container">
            <div className="about-data">
              <img src={leaf} alt="" id="leaf"/>
              <h5>PROFICIENT TEAM</h5>
              <p id="data">
                Beej Network has a diversified group of investors & founders who
                operate in the financial ecosystem for economic growth & success
              </p>
            </div>
            <div className="about-data">
              <img src={leaf} alt="" id="leaf"/>
              <h5>STRATEGIC BUSINESS MODEL</h5>
              <p id="data">
                The coherent business model at Beej Network provides financial
                backing to the ideas behind a potential startup
              </p>
            </div>
            <div className="about-data">
              <img src={leaf} alt=""  id="leaf"/>
              <h5>COLLABORATION</h5>
              <p id="data">
                Beej Network provides a community tech platform where the
                investors & founders collaborate to make ideal business
                decisions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
