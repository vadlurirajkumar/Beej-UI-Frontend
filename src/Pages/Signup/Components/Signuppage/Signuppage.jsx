import React from "react";
import "./Signuppage.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Signuppage = () => {
  return (
    <div className="signuppage">
      <div className="signuptitle">
        <h2 className="subheading">Signup</h2>
      </div>
      <div className="signup-buttons">
        <div className="founder-button">
        <Link to="/signup-founder" ><Button variant="contained" color="primary" className="button1">
            <img src={require("../../../../Assets/founder.png")} alt="" />
            As a founder
          </Button></Link>
        </div>
        <div className="investor-button">
        <Link to="/signup-investor" ><Button variant="contained" color="primary" className="button1">
            <img src={require("../../../../Assets/investor.png")} alt="" /> As an
            investor
          </Button></Link>
        </div>
      </div>
      <Link to="/login"><Button id="signup-button">
        <ul>Already a member? Login.</ul>
      </Button></Link>
    </div>
  );
};

export default Signuppage;
