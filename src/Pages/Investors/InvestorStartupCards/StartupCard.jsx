import StartupCards from "./StartupCards";
import "./StartupCard.scss";
import { Link } from "react-router-dom";

import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const StartupCard = () => {
  
  return (
    <>
      <div
        className="startup-cards">
        {StartupCards.map((cards) => {
          const { head, name1, name2, name3, subheading, para, service } =
            cards;
          return (
            <>
              <div className="left">
                <div className="right">
                  <div className="img-startup">
                    <img src={head} alt="airgarage" />
                  </div>
                  <div className="right-head">
                    <h4>{subheading}</h4>
                    <p>{service}</p>
                  </div>
                </div>
                <div className="invest-detail">
                  <p>
                    Founder:
                    <h4>
                      <Link>{name1}</Link>
                    </h4>
                  </p>
                  <p>
                    Latest Valuation: <h4>{name2}</h4>
                  </p>
                  <p>
                    Funding Rounds:<h4>{name3}</h4>
                  </p>
                </div>
                <p className="para">{para}</p>
              </div>
            </>
          );
        })}
      </div>
     <div className="startup-swiper">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="investor-slider"
        pagination={{
          clickable: true,
        }}

      >
        {StartupCards.map((cards) => {
          const { head, name1, name2, name3, subheading, para, service } =
            cards;

          return (
            <>
              <Swiper className="startup-swiper-cards">
                <SwiperSlide className="swiper-slide">
                  <div className="mobile-startup-card">
                    <div className="mobile-startup-right">
                      <div className="mobile-img-startup">
                        <img src={head} alt="airgarage" />
                      </div>
                      <div className="mobile-right-head">
                        <h3>{subheading}</h3>
                        <p>{service}</p>
                      </div>
                    </div>
                    <div className="mobile-invest-detail">
                      <div className="mobile-startup-lefthead">
                        <p>Founder:</p>
                        <p>Latest Valuation:</p>
                        <p>Funding Rounds</p>
                      </div>
                      <div className="mobile-startup-righttext">
                        <h4>
                          <Link>{name1}</Link>
                        </h4>
                        <h4>{name2}</h4>
                        <h4>{name3}</h4>
                      </div>
                    </div>
                    <p className="mobile-startup-para">{para}</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </>
          );
        })}
      </Swiper>
      </div>
    </>
  );
};

export default StartupCard;


