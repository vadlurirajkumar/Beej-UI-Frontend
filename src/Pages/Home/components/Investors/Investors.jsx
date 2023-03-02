import React from "react";
import "./Investors.scss";

import investor1 from "../../../../Assets/Maskimg1.png";
import investor2 from "../../../../Assets/Maskimg2.png";
import investor3 from "../../../../Assets/Maskimg3.png";

import icon1 from "../../../../Assets/investorsImg1.png";
import icon2 from "../../../../Assets/investorsImg2.png";
import icon3 from "../../../../Assets/investorsImg3.png";
import icon4 from "../../../../Assets/investorsImg4.png";
import icon5 from "../../../../Assets/investorsImg5.png";
import icon6 from "../../../../Assets/investorsImg6.png";
import icon7 from "../../../../Assets/investorsImg7.png";
import icon8 from "../../../../Assets/investorsImg8.png";
import icon9 from "../../../../Assets/investorsImg9.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const investors = [
  {
    investorlogo: investor1,
    investorhead: "Clay Sutton",
    investorpera: "Invested in",
    investoricon: icon1,
    investoriconS: icon2,
    investoriconT: icon3,
  },
  {
    investorlogo: investor2,
    investorhead: "Queenie Daves",
    investorpera: "Invested in",
    investoricon: icon4,
    investoriconS: icon5,
    investoriconT: icon6,
  },

  {
    investorlogo: investor3,
    investorhead: "Mark Roffy",
    investorpera: "Invested in",
    investoricon: icon7,
    investoriconS: icon8,
    investoriconT: icon9,
  },
];

const Investors = () => {
  return (
    <div className="main-section">
      <h1 id="head">Featured Investors</h1>

      <Swiper
        slidesPerView={3}
        spaceBetween={2}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="compaign-slider"
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          // 500: {
          //   slidesPerView: 1,
          //   spaceBetween: 20,
          // },

          600: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          700: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          900: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1290: {
            slidesPerView: 3,
            spaceBetween: 25,
          },

          1350: {
            slidesPerView: 3,
            spaceBetween: 33,
          },

          1920: {
            slidesPerView: 3,
            spaceBetween: 45,
          },
        }}
        // modules={[Pagination]}
        // className="mySwiper"
        // modules={[Pagination]}
      >
        {investors.map((item, index) => {
          const {
            investorlogo,
            investorhead,
            investorpera,
            investoricon,
            investoriconS,
            investoriconT,
          } = item;

          return (
            <SwiperSlide>
              <div className="investor-data">
                <div className="invest-container">
                  <div className="invest-details">
                    <div className="borderimg">
                      <img
                        src={investorlogo}
                        alt="invester1"
                        className="invest-img"
                      />
                    </div>
                    <h3>{investorhead}</h3>
                    <p>{investorpera}</p>
                    <div className="icons-imgs">
                      <img
                        src={investoricon}
                        alt="icon-img1"
                        className="icon-img"
                      />
                      <img
                        src={investoriconS}
                        alt="icon-img2"
                        className="icon-img"
                      />
                      <img
                        src={investoriconT}
                        alt="icon-img3"
                        className="icon-img"
                      />
                    </div>
                  </div>
                </div>

                {/* <div className="invest-container">
          <div className="invest-details">
            <div className="borderimg">
              <img src={investor2} alt="invester1" className="invest-img" />
            </div>
            <h3>Queenie Daves</h3>
            <p>Invested in</p>
            <div className="icons-imgs">
              <img src={icon4} alt="icon-img4" className="icon-img" />
              <img src={icon5} alt="icon-img5" className="icon-img" />
              <img src={icon6} alt="icon-img6" className="icon-img" />
            </div>
          </div>
        </div>
        <div className="invest-container">
          <div className="invest-details">
            <div className="borderimg">
              <img src={investor3} alt="invester1" className="invest-img" />
            </div>
            <h3>Mark Roffy</h3>
            <p>Invested in</p>
            <div className="icons-imgs">
              <img src={icon7} alt="icon-img7" className="icon-img" />
              <img src={icon8} alt="icon-img8" className="icon-img" />
              <img src={icon9} alt="icon-img9" className="icon-img" />
            </div>
          </div>
        </div> */}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Investors;
