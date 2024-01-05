import React, { useEffect, useState } from "react";
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
import { Fade, Zoom } from "react-awesome-reveal";
import axios from "axios";
import { TESTIMONIAL_URL } from "../../helpers/apiurls";

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
    return state && state?.persistedReducer?.theme?.dayTheme;
  });
  const [loader, setloader] = useState(true);
  const [data1, setdata1] = useState([]);

  useEffect(() => {
    getAbout();
  }, []);
  const getAbout = async () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };

    await axios.get(TESTIMONIAL_URL, options).then((res) => {
      if (res && res.status === 200) {
        setdata1(res?.data);
        setloader(false);
      }
    });
  };

  return (
    <section
      className="testimonial d-flex h-100 pt100 pb100"
      style={{
        backgroundImage: `url(${
          activeTheme
            ? require("../../assets/img/home/what_say.jpg")
            : require("../../assets/img/home/test_night.jpg")
        })`,
      }}
    >
      <div className="wrapper_what_people w-100">
        <Container>
          <Row>
            <Col lg={2} md={2} xl={2}>
              <div>
                <Zoom left>
                  <img
                    src={require("../../assets/img/home/three_dot.png")}
                    className="img-fluid"
                    alt=""
                  />
                </Zoom>

                <h2 className="colorWhite fs50 fontlight subfont mt10">
                  <Fade left cascade damping={1e-1} delay={100}>
                    What
                  </Fade>
                  <br />
                  <Fade left cascade damping={1e-1} delay={100}>
                    People
                  </Fade>
                  <br />
                  <Fade left cascade damping={1e-1} delay={100}>
                    Say
                  </Fade>
                </h2>
              </div>
            </Col>
            <Col lg={7} md={7} xl={7}>
              <div className="pl30 pr30 mobPlr0 position-relative">
                <Swiper
                  slidesPerView={"1"}
                  centeredSlides={true}
                  modules={[Navigation, Pagination, Autoplay]}
                  loop={true}
                  speed={1000}
                  autoPlay={{ delay: 1500 }}
                  spaceBetween={8}
                  pagination={{
                    clickable: true,
                  }}
                  className="mySwiper dotscss"
                >
                  <div className="bloggerList">
                    {data1.length > 0 &&
                      data1?.map((e, i) => (
                        <SwiperSlide key={i}>
                          <div className="test_wrapper position-relative d-flex align-items-end">
                            <div className="position-relative bg-home">
                              <div className="dataTesti">
                                <img
                                  src={e?.x_featured_media_large}
                                  className="img-fluid  heartAuthor"
                                  alt=""
                                />
                                <div className="testimonials">
                                  <p className="fs16 fs12 colorWhite mb30">
                                  <div dangerouslySetInnerHTML={{ __html: e?.content?.rendered }} />
                                  </p>

                                  <Row className="align-items-center">
                                    <Col lg={4} md={2}></Col>
                                    <Col lg={8} md={10}>
                                      <div className="fs18 fw600 colorWhite text-uppercase mb-1">
                                        - {e?.title?.rendered}
                                      </div>

                                      <p className="colorWhite fs16 fs12 ">
                                        {e?.acf?.position}
                                      </p>
                                    </Col>
                                  </Row>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                  </div>
                </Swiper>
                <div className="nextText">
                <span className="shake">Click to Next</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Testimonial;
