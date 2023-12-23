import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Col, Container, Row } from 'reactstrap';
import { Fade, Zoom } from "react-awesome-reveal";
import "./sliderVer.css"
import Slider from "react-slick";

export default function VerticalSlider() {

  var settings = {
    autoplay: true,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    centerPadding: "10px",
    draggable: false,
    infinite: false,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    vertical: true,
    speed: 1000,
    autoplaySpeed: 2000,
    useTransform: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    adaptiveHeight: true,
  };


  return (
    <>
    <Container>
    <Slider {...settings}>
      <div>
        <h3 className='text-light'>1</h3>
      </div>
      <div>
        <h3 className='text-light'>2</h3>
      </div>
      <div>
        <h3 className='text-light'>3</h3>
      </div>
      <div>
        <h3 className='text-light'>4</h3>
      </div>
      <div>
        <h3 className='text-light'>5</h3>
      </div>
      <div>
        <h3 className='text-light'>6</h3>
      </div>
    </Slider>
    </Container>

  
    </>
  );
}
