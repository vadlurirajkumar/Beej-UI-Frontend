import React from "react";
import "./Joinevents.scss";
import JoinOurEvents from "./invest.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper";

const Joinevents = () => {
  return (
    <div className="container">
      <h3 className="event-head">Join our events</h3>
      <Swiper
        slidesPerView={3}
        spaceBetween={2}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="color-arrows"
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          
          700: {
            slidesPerView: 2,
            spaceBetween: 10,
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
        {JoinOurEvents.map((events) => (
          <SwiperSlide>
            <div className="events-container" key={events}>
              <div className="event-box">
                <div className="events-data">
                  <h3>{events.date}</h3>
                  <p>{events.text}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Joinevents;
