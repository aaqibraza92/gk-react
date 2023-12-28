// import React, { Component, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { Col, Container, Row } from 'reactstrap';
// import { Fade, Zoom } from "react-awesome-reveal";
// import "./sliderVer.css"
// import Slider from "react-slick";



// let data = [
//   {
//     title: "SUPERIOR<br/>CONSTRUCTION",
//     para: "With over three decades of unparalleled experience in construction and development, the GK group is one of the most trusted names amongst real estate developers in Hyderabad. Our name and brand are synonymous with superior quality of construction materials, best-in-industry practices and compliance with safety protocol.",
//     img: require("../../../assets/img/home/layer_building.png"),
//     class: "firstSlide",
//   },
//   {
//     title: "VALUE FOR <br/> MONEY",
//     para: "Even as we remain steadfast in our goal to develop Hyderabad’s most luxurious projects, our prices are among the most competitive in today’s market. We offer our customers the best value for their money and investment. While no compromises are made in the quality of construction, every effort is made to optimise costs and pass on the benefit to the customer.",
//     img: require("../../../assets/img/home/valueformoney.png"),
//   },
//   {
//     title: "TRANSPARENCY",
//     para: "All our operations and communication are transparent, and we encourage you to visit our sites at any time to get a look at our practices. We are committed to following all RERA guidelines and comply with all local municipal laws while developing our projects.",
//     img: require("../../../assets/img/home/transparency.png"),
//   },
//   {
//     title: "TRACK RECORD",
//     para: "We have tirelessly served over 4000 satisfied customers to earn the tag of one of Hyderabad’s most reliable developers. Our customers are truly our brand ambassadors and endorse our brand’s sense of commitment and professionalism. It has taken us over 35 years to build an impeccable track and reputation of one of the best real estate developers of Hyderabad we are committed to take this legacy forward.",
//     img: require("../../../assets/img/home/record.png"),
//   },
// ];

// export default function VerticalSlider() {

//   var settings = {
//     autoplay: true,
//     arrows: false,
//     dots: false,
//     slidesToShow: 3,
//     centerMode: true,
//     centerPadding: "10px",
//     draggable: true,
//     infinite: false,
//     pauseOnHover: false,
//     swipe: true,
//     touchMove: true,
//     vertical: true,
//     speed: 1000,
//     autoplaySpeed: 2000,
//     useTransform: true,
//     cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
//     adaptiveHeight: true,
//   };


//   return (
//     <>
//     <Container>
//     <div className='sliderAttender'>
//     <Slider {...settings}>
//     {data.map((e, i) => (
//             <div key={i} className={`${e.class} sliderAttenderInner`} >
//               <div className="cornerHandle box">
//                 <div className="whyChsWrp">
//                   <Row className="align-items-center">
//                     <Col lg={6} md={6}>
//                       <Fade bottom  delay={100}>
//                         <h3 className="brownGradient subfont  fs30 mb25 mobFs21">
//                         <div dangerouslySetInnerHTML={{ __html: e.title }} />   
//                         </h3>
//                       </Fade>

//                       <Fade bottom>
//                         <p className="fs16">{e.para}</p>
//                       </Fade>


//                     </Col>
//                     <Col lg={6} md={6}>
//                       <Fade right>
//                         <img
//                           src={e.img}
//                           alt="building"
//                           className="img-fluid"
//                         />
//                       </Fade>

//                     </Col>
//                   </Row>
//                 </div>
//               </div>

//             </div>
//           ))}
//     </Slider>
//     </div>

//     </Container>

  
//     </>
//   );
// }
