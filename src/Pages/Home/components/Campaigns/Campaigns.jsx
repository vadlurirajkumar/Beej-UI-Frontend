import React from "react";
import "./Campaigns.scss";
import logoimg from "../../../../Assets/campanylogo1.png";
import logoimg1 from "../../../../Assets/campaignsImg2.png";
import logoimg2 from "../../../../Assets/campaignsImg3.png";
import downloadimg from "../../../../Assets/download-image.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const campaigns = [
  {
    logo: logoimg,
    companyname:"Aerospace",
    head: "Technovus",
    download: "Pitchdeck",
    value: "$10M",
    dolortitle: "Valuation",

    interestdolarvalue: "$5M",
    title: "Interested Amount",
    targetdolarvalue: "$63M",
    targettitle: "Target Amount",
    button: "invest",
  },
  {
    logo: logoimg1,
    companyname:"Artificial Intelligence",
    head: "Servio",
    download: "Pitchdeck",
    value: "$8M",
    dolortitle: "Valuation",

    interestdolarvalue: "$5M",
    title: "Interested Amount",
    targetdolarvalue: "$3M",
    targettitle: "Target Amount",
    button: "invest",
  },
  {
    logo: logoimg2,
    companyname:"Automotive",
    head: "Crew",
    download: "Pitchdeck",
    value: "$5M",
    dolortitle: "Valuation",

    interestdolarvalue: "$5M",
    title: "Interested Amount",
    targetdolarvalue: "$2M",
    targettitle: "Target Amount",
    button: "invest",
  },
];

const Campaigns = () => {
  return (
    <div className="Campaigns-container">
      <h3>Live Campaigns</h3>

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

         


          600: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
         1290: {
            slidesPerView: 3,
            spaceBetween: 2,
          },

          1350: {
            slidesPerView: 3,
            spaceBetween: 2,
          },
        
          1920: {
            slidesPerView: 3,
            spaceBetween: 2,
          },

        }}
        // modules={[Pagination]}
        // className="mySwiper"
        // modules={[Pagination]}
      >
        {campaigns.map((item, index) => {
          const {
            logo,
            companyname,
            head,
            download,
            value,
            dolortitle,
            interestdolarvalue,
            title,
            targetdolarvalue,
            targettitle,
            button,
          } = item;

          return (
            <SwiperSlide>
              <div className="company-information" key={item}>
                <div className="companylogo">
                  <img src={logo} alt="companylogo" className="logo-img" />
                  <p id="companyname">{companyname}</p>
                </div>
               
                <div className="download-head">
                  <h5>{head}</h5>
                  <div className="download-data">
                    <h6>{download}</h6>
                    <img src={downloadimg} alt="" />
                  </div>
                </div>

                <div className="company-valuation">
                  <div className="progress-bar">
                    <div className="main-box">
                      <div className="valuation-bar">
                        <span className="valuation-per">
                          <span className="valuation-dolarvalue">{value}</span>
                        </span>
                      </div>
                      <span className="title">{dolortitle}</span>
                    </div>

                    <div className="main-box">
                      <div className="interest-bar">
                        <span className="interest-per">
                          <span className="interest-dolarvalue">
                            {interestdolarvalue}
                          </span>
                        </span>
                      </div>
                      <span className="title">{title}</span>
                    </div>

                    <div className="main-box">
                      <div className="target-bar">
                        <span className="target-per">
                          <span className="target-dolarvalue">
                            {targetdolarvalue}
                          </span>
                        </span>
                      </div>
                      <span className="title">{targettitle}</span>
                    </div>
                  </div>
                </div>
                <button id="invest-btn">{button}</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Campaigns;
