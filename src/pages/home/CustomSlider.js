import React, { useRef } from "react";
import { Col, Container, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Fade, Zoom } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay } from "swiper";
import { viewPortFunc } from "../../store/slices/UserSlices";
import { Player } from "video-react";
import Slide from 'react-reveal/Slide';

const CustomSlider = () => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const resizeScreen = () => {
    setScreenWidth(window.innerWidth);
  };
  const [sl, setsl] = useState(0);

  const ref1 = useRef(null);
  const sectionEndRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      setsl((prevCount) => (prevCount === 3 ? 0 : prevCount + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    resizeScreen();
    window.addEventListener("resize", resizeScreen);
    return () => {
      window.removeEventListener("resize", resizeScreen);
    };
  }, []);


  const activeTheme = useSelector((state) => {
    return state && state?.persistedReducer?.theme?.dayTheme;
  });


  return (
    <section
      ref={sectionEndRef}
      className={`pt100 pb100 ${activeTheme ? "bgPink" : "bgFullBlack"} pt100 pb100 `}
      style={{
        backgroundImage: `url(${require("../../assets/img/home/ver_bg.jpg")})`
      }}
    >
      <div className="container-xxl">
        <div className="text-center">
          <Zoom left>
            <img
              src={require("../../assets/img/home/three_dot.png")}
              className="img-fluid"
              alt=""
            />
          </Zoom>
          <h2 className="colorWhite mb50  fs50 fontlight subfont text-center">
            <Fade left cascade damping={1e-1} delay={100}>
              why choose us?
            </Fade>
          </h2>
        </div>
      </div>

      <Container>
        <div className="text-center">
          <Row className="align-items-center justify-content-center gy-4 mt20">

            <Col lg={8} md={8} className="">
              <div className="customSliderWrapper text-center">
       
                  <div className={sl === 0 ? "activeSlide" : "hideSlider"}>
                    <Slide bottom>

                      <img src="https://bit.ly/2YoJ77H" className="img-fluid" alt="" />

                    </Slide>
                  </div>


                  <div className={sl === 1 ? "activeSlide" : "hideSlider"}>
                  <Slide bottom>

                    <img src="https://bit.ly/2BteuF2" className="img-fluid" alt="" />

                  </Slide>
                  </div>

                  <div className={sl === 2 ? "activeSlide" : "hideSlider"}>
                  <Slide bottom>

                    <img src="https://bit.ly/3fLJf72" className="img-fluid" alt="" />

                  </Slide>
                  </div>


                  <div className={sl === 3 ? "activeSlide" : "hideSlider"}>
                  <Slide bottom>

                    <img src="https://bit.ly/2BteuF2" className="img-fluid" alt="" />

                  </Slide>
                  </div>
              </div>

            </Col>

          </Row>
        </div>
      </Container>
    </section>
  );
};

export default CustomSlider;
