import { Col, Row } from "reactstrap";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Fade, Zoom } from "react-awesome-reveal";
import { viewPortFunc } from "../../store/slices/SliderReducer";

let data = [
  {
    title: "SUPERIOR CONSTRUCTION",
    para: "With over three decades of unparalleled experience in construction and development, the GK group is one of the most trusted names amongst real estate developers in Hyderabad. Our name and brand are synonymous with superior quality of construction materials, best-in-industry practices and compliance with safety protocol.",
    img: require("../../assets/img/home/layer_building.png"),
    class: "firstSlide",
  },
  {
    title: "VALUE FOR MONEY",
    para: "Even as we remain steadfast in our goal to develop Hyderabad’s most luxurious projects, our prices are among the most competitive in today’s market. We offer our customers the best value for their money and investment. While no compromises are made in the quality of construction, every effort is made to optimise costs and pass on the benefit to the customer.",
    img: require("../../assets/img/home/valueformoney.png"),
  },
  {
    title: "TRANSPARENCY",
    para: "All our operations and communication are transparent, and we encourage you to visit our sites at any time to get a look at our practices. We are committed to following all RERA guidelines and comply with all local municipal laws while developing our projects.",
    img: require("../../assets/img/home/transparency.png"),
  },
  {
    title: "TRACK RECORD",
    para: "We have tirelessly served over 4000 satisfied customers to earn the tag of one of Hyderabad’s most reliable developers. Our customers are truly our brand ambassadors and endorse our brand’s sense of commitment and professionalism. It has taken us over 35 years to build an impeccable track and reputation of one of the best real estate developers of Hyderabad we are committed to take this legacy forward.",
    img: require("../../assets/img/home/record.png"),
  },
];
const WhyChooseUs = () => {
 const dispatch= useDispatch();
  // const viewPort = useSelector((state) => {
  //   return state && state?.persistedReducer?.theme?.viewPort;
  // });
  const [sl, setSl] = useState("");

  const slideHandle = (e) => {
    setSl(e.activeIndex);
    // if (e.activeIndex === 3 && viewPort) {
    //   setSl(true);
    // } else {
    //   setSl(false);
    // }
    if(e.activeIndex==3){
      setTimeout(() => {
        document.getElementById("makeClick").click();
         
      }, 1800);
      dispatch(viewPortFunc(true));
     
    }else{
      dispatch(viewPortFunc(false));
    }
  };

  useMemo(() => {
    
    // if (viewPort && sl) {
    //   document.body.style.overflow = "auto";
    // }else if(!viewPort){
    //   document.body.style.overflow = "auto";
    // } else {
    //   document.body.style.overflow = "hidden";
    // }
    // console.log("sl",sl);
    // if(sl==3){
    //   document.getElementById("makeClick").click();
    // }
  }, [sl]);

  const activeTheme = useSelector((state) => {
    return state && state?.persistedReducer?.theme?.dayTheme;
  });

  return (
    <section
  
      id="target-section"
      className="pt100 pb100"
      style={{
        backgroundImage: `url(${require("../../assets/img/home/ver_bg.jpg")})`,
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
          <h2 className="colorWhite mb50 pb-5 fs50 fontlight subfont text-center">
            <Fade left cascade damping={1e-1} delay={100}>
              why choose us?
            </Fade>
          </h2>
        </div>

        <div className="wrapperData">
          <Swiper
            modules={[Navigation, Pagination, Mousewheel]}
            //loop={true}
            speed={800}
            reachEnd={(e) => console.log("rr", e)}
            //autoPlay={{ delay: 1000 }}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            onSlideChange={(e) => slideHandle(e)}
            mousewheel={true}
            breakpoints={{
              // when window width is >= 640px
              300: {
                width: 300,
                slidesPerView: 1,
              },
              // when window width is >= 768px
              550: {
                width: 550,
                slidesPerView: 1,
              },
              992: {
                width: 992,
                slidesPerView: 1,
              },
              1201: {
                width: 1201,
                slidesPerView: 1,
              },
              1360: {
                width: 1360,
                slidesPerView: 1,
              },
            }}
          >
            <div className="wWrp">
              {data.map((e, i) => (
                <SwiperSlide key={i} className={`${e.class} fullHeight`} >
                  {/* <div className="container"> */}
                  <div className="cornerHandle">
                    <div className="whyChsWrp">
                      <Row className="align-items-center">
                        <Col lg={6} md={12}>
                          <h3 className="brownGradient fs30 mb25 mobFs21">
                            {e.title}
                          </h3>
                          <p className="fs14">{e.para}</p>
                        </Col>
                        <Col lg={6} md={12}>
                          <img
                            src={e.img}
                            alt="building"
                            className="img-fluid"
                          />
                        </Col>
                      </Row>
                    </div>
                  </div>
                  {/* </div> */}
              
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
