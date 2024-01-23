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
    para: "With 30+ years in construction, GK Group stands as a trusted name in Hyderabad's real estate. Renowned for quality materials, industry-leading practices, and strict safety compliance, our brand symbolizes excellence and reliability in development.",
    img: require("../../assets/img/home/layer_building.png"),
    class: "firstSlide",
  },
  {
    title: "VALUE FOR MONEY",
    para: "Committed to creating Hyderabad's finest projects, we prioritize affordability. Our prices, competitive in today's market, ensure our customers receive optimal value and returns on their investments. Quality construction remains uncompromised, as we diligently manage costs to benefit our customers without compromise.",
    img: require("../../assets/img/home/valueformoney.png"),
  },
  {
    title: "TRANSPARENCY",
    para: "All our operations and communication are transparent, and we encourage you to visit our sites at any time to get a look at our practices. We are committed to following all RERA guidelines and comply with all local municipal laws while developing our projects.",
    img: require("../../assets/img/home/transparency.png"),
  },
  {
    title: "TRACK RECORD",
    para: "We've proudly built a stellar reputation as Hyderabad's trusted real estate developers, serving 4000+ satisfied customers; Their endorsement speaks volumes about our commitment and professionalism. We're dedicated to continuing this legacy of excellence.",
    img: require("../../assets/img/home/record.png"),
  },
];
const WhyChooseUs = () => {
  // const [mouseWheel1,setmouseWheel]=useState(true);
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
      // setmouseWheel(false)
      setTimeout(() => {
        // document.getElementById("swiperInner").blur();
        // setmouseWheel(false)
        // setSl(e.activeIndex);
      }, 1800);
      
      dispatch(viewPortFunc(true));
    
     
    }else{
      dispatch(viewPortFunc(false));
      // setmouseWheel(true)
    }
  };

  useEffect(() => {
    
    console.log("sl",sl)
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
            id="swiperInner"
            modules={[Navigation, Pagination, Mousewheel]}
            // loop={true}
            speed={800}
            // reachEnd={(e) => console.log("rr", e)}
            // autoPlay={{ delay: 1000 }}
            // spaceBetween={0}
            // slidesPerView={3}
            // centeredSlides={true}
            // onSlideChange={(e) => slideHandle(e)}
            // mousewheel={false}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            // breakpoints={{
            //   // when window width is >= 640px
            //   300: {
            //     width: 300,
            //     slidesPerView: 1,
            //   },
            //   // when window width is >= 768px
            //   550: {
            //     width: 550,
            //     slidesPerView: 1,
            //   },
            //   992: {
            //     width: 992,
            //     slidesPerView: 1,
            //   },
            //   1201: {
            //     width: 1201,
            //     slidesPerView: 1,
            //   },
            //   1360: {
            //     width: 1360,
            //     slidesPerView: 1,
            //   },
            // }}
          >
            <div className="wWrp">
              {data.map((e, i) => (
                <SwiperSlide key={i} className={`${e.class} fullHeight`} >
                  {/* <div className="container"> */}
                  <div className="cornerHandle">
                    <div className="whyChsWrp">
                      <Row className="align-items-center">
                        <Col lg={6} md={12}>
                          <h3 className="brownGradient subfont  fs30 mb25 mobFs21">
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
