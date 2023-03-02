import React from "react";
import "./About.scss";
import AboutCards from "./Cards/AboutCards";

const About = () => {
  return (
    <>
      <div className="admin-aboutus">
        <div className="navBar">
          <h2>About us</h2>
        </div>
        <div className="about-content">
          <div className="left-Content">
            <div className="title-div">
              <h4>Title</h4>
              <p>Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit.</p>
            </div>
            <AboutCards />
            <AboutCards/>
          </div>
          <div className="right-Content">
          <div className="description-div">
              <h4>Description</h4>
              <p>An investment is said to have an 80% chance of <br /> success far more attractive than one with a 20% <br /> chance of failure. The mind can't easily recognize <br /> that they are the same.</p>
            </div>
            <AboutCards/>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
