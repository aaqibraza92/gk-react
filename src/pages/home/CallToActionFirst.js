import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import bgImage from '../../assets/img/bgImg.png';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Slider from "react-slick";


const CallToActionFirst = () => {


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
    <section className="text-center bgImage pt80 pb100 mobPt50 mobPb30 callToFirst" style={{ backgroundImage: `url(${bgImage})` }} >
      <div className="container-xl">

  

        <Slider className="parentSl" {...SliderSettings}>

          <div className="wrp">
            <div className="text-center serList bgWhite position-relative pl40 pr40 pb20 transition">
              <div className="iconWrapper d-flex align-items-center justify-content-center">
                <img src={require('../../assets/img/s1.svg').default} className="img-fluid" alt="" />
              </div>
              <p className="mb0 fs20 fw400 colorBlue">
                Our mission is to provide exceptional healthcare services to individuals and families of all ages, promoting preventive care and empowering you to make informed decisions about your health.
              </p>
            </div>
          </div>

          <div className="wrp">
            <div className="text-center serList bgWhite position-relative pl40 pr40 pb20 transition">
              <div className="iconWrapper d-flex align-items-center justify-content-center">
                <img src={require('../../assets/img/s2.svg').default} className="img-fluid" alt="" />
              </div>
              <p className="mb0 fs20 fw400 colorBlue">
              Our state-of-the-art facility is equipped with advanced technology and staffed by a team of experienced healthcare professionals who are committed to your comfort and satisfaction.
              </p>
            </div>
            </div>

            <div className="wrp">
                  <div className="text-center serList bgWhite position-relative pl40 pr40 pb20 transition">
                    <div className="iconWrapper d-flex align-items-center justify-content-center">
                      <img src={require('../../assets/img/s3.svg').default} className="img-fluid" alt="" />
                    </div>
                    <p className="mb0 fs20 fw400 colorBlue">
                      We strive to create a warm and welcoming environment where you can feel at ease while receiving the highest quality of care.
                    </p>
                  </div>
                </div>


        </Slider>
      </div>
    </section>
  );
};

export default CallToActionFirst;
