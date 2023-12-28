import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Slide from "react-reveal/Slide";
import { Fade, Zoom, Reveal } from "react-awesome-reveal";
import HoverVideoPlayer from 'react-hover-video-player';
import { Helmet } from "react-helmet";
import { keyframes } from "@emotion/react";
import axios from "axios";
import { PROJECT_URL } from "../../helpers/apiurls";

const Project = () => {
  const activeTheme = useSelector((state) => {
    return state && state?.persistedReducer?.theme?.dayTheme;
  });
  const [loader, setloader] = useState(true);
  const [data, setdata] = useState([]);

  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-300px, 200px, 0px);
  }
  to {
    opacity: 1;
    transform: translate3d( 0px, 0px, -200px);
  }
  `;


  useEffect(() => {
    getProjects()
  }, [])
  const getProjects = async () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json"
      },
    };

    await axios.get(PROJECT_URL, options).then((res) => {
      if (res && res.status === 200) {
        setdata(res?.data);
        setloader(false);
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Projects - GK Builders & Developers</title>
      </Helmet>
      <section className="position-relative">

        <div className="bigfont position-fixed">

          <h1>Our <br></br> Sparkling <br></br> Gems</h1>

        </div>

        <Container>
          <Fade bottom delay={100}> <h2 className="fs70 mb0 brownGradient text-center mb70">  Projects</h2> </Fade>

          {
            loader && <Row className="gy-3">
              {
                Array(6).fill().map((e, i) => {
                  <Col lg={6} md={6} key={i}>
                    <div className="skeleton" style={{ height: "400px" }}></div>
                  </Col>
                })
              }
            </Row>
          }

          {
            data.length > 0 && data?.map((e, i) => (
              i % 2 ?
                <Reveal keyframes={customAnimation} delay={100}>
                  <Row className="projectMainList mb60">
                    <Col lg={7}>
                      <Link to={e?.acf?.external_link} target="_blank">
                        <div className=" d-flex">
                          <div className="w-100">
                            <div className="imgProject2 position-relative pt20 pb20 pl20 d-flex align-items-center justify-content-center content_wrp">

                              <HoverVideoPlayer
                                videoSrc={e?.acf?.video?.url}
                                pausedOverlay={
                                  <img
                                    src={e?.x_featured_media_large}
                                    className="img-fluid w-100 h-100"
                                    alt=""
                                  />
                                }
                                loadingOverlay={
                                  <div className="loading-overlay">
                                    <div className="loading-spinner" />
                                  </div>
                                }
                                preload="metadata"
                                className="w-100"
                              />

                              <div className="position-relative">

                              </div>

                              <div className="viewLink position-absolute content-details fadeIn-bottom">
                                <Link to={e?.acf?.external_link} target="_blank" className="">
                                  <div className="circleLink text-center">
                                    <div className="crcWrapper">
                                      <img
                                        src={require("../../assets/img/home/arrowBlack.png")}
                                        className="img-fluid"
                                        alt=""
                                      />
                                    </div>

                                    <div className="colorWhite textLink fs18 fw600">
                                      View Project
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                            <div className="mt10">
                              <h3
                                className={`${activeTheme ? "colorBlack" : "colorWhite"
                                  }  fs40 fw500 mb0 text-uppercase`}
                              >
                                <Fade className="headingFont" bottom cascade damping={0.5e-1} delay={100}>
                                 
                                  <div className="headingFont" dangerouslySetInnerHTML={{ __html: e?.title?.rendered }} />
                                </Fade>
                              </h3>
                              <p className="fs22 colorBrown"><Fade className="headingFont" bottom cascade damping={0.5e-1} delay={100}>
                                {e?.acf?.address}
                              </Fade></p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </Col>
                  </Row>
                </Reveal>
                :
                <Reveal keyframes={customAnimation} delay={100}>

                  <Row className="justify-content-end mb60 projectMainList">
                    <Col lg={7}>
                      <Link to={e?.acf?.external_link} target="_blank">
                        <div className=" d-flex justify-content-end">
                          <div className="w-100">
                            <div className="imgProject position-relative pt20 pb20 pr20 d-flex align-items-center justify-content-center content_wrp">
                              <HoverVideoPlayer
                                videoSrc={e?.acf?.video?.url}
                                pausedOverlay={
                                  <img
                                    src={e?.x_featured_media_large}
                                    className="img-fluid w-100 h-100"
                                    alt=""
                                  />
                                }
                                loadingOverlay={""}
                                preload="metadata"
                                className="videoHandle w-100"
                              />
                              <div className="position-relative">
                              </div>

                              <div className="viewLink  position-absolute content-details fadeIn-bottom">
                                <Link to={e?.acf?.external_link} target="_blank" className="">
                                  <div className="circleLink text-center">
                                    <div className="crcWrapper">
                                      <img
                                        src={require("../../assets/img/home/arrowBlack.png")}
                                        className="img-fluid"
                                        alt=""
                                      />
                                    </div>

                                    <div className="colorWhite textLink fs18 fw600">
                                      View Project
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                            <div className="text-end mt10">
                              <h3
                                className={`${activeTheme ? "colorBlack" : "colorWhite"
                                  }  fs40 fw500 mb0 text-uppercase`}
                              >
                                <Fade className="headingFont" bottom cascade damping={0.5e-1} delay={100}><div className="headingFont" dangerouslySetInnerHTML={{ __html: e?.title?.rendered }} /></Fade>
                              </h3>
                              <p className="fs22 colorBrown"><Fade className="headingFont" bottom cascade damping={0.5e-1} delay={100}>{e?.acf?.address}</Fade></p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </Col>
                  </Row>
                </Reveal>
            ))
          }
         

        </Container>
      </section>

      <section
        className={`${activeTheme ? "bgGrey" : "bgBrown"
          } pt100 pb100 text-center  mt50`}
      >
        <Container>
          <Fade bottom delay={100}>
            <h2
              className={`${activeTheme ? "colorBlack" : "colorWhite"} fs50 mb55`}
            >
              Looking for quality construction?
            </h2>

          </Fade>
          <Fade>
            <Link
              className={`${activeTheme ? "bgBlack" : "bgBlack"
                } btnTheme mr12 fMedium btnMob button button--calypso`}
              to="/contact-us"
            >
              <span
                className={`${activeTheme ? "brownGradient" : "colorWhite"} mr5`}
              >
                Know More
              </span>{" "}
              <img
                src={
                  activeTheme
                    ? require("../../assets/img/home/arrDiagonal.png")
                    : require("../../assets/img/home/arrDiagonal.png")
                }
                className="img-fluid"
                alt=""
              />
            </Link>
          </Fade>

        </Container>
      </section>
    </>
  );
};

export default Project;
