import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";

const OurProjects = () => {
  const activeTheme = useSelector((state) => {
    return (
      state && state?.persistedReducer?.theme?.dayTheme
    );
  });

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="position-relative d-flex align-items-end justify-content-end h-100 w-100">
      <Swiper
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img
            src={require("../../assets/img/home/pr_c.jpg")}
            className="img-fluid"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../assets/img/home/pr_c.jpg")}
            className="img-fluid"
          />
        </SwiperSlide>
      </Swiper>
      <div className="slLayers position-absolute w-100 h-100">
        <Container className="h-100">
          <div className="d-flex align-items-end justify-content-end w-100 h-100">
            <div className="h-100 d-flex flex-column justify-content-between w-100">
              <div className="proMaintitle">
                <img
                  src={require("../../assets/img/home/three_dot.png")}
                  className="img-fluid"
                  alt=""
                />
                <h2 className="colorWhite fs58 fontlight subfont">our projects</h2>
              </div>

              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper swiperThumbnail"
              >
                <SwiperSlide>
                  <img
                    src={require("../../assets/img/home/pr_c.jpg")}
                    className="img-fluid"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../../assets/img/home/pr_c.jpg")}
                    className="img-fluid"
                  />
                </SwiperSlide>
              </Swiper>

              {/* <div className='titles'>
      <h2 className='colorWhite fs58 fw500 text-uppercase'>
          Happy Home
          </h2>
          <h2 className='colorWhite fs58 fw500 text-uppercase'>
          <span className='fs40'>For</span> Families
          </h2>
      </div> */}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default OurProjects;
