import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Col, Container, Row } from 'reactstrap';
import "./slider.css"
import { Helmet } from 'react-helmet';
import $ from 'jquery';

let data = [
  {
    title: "SUPERIOR CONSTRUCTION",
    para: "With over three decades of unparalleled experience in construction and development, the GK group is one of the most trusted names amongst real estate developers in Hyderabad. Our name and brand are synonymous with superior quality of construction materials, best-in-industry practices and compliance with safety protocol.",
    img: require("../../../assets/img/home/layer_building.png"),
    class: "firstSlide",
  },
  {
    title: "VALUE FOR MONEY",
    para: "Even as we remain steadfast in our goal to develop Hyderabad’s most luxurious projects, our prices are among the most competitive in today’s market. We offer our customers the best value for their money and investment. While no compromises are made in the quality of construction, every effort is made to optimise costs and pass on the benefit to the customer.",
    img: require("../../../assets/img/home/valueformoney.png"),
  },
  {
    title: "TRANSPARENCY",
    para: "All our operations and communication are transparent, and we encourage you to visit our sites at any time to get a look at our practices. We are committed to following all RERA guidelines and comply with all local municipal laws while developing our projects.",
    img: require("../../../assets/img/home/transparency.png"),
  },
  {
    title: "TRACK RECORD",
    para: "We have tirelessly served over 4000 satisfied customers to earn the tag of one of Hyderabad’s most reliable developers. Our customers are truly our brand ambassadors and endorse our brand’s sense of commitment and professionalism. It has taken us over 35 years to build an impeccable track and reputation of one of the best real estate developers of Hyderabad we are committed to take this legacy forward.",
    img: require("../../../assets/img/home/record.png"),
  },
];

export default function VerticalSlider() {

  useEffect(()=>{
    var titleMain  = $("#animatedHeading");
var titleSubs  = titleMain.find("slick-active");

if (titleMain.length) {

  titleMain.slick({
    autoplay: true,
    arrows: false,
    dots: false,
    slidesToShow: 3,
    centerPadding: "10px",
    draggable: false,
    infinite: true,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    vertical: true,
    speed: 1000,
    autoplaySpeed: 2000,
    useTransform: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    adaptiveHeight: true,
  });

  // On init
  $(".slick-dupe").each(function(index, el) {
    $("#animatedHeading").slick('slickAdd', "<div>" + el.innerHTML + "</div>");
  });

  // Manually refresh positioning of slick
  titleMain.slick('slickPlay');
};
  },[])


  return (
    <>
    <Helmet>
    </Helmet>
      <section

        id="target-section"
        className="pt100 pb100"
        style={{
          backgroundImage: `url(${require("../../../assets/img/home/ver_bg.jpg")})`,
        }}
      >
        <Container>
          <div class="hero__title" id="animatedHeading">
            <div class="slick-dupe"><span class="hero__title-misc  |  animate">1</span></div>
            <div class="slick-dupe"><span class="hero__title-misc  |  animate">2</span></div>
            <div class="slick-dupe"><span class="hero__title-misc  |  animate">3</span></div>
          </div>

        </Container>
      </section>

    </>
  );
}
