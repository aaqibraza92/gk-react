
import React, { useMemo, useRef, useState } from "react";
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
import HeadShake from 'react-reveal/HeadShake';

let data = [
  {
    title: "SUPERIOR<br/>CONSTRUCTION",
    para: "With 35+ years in construction, GK Group stands as a trusted name in Hyderabad's real estate. Renowned for quality materials, industry-leading practices, and strict safety compliance, our brand symbolizes excellence and reliability in development.",
    img: require("../../../assets/img/home/layer_building.png"),
    class: "firstSlide",
  },
  {
    title: "VALUE FOR <br/> MONEY",
    para: "Committed to creating Hyderabad's finest projects, we prioritize affordability. Our prices, competitive in today's market, ensure our customers receive optimal value and returns on their investments. Quality construction remains uncompromised, as we diligently manage costs to benefit our customers without compromise.",
    img: require("../../../assets/img/home/valueformoney.png"),
  },
  {
    title: "TRANSPARENCY",
    para: "All our operations and communication are transparent, and we encourage you to visit our sites at any time to get a look at our practices. We are committed to following all RERA guidelines and comply with all local municipal laws while developing our projects.",
    img: require("../../../assets/img/home/transparency.png"),
  },
  {
    title: "TRACK RECORD",
    para: "We've proudly built a stellar reputation as Hyderabad's trusted real estate developers, serving 4000+ satisfied customers; Their endorsement speaks volumes about our commitment and professionalism. We're dedicated to continuing this legacy of excellence.",
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
  const [sl, setSl] = useState("");
  const slideHandle = (e) => {
    setSl(e.activeIndex);
  }

  useMemo(() => {
    
  }, [sl]);

  return (
    <div id="choose-us" className="pt100 pb100 " style={{
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
          <Fade left cascade damping={1e-1} delay={100}>
          <h2 className="colorWhite mb50  fs50 fontlight subfont text-center">
              why choose us?
          </h2>
          </Fade>
        </div>
      </div>
      <div className=" slideronenew position-relative">
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
          onSlideChange={(e) => slideHandle(e)}

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
              <div className="nextText">
              <span className="shake">Click to Next</span>
              </div>

      </div>
    </div>

  )
}

export default Vert2