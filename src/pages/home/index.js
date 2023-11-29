import React, { useEffect, useMemo, useState } from "react";
import HomeBanner from "./HomeBanner";
import "../../assets/css/home.css";
import { Helmet } from "react-helmet";
import AboutUs from "./AboutUs";
import Testimonial from "./Testimonial";
import WhoWeAre from "./WhoWeAre";
import WhyChooseUs from "./WhyChooseUs";
import OurProjects from "./OurProjects";
import { useSelector } from "react-redux";
import { useRef } from "react";
import ScrollComp from "./ScrollComp";
import { Fade, Zoom } from "react-awesome-reveal";
import HorScroll from "./HorScroll";

const HomePage = () => {
  var myRef = useRef(null);
  const [slideOpen, setslideOpen] = useState(false);
  const viewPort = useSelector((state) => {
    return state && state?.persistedReducer?.Slider?.viewPort;
  });

  // useEffect(()=>{
  //   setslideOpen(true);
  // },[viewPort])

  const executeScroll = () => {
    myRef?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const homeAnimate = useSelector((state) => {
    return state && state?.persistedReducer?.theme?.flip;
  });

  return (
    <>
      <Helmet>
        <title>Home - GK Builders & Developers</title>
      </Helmet>
      <main>
        <HomeBanner />
        <AboutUs />

        {/* <button
          onClick={() => executeScroll()}
          id="makeClick"
          className="d-none"
        >
          Click to scroll
        </button> */}
        <OurProjects />

        <WhyChooseUs />
        {/* <HorScroll/> */}
        <div className="bgwrp" style={{
          backgroundImage: `url(${require("../../assets/img/home/ver_bg.jpg")})`,
        }}>
          <div className="container-xxl">
            <div className="text-center">
              <Zoom left>
                <img
                  src={require("../../assets/img/home/three_dot.png")}
                  className="img-fluid"
                  alt=""
                />
              </Zoom>
              <Fade left cascade damping={1e-1} delay={100}>
                <h2 className="colorWhite mb50 pb-5 fs50 fontlight subfont text-center">
                  why choose us?
                </h2>
              </Fade>
            </div>
          </div>


          {/* <ScrollComp /> */}
        </div>

        {/* {viewPort && (
          <div ref={myRef && myRef}>
            <WhoWeAre />
            <Testimonial />
          </div>
        )} */}
        <WhoWeAre />
        <Testimonial />
      </main>
    </>
  );
};

export default HomePage;
