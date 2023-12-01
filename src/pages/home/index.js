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
import VerticalSl from "./verticalSlider/VerticalSl";
import VerticalSlider from "./verticalSlider/VerticalSl";
import Vert2 from "./verticalSlider/Vert2";

const HomePage = () => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const resizeScreen = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    resizeScreen();
    window.addEventListener("resize", resizeScreen);
    return () => {
      window.removeEventListener("resize", resizeScreen);
    };
  });

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


        {/* {
          screenWidth > 1200 ? <ScrollComp /> : <WhyChooseUs />
        } */}
<Vert2/>
        <VerticalSlider/>
        {/* <WhyChooseUs /> */}
        {/* <VerticalSl/>  */}
 


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
