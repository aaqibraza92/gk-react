import { Col, Container, Row } from "reactstrap";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const WhyChooseUs = () => {
  const activeTheme = useSelector((state) => {
    return state && state?.persistedReducer?.theme?.dayTheme;
  });

  return (
    <section
      className="pt100 pb100"
      style={{
        backgroundImage: `url(${require("../../assets/img/home/ver_bg.jpg")})`,
      }}
    >
      <div className="container-xxl">
        <div className="text-center">
          <img
            src={require("../../assets/img/home/three_dot.png")}
            className="img-fluid"
            alt=""
          />
          <h2 className="colorWhite mb50 fs58 fontlight subfont text-center">
            why choose us?
          </h2>
        </div>

      
            <div className="wrapperData" >
           
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                speed={3000}
                autoPlay={{ delay: 2000 }}
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                onSlideChange={() => {}}
                onSwiper={() => {}}
                breakpoints={{
                  // when window width is >= 640px
                  300: {
                    width: 300,
                    slidesPerView: 1,
                  },
                  // when window width is >= 768px
                  550: {
                    width: 550,
                    slidesPerView: 1,
                  },
                  992: {
                    width: 992,
                    slidesPerView: 1,
                  },
                  1201: {
                    width: 1201,
                    slidesPerView: 1,
                  },
                  1360: {
                    width: 1360,
                    slidesPerView: 1,
                  },
                }}
              >
                <div className="wWrp">
                  {Array(3)
                    .fill()
                    .map((e, i) => (
                      <SwiperSlide key={i} >
                      <div className="cornerHandle">
                      <div className="whyChsWrp">
                          <Row className="align-items-center">
                            <Col lg={6} md={6}>
                              <h3 className="brownGradient fs33 mb25">
                                SUPERIOR <br /> CONSTRUCTION
                              </h3>
                              <p className="fs14">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Quis ipsum suspendisse ultrices gravida. Risus
                                commodo viverra maecenas accumsan lacus vel
                                facilisis.
                              </p>
                              <p className="fs14">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                              </p>
                            </Col>
                            <Col lg={6} md={6}>
                              <img
                                src={require("../../assets/img/home/layer_building.png")}
                                alt="building"
                                className="img-fluid"
                              />
                            </Col>
                          </Row>
                        </div>
                      </div>
                     
                      </SwiperSlide>
                    ))}
                </div>
              </Swiper>
            </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
