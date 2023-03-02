import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./Organizaction.scss";
import img1 from "../../../../Assets/organizImg1.png";
import img2 from "../../../../Assets/organizImg2.png";
import img3 from "../../../../Assets/organizImg3.png";
import img4 from "../../../../Assets/organizImg4.png";
import img5 from "../../../../Assets/organizImg5.png";

const Organiazction = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
     
    ]



  };

  return (
    <>
      <h2 className="heading">Professionals from Top Organizations</h2>
      <section className="organiz-container">
        <div>
          <div id="sliderimg">
            <Slider {...settings}>
              <div>
                <img src={img1} alt="" />
              </div>
              <div>
                <img src={img2} alt="" />
              </div>
              <div>
                <img src={img3} alt="" />
              </div>
              <div>
                <img src={img4} alt="" />
              </div>
              <div>
                <img src={img5} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Organiazction;
