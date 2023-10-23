import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

let data = [
  {
    para: "GK Builders and Developers helped and supported us throughout the planning and buying process and have been so very professional and truly wonderful. I have had to make so many decisions and they have been with me all the way.",
    author: "Manasa",
    position: "Project Lead, Tech Mahindra",
    tag: "Atmakaru",
  },
  {
    para: "In sum, our experience with GK Builders and Developers was more than satisfactory. The team met deadlines, was easy to work with, helpful in making difficult decisions, respectful of our unique wishes, showed excellent attention to detail and was kind and welcoming to customers.",
    author: "Prasad G",
    position: "Senior General Manager, FHPL(Apollo Group)",
    tag: "Atmakaru",
  },
  {
    para: "For us, buying a new home was not just about investing in a property but it was a part of building our dreams. We had so many plans and ideas for our first home together. We felt that GK Builders and Developers is the right choice since the brand has a very good reputation.",
    author: "Amit Kumar",
    position: "Project Manager, Crowd Health India",
    tag: "Atmakaru",
  },
];

const Testimonial = () => {
  const activeTheme = useSelector((state) => {
    return (
      state && state?.persistedReducer?.theme?.dayTheme
    );
  });
  
  return (
    <section
      className="testimonial d-flex h-100 pt100 pb100"
      style={{
        backgroundImage: `url(${activeTheme ? require("../../assets/img/home/what_say.jpg") : require("../../assets/img/home/test_night.jpg")})`,
      }}
    >
      <div className="wrapper_what_people w-100">
        <Container>
          <Row>
            <Col lg={3} md={3} xl={3}>
              <div >
                <img
                  src={require("../../assets/img/home/three_dot.png")}
                  className="img-fluid"
                  alt=""
                />
                   <h2 className="colorWhite fs58 fontlight subfont mt10">
                What <br />
                People <br />
                Say
              </h2>
              </div>
           
            </Col>
            <Col lg={9} md={9} xl={9}>
              <div className="pl30 pr30 mobPlr0">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  loop={true}
                  speed={3000}
                  autoPlay={{ delay: 2000 }}
                  spaceBetween={50}
                  slidesPerView={1}
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
                  <div className="bloggerList">
                    {data.map((e, i) => (
                      <SwiperSlide key={i}>
                        <div className="test_wrapper position-relative d-flex align-items-end">
                          <div className="position-relative d-flex justify-content-end">
                            <img
                              src={require("../../assets/img/home/home_frame.png")}
                              className="img-fluid homeFrameImg"
                              alt=""
                            />
                            <img
                              src={require("../../assets/img/home/heart_testi.png")}
                              className="img-fluid position-absolute heartAuthor"
                              alt=""
                            />
                          </div>

                          <div className="dataTesti position-absolute">
                            <p className="fs16 colorWhite mb30">{e?.para}</p>

                            <Row className="align-items-center">
                              <Col lg={6} md={6}>
                                <div className="fs18 fw600 colorWhite text-uppercase">
                                  {e?.tag}
                                </div>
                              </Col>
                              <Col lg={6} md={6}>
                                <div className="fs18 fw600 colorWhite text-uppercase mb15">
                                  - {e?.author}
                                </div>

                                <p className="colorWhite fs15">{e?.position}</p>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Testimonial;
