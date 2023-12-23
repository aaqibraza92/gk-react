
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css'
import { Zoom } from "react-awesome-reveal";
// import "./styles.css";
import { Pagination, Navigation, Autoplay } from 'swiper';
import { Col, Row } from "reactstrap";
import { keyframes } from "@emotion/react";
import Fade from 'react-reveal/Fade';


let data = [
  {
    title: "SUPERIOR<br/>CONSTRUCTION",
    para: "With over three decades of unparalleled experience in construction and development, the GK group is one of the most trusted names amongst real estate developers in Hyderabad. Our name and brand are synonymous with superior quality of construction materials, best-in-industry practices and compliance with safety protocol.",
    img: require("../../../assets/img/home/layer_building.png"),
    class: "firstSlide",
  },
  {
    title: "VALUE FOR <br/> MONEY",
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


const customAnimation = keyframes`
 from {
   clip-path: inset(0 100% 0 0);
   background-color: #222222;
 }
 to {
   clip-path: inset(0 0 0 0);
   background-color: #222222;
 }
 0%, 50% {
   transform-origin: 0 50%;
 }
 
 60%, 100% {
   transform-origin: 100% 50%;		
 }

 
 60% {
   transform: scaleX(1);
 }
 
 100% {
   transform: scaleX(0);
 }
`;

const Vert2 = () => {


  return (
    <div className="pt100 pb100 " style={{
      backgroundImage: `url(${require("../../../assets/img/home/ver_bg.jpg")})`,
    }}>
      <div className="container-xxl">
        <div className="text-center">
          <Zoom left>
            <img
              src={require("../../../assets/img/home/three_dot.png")}
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
      <div className=" slideronenew">
        <Swiper
          slidesPerView={"1"}
          centeredSlides={true}
          spaceBetween={10}
          autoPlay={{ delay: 1500 }}
          speed={1000}
          loop={true}
          navigation={false}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}

          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {data.map((e, i) => (
            <SwiperSlide key={i} className={`${e.class} fullHeight`} >
              <div className="cornerHandle box">
                <div className="whyChsWrp">
                  <Row className="align-items-center">
                    <Col lg={6} md={6}>
                      <Fade bottom  delay={100}>
                        <h3 className="brownGradient subfont  fs30 mb25 mobFs21">
                    
                        <div dangerouslySetInnerHTML={{ __html: e.title }} />   
                        </h3>
                      </Fade>

                      <Fade bottom>
                        <p className="fs16">{e.para}</p>
                      </Fade>


                    </Col>
                    <Col lg={6} md={6}>
                      <Fade right>
                        <img
                          src={e.img}
                          alt="building"
                          className="img-fluid"
                        />
                      </Fade>

                    </Col>
                  </Row>
                </div>
              </div>

            </SwiperSlide>
          ))}


        </Swiper>


      </div>
    </div>

  )
}

export default Vert2