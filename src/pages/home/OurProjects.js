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
import { Fade, Zoom } from "react-awesome-reveal";

let bigImage = [
  {
    dayImage: require("../../assets/img/home/home-porfolio/casaday.webp"),
    nightImage: require("../../assets/img/home/home-porfolio/casanight.webp"),
  },
  {
    dayImage: require("../../assets/img/home/home-porfolio/zenithday.webp"),
    nightImage: require("../../assets/img/home/home-porfolio/zenithdaynight.webp"),
  },
  {
    dayImage: require("../../assets/img/home/home-porfolio/triadday.webp"),
    nightImage: require("../../assets/img/home/home-porfolio/traidnight.webp"),
  },
  {
    dayImage: require("../../assets/img/home/home-porfolio/ramday.webp"),
    nightImage: require("../../assets/img/home/home-porfolio/ramnight.webp"),
  },
  {
    dayImage: require("../../assets/img/home/home-porfolio/suryaday.webp"),
    nightImage: require("../../assets/img/home/home-porfolio/suryanight.webp"),
  },
  {
  dayImage: require("../../assets/img/home/home-porfolio/almvilladay.webp"),
  nightImage: require("../../assets/img/home/home-porfolio/nightviewalam.webp"),
},
{
  dayImage: require("../../assets/img/home/home-porfolio/gkpearlenclaveday.webp"),
  nightImage: require("../../assets/img/home/home-porfolio/gkpearlenclavenight.webp"),
},

{
  dayImage: require("../../assets/img/home/home-porfolio/festoonday.webp"),
  nightImage: require("../../assets/img/home/home-porfolio/festoonnight.webp"),
},



]

const OurProjects = () => {
  const activeTheme = useSelector((state) => {
    return state && state?.persistedReducer?.theme?.dayTheme;
  });
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="position-relative d-flex align-items-end justify-content-end h-100 w-100">
      <Swiper
        spaceBetween={0}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 mainProSl"
      > 
        {bigImage?.map((e, i) => (
            <SwiperSlide key={i}>
              <div className="bgImageSlider" style={{backgroundImage: `url(${activeTheme ? e?.dayImage : e?.nightImage})`}}>

              </div>
              {/* <img
                src={
                  activeTheme
                    ? e?.dayImage
                    : e?.nightImage
                }
                className="img-fluid"
                alt=""
              /> */}
            </SwiperSlide>
          ))}
           
         
      </Swiper>
      <div className="slLayers position-absolute w-100 h-100">
        <Container className="h-100">
          <div className="d-flex align-items-end justify-content-end w-100 h-100">
            <div className="h-100 d-flex flex-column justify-content-between w-100">
              <div className="proMaintitle">
                <Zoom left>
                  <img
                    src={require("../../assets/img/home/three_dot.png")}
                    className="img-fluid"
                    alt=""
                  />
                </Zoom>
                <Zoom left cascade damping={1e-1} delay={100}>
                  <h2 className="colorWhite fs50 fontlight subfont">
                    ongoing projects
                  </h2>
                </Zoom>

              </div>

              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper swiperThumbnail"
                allowTouchMove={false}
              >
                  <SwiperSlide>
                  <img
                    src={require("../../assets/img/home/home-porfolio/prj2.png")}
                    className="img-fluid"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../../assets/img/home/home-porfolio/prj6.png")}
                    className="img-fluid"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../../assets/img/home/home-porfolio/prj5.png")}
                    className="img-fluid"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../../assets/img/home/home-porfolio/ramvw.png")}
                    className="img-fluid"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../../assets/img/home/home-porfolio/prj4.png")}
                    className="img-fluid"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../../assets/img/home/home-porfolio/prj1.png")}
                    className="img-fluid"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../../assets/img/home/home-porfolio/pearlogo.png")}
                    className="img-fluid"
                    alt=""
                  />
                </SwiperSlide>
               
                <SwiperSlide>
                  <img
                    src={require("../../assets/img/home/home-porfolio/prj3.png")}
                    className="img-fluid"
                    alt=""
                  />
                </SwiperSlide>
                
              
               
               
              </Swiper>

              <div className="titles">
                <h2 className="colorWhite fs70 fw500 mobFs20 text-uppercase">
                  <Zoom className="headingFont" left cascade damping={1e-1} delay={100}>Happy Home </Zoom>
                </h2>
                <Fade bottom cascade>
                  <h2 className="colorWhite fs70 fw500 mobFs20 text-uppercase">
                    <span className="fs50 mobFs15"> <Zoom className="headingFont" left cascade damping={1e-1} delay={100}>For </Zoom></span> <Zoom className="headingFont" left cascade damping={1e-1} delay={100}>Families</Zoom>
                  </h2>
                </Fade>

              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>

  );
};

export default OurProjects;
