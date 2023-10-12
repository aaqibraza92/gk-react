import React, { useRef, useState } from "react";
import Counter from "../home/Counter";
import Testomonial from "../home/Testomonial";
import BreadCrumb from "../../components/BreadCrumb";
import { Col, Container, Row } from "reactstrap";
import { Helmet } from "react-helmet";

import CallToAction from "../../components/CallToAction";
import WhatWeDoSec from "./WhatWeDoSec";
import OurClientCarousel from "./OurClientCarousel";
const AboutUs = () => {
  const videoRef = useRef(null);
  const [playStatus, setplayStatus] = useState(false);

  const playPauseToggle = (status) => {
    if (playStatus === false) {
      videoRef.current.play();
      setplayStatus(true);
    } else {
      videoRef.current.pause();
      setplayStatus(false);
    }
  };
  return (
    <>
      <Helmet>
        <title>About Us - GK Builders & Developers </title>
      </Helmet>
      <BreadCrumb
        // subTitle="GK Builders & Developers "
        title={
          <div>
            <span className="colorBlue">About</span>{" "}
            <span className="colorGreen">Us</span>{" "}
          </div>
        }
        bgImage={require("../../assets/img/about/hero_about.png")}
      />
      
      <div className="bgWhite pt100 imgCont mobPb30">
<div className="container-xl">
          <Row className="align-items-center gy-4 mobilereverse">
            <Col lg={6} md={6}>
              <div>
              <img
                className="img-fluid"
                src={require("../../assets/img/about/abt.png")}
                alt="banner"
              />
              </div>
            </Col>

            <Col lg={6} md={6}>
              <div className="pl30 pr15 m-auto w-80">
   
              <h3 className="fs50 fw700 tabfs24 mobFs38 mt0 mobmb0 mobmr0  text-start colorBlue ml0 mb20">
              <span className="colorGreen"> Exceptional Care</span> <br></br> Tailored to Your  Needs</h3>
              <p className="fs16 colorBlue fw400 tabfs15 mobFs15 mb10">
              Welcome to Alamo Primary Care, your trusted provider of comprehensive primary healthcare services in San Antonio. We are dedicated to delivering personalized, compassionate care that focuses on your overall well-being.
                </p>
              </div>
           
            </Col>
          </Row>
        </div>
    </div>

      {/* <CallToAction
        title="Get started with alamo primary care"
        buttonName1="New-Patient-Registration"
        buttonName2="Book Appointment"
        link1="#"
        link2="#"
        bgImg={require("../../assets/img/about/Mask.png")}
        btnType="blue"
      /> */}
      {/* <section className="servicearea pt100 pb100 text-center bgLightBlue">
        <div className="container-xl">
          <h2 className="colorBlue fs50 fw700  mb20">
            <span className="colorGreen">Watch Our</span> Video
          </h2>
          <div className="videoWrapper">
            <video
              className="img-fluid"
              ref={videoRef}
              poster="https://images.pexels.com/photos/14547917/pexels-photo-14547917.jpeg"
            >
              <source
                src="http://techslides.com/demos/sample-videos/small.mp4"
                type="video/mp4"
              />
            </video>

            <button onClick={() => playPauseToggle()}>
              {playStatus ? (
                ""
              ) : (
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 148 148"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3_470)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M74 0.5C114.59 0.5 147.5 33.4099 147.5 74C147.5 114.59 114.59 147.5 74 147.5C33.4099 147.5 0.5 114.59 0.5 74C0.5 33.4099 33.4099 0.5 74 0.5ZM100.163 78.5459C103.907 76.1294 103.895 73.4377 100.163 71.2964L61.4868 49.0693C58.4363 47.1553 55.2542 48.2798 55.3379 52.2634L55.4575 97.1841C55.7207 101.503 58.1851 102.687 61.8218 100.689L100.163 78.5459ZM74 15.4297C106.348 15.4297 132.57 41.6523 132.57 74C132.57 106.348 106.348 132.57 74 132.57C41.6523 132.57 15.4297 106.348 15.4297 74C15.4297 41.6523 41.6523 15.4297 74 15.4297Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3_470">
                      <rect
                        width="147"
                        height="147"
                        fill="white"
                        transform="translate(0.5 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </button>
          </div>
        </div>
      </section> */}

      <WhatWeDoSec/>
      {/* <OurClientCarousel/> */}
      
      
    </>
  );
};

export default AboutUs;
