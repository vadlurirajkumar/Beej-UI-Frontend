import React from "react";
import HeroImg from "../../../../../Assets/HeroSectionImg.svg";
import "./HeroSection.scss";
import "../../AdminHomePage.scss";
import { useState } from "react";


const HeroSection = () => {

  const [arr, setArr] = useState([]);

  const [data, setData] = useState({
    totalInvestmentRaised: "",
    portfolioMarketCup: "",
    investorTransactions: "",
    raisedByRepeatInvestor:""
  });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  let { totalInvestmentRaised, portfolioMarketCup, investorTransactions, raisedByRepeatInvestor } = data;

  function changeHandle() {
    setArr([...arr, { totalInvestmentRaised, portfolioMarketCup, investorTransactions, raisedByRepeatInvestor }]);
    setData({ totalInvestmentRaised: "", portfolioMarketCup: "", investorTransactions: "", raisedByRepeatInvestor:"" });
    console.log(arr);
  }
  return (
    <>
      <div className="heroSection">
        <h2>Hero Section</h2>
        <div className="hero-section-main">
          <div className="hero-section-top-part">
            <div className="title-description">
              <div className="description-data">
                <h3>Title</h3>
                <h1>
                  Invest in places that <br /> <span>MATTER TO YOU</span>
                </h1>
              </div>

              <div className="description-data">
                <h3>Description</h3>
                <div className="hero-para-div">
                  <p>
                    An investment is said to have an 80% chance of success far
                    more attractive than one with a 20% chance of failure. The
                    mind can't easily recognize that they are the same.
                  </p>
                </div>
              </div>
            </div>
            <div className="hero-part-img">
              <img src={HeroImg} alt="" />
              <h3>Upload Image</h3>
            </div>
          </div>
          <div className="hero-section-bottom">
            <div className="hero-section-bottomLeft">
              <div className="hero-section-bottom-part">
                <div className="hero-section-left">
                  <h4>Total investment raised</h4>
                </div>
                <div className="hero-section-right">
                  <input type="text" name="totalInvestmentRaised" value={data.totalInvestmentRaised} placeholder="$ 12M" onChange={handleChange} />
                </div>
              </div>
              <div className="hero-section-bottom-part">
                <div className="hero-section-left">
                  <h4>Portfolio Market Cap</h4>
                </div>
                <div className="hero-section-right">
                  <input type="text" name="portfolioMarketCup" value={data.portfolioMarketCup} placeholder="$ 20M" onChange={handleChange} />
                </div>
              </div>
            </div>
            <div className="hero-section-bottomLeft">
              <div className="hero-section-bottom-part">
                <div className="hero-section-left">
                  <h4>Investors Transactions</h4>
                </div>
                <div className="hero-section-right">
                  <input type="text" name="investorTransactions" value={data.investorTransactions} placeholder="1500" onChange={handleChange}/>
                </div>
              </div>
              <div className="hero-section-bottom-part">
                <div className="hero-section-left">
                  <h4>Raised by Repeat Investors</h4>
                </div>
                <div className="hero-section-right">
                  <input type="text" name="raisedByRepeatInvestor"  value={data.raisedByRepeatInvestor} placeholder="$ 15M" onChange={handleChange}/>
                </div>
              </div>
            </div>
          </div>

          <button onClick={changeHandle}>Update</button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
