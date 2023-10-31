import { Col, Row } from "reactstrap";
import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

let data = [
  {
    title: "SUPERIOR CONSTRUCTION",
    para: "With over three decades of unparalleled experience in construction and development, the GK group is one of the most trusted names amongst real estate developers in Hyderabad. Our name and brand are synonymous with superior quality of construction materials, best-in-industry practices and compliance with safety protocol.",
    img: require("../../assets/img/home/layer_building.png"),
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
  }
];
const WhyChooseUs = () => {


  const activeTheme = useSelector((state) => {
    return state && state?.persistedReducer?.theme?.dayTheme;
  });

  return (
    <section
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
          <Fade bottom cascade>
            <h2 className="colorWhite mb50 pb-5 fs50 fontlight subfont text-center">
              why choose us?
            </h2>
          </Fade>
        </div>

        <div className="wrapperData">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            speed={800}
            autoPlay={{ delay: 1000 }}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            onSlideChange={() => {}}
            onSwiper={() => {}}
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
                  <SwiperSlide key={i}>
                    <div className="cornerHandle">
                      <div className="whyChsWrp">
                        <Row className="align-items-center">
                          <Col lg={6} md={12}>
                            <h3 className="brownGradient fs30 mb25 mobFs21">
                            {e.title}
                            </h3>
                            <p className="fs14">
                            {e.para}
                            </p>
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
