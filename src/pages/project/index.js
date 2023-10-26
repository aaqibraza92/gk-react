import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Slide from 'react-reveal/Slide';

const Project = () => {
  const activeTheme = useSelector((state) => {
    return (
      state && state?.persistedReducer?.theme?.dayTheme
    );
  });

  return (
    <>
      <section>
        <Container>
          <h2 className="fs70 mb0 brownGradient text-center mb70">Projects</h2>

          <Row className="justify-content-end mb60 projectMainList">
            <Col lg={7}>
              <Link to="#">
                <div className=" d-flex justify-content-end">
                  <div>
                    <div className="imgProject position-relative pt20 pb20 pr20 d-flex align-items-center justify-content-center">
                      <img
                        src={require("../../assets/img/project/pr1.png")}
                        className="img-fluid"
                        alt=""
                      />
                      <div className="viewLink  position-absolute">
                        
                        <Link to="#" className="animateUp overtext">
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
                      <h3 className="colorBlack fs50 fw500 mb0 text-uppercase">
                        GK's Casa Grande
                      </h3>
                      <p className="fs25 colorBrown">YAPRAL ROAD, SANIKPURI</p>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>

          <Row className="projectMainList">
            <Col lg={7}>
              <Link to="#">
                <div className=" d-flex">
                  <div>
                    <div className="imgProject2 position-relative pt20 pb20 pl20 d-flex align-items-center justify-content-center">
                      <img
                        src={require("../../assets/img/project/pr2.jpg")}
                        className="img-fluid"
                        alt=""
                      />
                            <div className="viewLink position-absolute">
                        <Link to="#" className="animateUp overtext">
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
                      <h3 className="colorBlack fs50 fw500 mb0 text-uppercase">
                        GK's Casa Grande
                      </h3>
                      <p className="fs25 colorBrown">YAPRAL ROAD, SANIKPURI</p>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>

          <Row className="justify-content-end mb60 projectMainList">
            <Col lg={7}>
              <Link to="#" >
                <div className=" d-flex justify-content-end">
                  <div>
                    <div className="imgProject position-relative pt20 pb20 pr20 d-flex align-items-center justify-content-center">
                      <img
                        src={require("../../assets/img/project/pr3.jpg")}
                        className="img-fluid"
                        alt=""
                      />
                      <div className="viewLink position-absolute">
                        <Link to="#" className="animateUp overtext">
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
                      <h3 className="colorBlack fs50 fw500 mb0 text-uppercase">
                        GK's Casa Grande
                      </h3>
                      <p className="fs25 colorBrown">YAPRAL ROAD, SANIKPURI</p>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>

          <Row className="projectMainList">
            <Col lg={7}>
              <Link to="#">
                <div className=" d-flex">
                  <div>
                    <div className="imgProject2 position-relative pt20 pb20 pl20 d-flex align-items-center justify-content-center">
                      <img
                        src={require("../../assets/img/project/pr4.jpg")}
                        className="img-fluid"
                        alt=""
                      />
                            <div className="viewLink position-absolute">
                        <Link to="#" className="animateUp overtext">
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
                      <h3 className="colorBlack fs50 fw500 mb0 text-uppercase">
                        GK's Casa Grande
                      </h3>
                      <p className="fs25 colorBrown">YAPRAL ROAD, SANIKPURI</p>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt100 pb100 text-center bgGrey mt50">
        <Container>
          <h2 className="colorBlack fs50 mb55">Looking for quality construction?</h2>
          <Link
                    className={`${activeTheme ? "bgBlack" : "bgBlack"} btnTheme mr12 fMedium btnMob`}
                    to="/#"
                  >
                   <span className={`${activeTheme ? "brownGradient" : "colorWhite"} mr5`}>Know More</span> <img src={activeTheme ? require('../../assets/img/home/arrDiagonal.png') : require('../../assets/img/home/arrDiagonal.png')} className="img-fluid" alt="" />
                  </Link>
        </Container>
      </section>
    </>
  );
};

export default Project;
