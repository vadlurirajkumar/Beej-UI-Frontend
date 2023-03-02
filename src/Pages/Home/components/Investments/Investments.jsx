import React from "react";
import "./Investments.scss";
import invest1 from "../../../../Assets/investimg1.png";
import invest2 from "../../../../Assets/invenstersimg2.png";
import invest3 from "../../../../Assets/invenstersimg3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const investments = [
  {
    investmentlogo: invest1,
    investhead: "Loom",
    para: "Jim Casillo",
    investvaluation: "$63M",
    valuationtitle: "Valuation",
    targetvalue: "$63M",
    titletarget: "Target Amount",
  },
  {
    investmentlogo: invest2,
    investhead: "Loom",
    para: "Jim Casillo",
    investvaluation: "$63M",
    valuationtitle: "Valuation",
    targetvalue: "$63M",
    titletarget: "Target Amount",
  },
  {
    investmentlogo: invest3,
    investhead: "Loom",
    para: "Jim Casillo",
    investvaluation: "$63M",
    valuationtitle: "Valuation",
    targetvalue: "$63M",
    titletarget: "Target Amount",
  },
];

const Investments = () => {
  return (
    <div className="section">
      <h4 className="progresshead">Closed Investments</h4>

      <Swiper
        slidesPerView={3}
        spaceBetween={2}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="compaign-slide"
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          600: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          800: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          900: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1290: {
            slidesPerView: 2,
            spaceBetween: 25,
          },

          1350: {
            slidesPerView: 3,
            spaceBetween: 20,
          },

          1920: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        // modules={[Pagination]}
        // className="mySwiper"
        // modules={[Pagination]}
      >
        {/* 
<div className="investment-cards"> */}

        {investments.map((item, index) => {
          const {
            investmentlogo,
            investhead,
            para,
            investvaluation,
            valuationtitle,
            targetvalue,
            titletarget,
          } = item;

          return (
            <SwiperSlide>
              <div className="mainprogress-card">
                <div className="main-bar">
                  <div className="investments-container">
                    <div className="investmentsdata">
                      <img
                        src={investmentlogo}
                        alt="investmentsimg"
                        className="investerimg"
                      />

                      <div className="text">
                        <h5>{investhead}</h5>
                        <p> {para}</p>
                      </div>
                    </div>

                    <div className="progress-bar">
                      <div className="main-box">
                        <div className="valuation-bar">
                          <span className="valuation-per">
                            <span className="valuation-dolarvalue">
                              {investvaluation}
                            </span>
                          </span>
                        </div>
                        <span className="title">{valuationtitle}</span>
                      </div>
                      <div className="main-box">
                        <div className="target-bar">
                          <span className="target-per">
                            <span className="target-dolarvalue">
                              {" "}
                              {targetvalue}
                            </span>
                          </span>
                        </div>
                        <span className="title">{titletarget}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>

    // </div>
  );
};

export default Investments;
