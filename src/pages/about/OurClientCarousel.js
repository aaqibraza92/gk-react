import React from "react";
import Slider from "react-slick";
import { quote } from "../../assets/svg/Svg";

const OurClientCarousel = () => {
  var SliderSettings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: "",
    nextArrow: "",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        },
      },
          {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 10,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className=" pt80 pb80">
      <div className="container-xl">
        <h2 className="colorGreen fw700 fs45 mobFs28 fBold mb30 text-center">
        Our 
          <span className="colorBlue"> Testimonials</span>
        </h2>
        <Slider className="parentSl mb20 mobMb30 MinSliderH" {...SliderSettings}>
          <div className="pl10 pr10 pt15 pb20">
          <div className="shadow  pt50 pb50 pl40 pr40 bgWhite mb50 position-relative border_bottom">
            <div className="mb20">
              {quote}
            </div>
            <p className="fs17 colorBlue">
            A remarkable primary care clinic. Expert professionals, modern facilities, and compassionate care. Always a reassuring and positive experience. Highly recommend for exceptional healthcare
            </p>
          </div>
          <div className="d-flex align-items-center">
            <div className="imgClient">
              <img src={require('../../assets/img/user3.jpg')} className="img-fluid" alt="" />

            </div>
            <div className="ml15">
              <h5 className="fs15 fw600 colorBlack ">
              Paul Micheal
              </h5>
              {/* <p className="fs15 fw400 colorBlack">
              Client
              </p> */}
            </div>
          </div>
          </div>

          <div className="pl10 pr10 pt15 pb20">
          <div className="shadow  pt50 pb50 pl40 pr40 bgWhite mb50 position-relative border_bottom">
            <div className="mb20">
              {quote}
            </div>
            <p className="fs17 colorBlue">
            Exceptional care, advanced facilities, and skilled professionals. This primary care clinic provides top-notch service, making my health their priority. Highly recommend!</p>
          </div>
          <div className="d-flex align-items-center">
            <div className="imgClient">
              <img src={require('../../assets/img/user2.jpg')} className="img-fluid" alt="" />

            </div>
            <div className="ml15">
              <h5 className="fs15 fw600 colorBlack ">
              Bal Johns
              </h5>
              {/* <p className="fs15 fw400 colorBlack">
              Client
              </p> */}
            </div>
          </div>
          </div>

          <div className="pl10 pr10 pt15 pb20">
          <div className="shadow  pt50 pb50 pl40 pr40 bgWhite mb50 position-relative border_bottom">
            <div className="mb20">
              {quote}
            </div>
            <p className="fs17 colorBlue">
            Remarkable primary care clinic with a caring team. Their advanced care and welcoming atmosphere make every visit reassuring. Highly recommended for their expertise and personalized attention</p>
          </div>
          <div className="d-flex align-items-center">
            <div className="imgClient">
              <img src={require('../../assets/img/user.png')} className="img-fluid" alt="" />

            </div>
            <div className="ml15">
              <h5 className="fs15 fw600 colorBlack ">
              Monica gorge
              </h5>
              {/* <p className="fs15 fw400 colorBlack">
              Client
              </p> */}
            </div>
          </div>
          </div>
     
          </Slider>
        
      </div>
    </section>
  );
};

export default OurClientCarousel;
