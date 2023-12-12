import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Slide from "react-reveal/Slide";
import { Fade, Zoom, Reveal } from "react-awesome-reveal";
import HoverVideoPlayer from 'react-hover-video-player';
import { Helmet } from "react-helmet";
import { keyframes } from "@emotion/react";

const Project = () => {
  const activeTheme = useSelector((state) => {
    return state && state?.persistedReducer?.theme?.dayTheme;
  });

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
        <Fade  bottom delay={100}> <h2 className="fs70 mb0 brownGradient text-center mb70">  Projects</h2> </Fade>
          <Reveal keyframes={customAnimation} delay={400}>

            <Row className="justify-content-end mb60 projectMainList">
              <Col lg={7}>
                <Link to="#">
                  <div className=" d-flex justify-content-end">
                    <div>
                      <div className="imgProject position-relative pt20 pb20 pr20 d-flex align-items-center justify-content-center content_wrp">
                        <HoverVideoPlayer
                          videoSrc={require("../../assets/video/casa.mp4")}
                          pausedOverlay={
                            <img
                              src={require("../../assets/img/project/pr1.png")}
                              className="img-fluid w-100 h-100"
                              alt=""
                            />
                          }
                          loadingOverlay={""}
                          preload="metadata"
                        />
                        <div className="position-relative">
                        </div>

                        <div className="viewLink  position-absolute content-details fadeIn-bottom">
                          <Link to="#" className="">
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
                          <Fade className="headingFont" bottom cascade damping={0.5e-1} delay={100}>GK's Casa Grande</Fade>
                        </h3>
                        <p className="fs22 colorBrown"><Fade className="headingFont" bottom cascade damping={0.5e-1} delay={100}>YAPRAL ROAD, SANIKPURI</Fade></p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
            </Row>
          </Reveal>

          <Reveal keyframes={customAnimation} delay={400}>
            <Row className="projectMainList mb60">
              <Col lg={7}>
                <Link to="#">
                  <div className=" d-flex">
                    <div>
                      <div className="imgProject2 position-relative pt20 pb20 pl20 d-flex align-items-center justify-content-center content_wrp">

                        <HoverVideoPlayer
                            videoSrc={require("../../assets/video/zenith.mp4")}
                          pausedOverlay={
                            <img
                              src={require("../../assets/img/project/pr2.jpg")}
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
                        />

                        <div className="position-relative">

                        </div>

                        <div className="viewLink position-absolute content-details fadeIn-bottom">
                          <Link to="#" className="">
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
                          <Fade className="headingFont" bottom cascade damping={0.5e-1} delay={100}>GK's Zenith</Fade>
                        </h3>
                        <p className="fs22 colorBrown"><Fade className="headingFont" bottom cascade damping={0.5e-1} delay={100}>YAPRAL ROAD, SANIKPURI</Fade></p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
            </Row>
          </Reveal>


          <Reveal keyframes={customAnimation} delay={400}>
            <Row className="justify-content-end mb60 projectMainList">
              <Col lg={7}>
                <Link to="#">
                  <div className=" d-flex justify-content-end">
                    <div>
                      <div className="imgProject position-relative pt20 pb20 pr20 d-flex align-items-center justify-content-center content_wrp">
                        <HoverVideoPlayer
                          videoSrc={require("../../assets/video/alam-villa.mp4")}
                          pausedOverlay={
                            <img
                              src={require("../../assets/img/project/pr3.jpg")}
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
                        />

                        <div className="position-relative">
                        </div>

                        <div className="viewLink position-absolute  content-details fadeIn-bottom">
                          <Link to="#" className="">
                            <div className="circleLink text-center ">
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
                          <Fade className="headingFont" bottom cascade damping={0.5e-1} delay={100}>GK's Alam Villas</Fade>
                        </h3>
                        <p className="fs22 colorBrown"><Fade className="headingFont" bottom cascade damping={0.5e-1} delay={100}>YAPRAL ROAD, SANIKPURI</Fade></p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
            </Row>
          </Reveal>


          <Reveal keyframes={customAnimation} delay={400}>
            <Row className="projectMainList mb60">
              <Col lg={7}>
                <Link to="#">
                  <div className=" d-flex">
                    <div>
                      <div className="imgProject2 position-relative pt20 pb20 pl20 d-flex align-items-center justify-content-center content_wrp">
                        <HoverVideoPlayer
                        videoSrc={require("../../assets/video/festton.mp4")}
                          pausedOverlay={
                            <img
                              src={require("../../assets/img/project/festoon.webp")}
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
                        />

                        <div className="viewLink position-absolute  content-details fadeIn-bottom">
                          <Link to="#" className="">
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
                          <Fade className="headingFont" bottom cascade damping={0.5e-1} delay={100}>GK's Festoon</Fade>
                        </h3>
                        <p className="fs22 colorBrown"> <Fade className="headingFont" bottom cascade damping={0.5e-1} delay={100}>YAPRAL ROAD, SANIKPURI</Fade></p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
            </Row>
          </Reveal>


          <Reveal keyframes={customAnimation} delay={400}>
            <Row className="justify-content-end mb60 projectMainList">
              <Col lg={7}>
                <Link to="#">
                  <div className=" d-flex justify-content-end">
                    <div>
                      <div className="imgProject position-relative pt20 pb20 pr20 d-flex align-items-center justify-content-center content_wrp">
                        <HoverVideoPlayer
                         videoSrc={require("../../assets/video/triad.mp4")}
                          pausedOverlay={
                            <img
                              src={require("../../assets/img/project/triad.webp")}
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
                        />

                        <div className="position-relative">
                        </div>

                        <div className="viewLink position-absolute  content-details fadeIn-bottom">
                          <Link to="#" className="">
                            <div className="circleLink text-center ">
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
                          <Fade className="headingFont" bottom cascade damping={0.5e-1} delay={100}>GK'S TRIAD</Fade>
                        </h3>
                        <p className="fs22 colorBrown"><Fade className="headingFont" bottom cascade damping={0.5e-1} delay={100}>KAPRA, SECUNDERABAD</Fade></p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
            </Row>
          </Reveal>


          <Reveal keyframes={customAnimation} delay={400}>
            <Row className="projectMainList mb60">
              <Col lg={7}>
                <Link to="#">
                  <div className=" d-flex">
                    <div>
                      <div className="imgProject2 position-relative pt20 pb20 pl20 d-flex align-items-center justify-content-center content_wrp">
                        <HoverVideoPlayer
                           videoSrc={require("../../assets/video/pearl-enclave.mp4")}
                          pausedOverlay={
                            <img
                              src={require("../../assets/img/project/pear.webp")}
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
                        />

                        <div className="viewLink position-absolute  content-details fadeIn-bottom">
                          <Link to="#" className="">
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
                          <Fade className="headingFont" bottom cascade damping={0.5e-1} delay={100}>GK'S PEARL ENCLAVE</Fade>
                        </h3>
                        <p className="fs22 colorBrown"> <Fade className="headingFont" bottom cascade damping={0.5e-1} delay={100}>KAPRA, SECUNDERABAD</Fade></p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
            </Row>
          </Reveal>


          <Reveal keyframes={customAnimation} delay={400}>
            <Row className="justify-content-end mb60 projectMainList">
              <Col lg={7}>
                <Link to="#">
                  <div className=" d-flex justify-content-end">
                    <div>
                      <div className="imgProject position-relative pt20 pb20 pr20 d-flex align-items-center justify-content-center content_wrp">
                        <HoverVideoPlayer
                           videoSrc={require("../../assets/video/surya.mp4")}
                          pausedOverlay={
                            <img
                              src={require("../../assets/img/project/surya.webp")}
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
                        />

                        <div className="position-relative">
                        </div>

                        <div className="viewLink position-absolute  content-details fadeIn-bottom">
                          <Link to="#" className="">
                            <div className="circleLink text-center ">
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
                          <Fade className="headingFont" bottom cascade damping={0.5e-1} delay={100}>GK'S SURYA ARCADE</Fade>
                        </h3>
                        <p className="fs22 colorBrown"><Fade className="headingFont" bottom cascade damping={0.5e-1} delay={100}>YAPRAL, SECUNDERABAD </Fade></p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
            </Row>
          </Reveal>

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
              to="/#"
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
