import React, { useState } from "react";
import "./Cardes.scss";
import Image1 from "../../../../Assets/cardimg1.png";
import Image2 from "../../../../Assets/cardimg2.png";
import Image3 from "../../../../Assets/cardimg3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";




const data = [
  {
    img: Image1,
    heading: "Lorem ipsum dolor sit amet",
    para: "Lorem ipsumdolor sitamet, consectetuer adipiscing elit, seddiam...",
    show: "Lorem ipsumdolor sitamet, consectetuer adipiscing elit, seddiam.....",
    paper: "Times of India",
    date: "25th Nov 2022",
  },
  {
    img: Image2,
    heading: "Lorem ipsum dolor sit amet",
    para: "Lorem ipsumdolor sitamet, consectetuer adipiscing elit, seddiam..",
    show: "Lorem ipsumdolor sitamet, consectetuer adipiscing elit, seddiam.... ",
    paper: "The HIndu",
    date: "25th Nov 2022",
  },
  {
    img: Image3,
    heading: "Lorem ipsum dolor sit amet",
    para: "Lorem ipsumdolor sitamet, consectetuer adipiscing elit, seddiam... ",

    show: "Lorem ipsumdolor sitamet, consectetuer adipiscing elit, seddiam...",

    paper: "Times of India",
    date: "25th Nov 2022",
  },
];



// const Cardes = () => {
//   const ReadMore = ({ children }) => {
//     const text = children;
//     const [isReadMore, setIsReadMore] = useState(true);
//     const toggleReadMore = () => {
//       setIsReadMore(!isReadMore);
//     };
//     return (
//       <p className="text">
//         {isReadMore ? text.slice(0, 15) : text}
//         <span onClick={toggleReadMore} className="read-or-hide">
//           {isReadMore ? "...Read more" : " Read less"}
//         </span>
//       </p>
//     );
//   };
// }


const Cardes = () => {

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
  

    return(
  <p className="text">
    {isReadMore ? text.slice(0, 15) : text}
    <span onClick={toggleReadMore} className="read-or-hide">
      {isReadMore ? "...Read more" : " Read less"}
    </span>
  </p>
  )
}


  return (

   <div className="cardmain-container">
      <h2>We want to share what we know</h2>

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
            spaceBetween: 50,
          },

          600: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          900: {
            slidesPerView: 1,
            spaceBetween: 50,
          },

          1200: {
            slidesPerView: 2,
            spaceBetween:40,
          },

          

          1920: {
            slidesPerView: 3,
            spaceBetween:30,
          },
        }}
        // modules={[Pagination]}
        // className="mySwiper"
        // modules={[Pagination]}
      >
        {data.map((item, index) => {
          const { img, paper, date, heading, para, show } = item;

          return (
            <SwiperSlide>
              <div className="card-section">
                <div className="card-container">
                  <div className="img-container">
                    <img src={img} alt="card-img" className="card-img" />
                  </div>

                  <div className="card-data">
                    <h4>{heading}</h4>
                    <p>{para}</p>
                    <p>
                      <ReadMore>{show}</ReadMore>
                    </p>
                  </div>

                  <div className="update-papers">
                    <p>{paper}</p>
                    <p>{date}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Cardes;





{
  /* <div className="cardmain-container">
        <h2>We want to share what we know</h2> */
}
{
  /* 
{data.map((item, index) => {
              const { img, paper, date, heading, para, show } = item; */
}

{
  /* <div className="card-section">
<div className="card-container">

  <div className="img-container">
    <img src={img} alt="card-img" className="card-img" />
  </div>

  <div className="card-data">
    <h4>{heading}</h4>
    <p>{para}</p>
    <p>
      <ReadMore>{show}</ReadMore>
    </p>
  </div>

  <div className="update-papers">
    <p>{paper}</p>
    <p>{date}</p>
  </div>

</div>
</div> */
}
