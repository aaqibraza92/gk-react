/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "../../assets/css/footer.css";
import {
  callSvg,
  envelopSvg,
  fb,
  globleSvg,
  instagram,
  linkdin,
  locationSvg,
  twitter,
  yt,
} from "../../assets/svg/Svg";
import { useDispatch, useSelector } from "react-redux";
import { themeType } from "../../store/slices/UserSlices";

const Footer = () => {

  const dispatch = useDispatch();
  const activeTheme = useSelector((state) => {
    return (
      state && state?.persistedReducer?.theme?.dayTheme
    );
  });
  const themeSwitch = (val) => {
    dispatch(themeType(val));
  }
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.play();
  }, [videoRef]);

  return (
    <>

      {
        activeTheme ? <button className="noBtn viewToggle" onClick={() => themeSwitch(false)}>
          <img src={require('../../assets/img/footer/dayview.png')} className="img-fluid " alt="" />
        </button> : <button className="noBtn viewToggle" onClick={() => themeSwitch(true)}>
          <img src={require('../../assets/img/footer/nightview.png')} className="img-fluid " alt="" />
        </button>
      }

      <footer className="position-relative h-100 d-flex align-items-end">
        <video className="w-100" ref={videoRef} autoplay loop muted>
          <source
            src={require("../../assets/img/home/footer-day.mp4")}
            type="video/mp4"
          />
        </video>
        <div className="position-absolute absPos w-100">
          <Container>
            <Row className="gy-5">
              <Col lg={4} md={4} xl={4}>
                <div className="radius30 fRounder pl30 pr30 pt60 pb60">
                  <ul className="pl0 noUl fNav row">
                    <li className="col-md-6">
                      <Link
                        to="#"
                        className="colorLightBrown position-relative pl17 fs16"
                      >
                        about us
                      </Link>
                    </li>
                    <li className="col-md-6">
                      <Link
                        to="#"
                        className="colorLightBrown position-relative pl17 fs16"
                      >
                        our projects
                      </Link>
                    </li>
                    <li className="col-md-6">
                      <Link
                        to="#"
                        className="colorLightBrown position-relative pl17 fs16"
                      >
                        why choose us?
                      </Link>
                    </li>
                    <li className="col-md-6">
                      <Link
                        to="#"
                        className="colorLightBrown position-relative pl17 fs16"
                      >
                        who we are?
                      </Link>
                    </li>
                    <li className="col-md-6">
                      <Link
                        to="#"
                        className="colorLightBrown position-relative pl17 fs16"
                      >
                        testimonials
                      </Link>
                    </li>
                    <li className="col-md-6">
                      <Link
                        to="#"
                        className="colorLightBrown position-relative pl17 fs16"
                      >
                        contact us
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col lg={4} md={4} xl={4}>
                <div className="radius30 fRounder pl30 pr30 pt60 pb60">
                  <div className="d-flex">
                    <div className="mr8" style={{ width: "28px" }}>
                      {locationSvg}
                    </div>
                    <div className="fs16 colorLightBrown">
                      35-8, Beside GK Saraswati Function Hall, GK Colony,
                      Sainikpuri Post, Secunderabad-500094, T.S.
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="mr8" style={{ width: "28px" }}>
                      {globleSvg}
                    </div>
                    <div className="fs16 colorLightBrown">
                      <a
                        href="https://gkdevelopers.in/"
                        className="colorLightBrown"
                      >
                        www.gkdevelopers.in
                      </a>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={4} xl={4}>
                <div className="radius30 fRounder pl30 pr30 pt60 pb60 mb30">
                  <div className="d-flex mb12">
                    <div className="mr8" style={{ width: "28px" }}>
                      {callSvg}
                    </div>
                    <div className="fs16 colorLightBrown">
                      <a href="tel:+918951761122" className="colorLightBrown"> +91 895 176 1122</a>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="mr8" style={{ width: "28px" }}>
                      {envelopSvg}
                    </div>
                    <div className="fs16 colorLightBrown">
                      <a
                        href="https://gkdevelopers.in/"
                        className="colorLightBrown"
                      >
                        www.gkdevelopers.in
                      </a>
                    </div>
                  </div>
                  <div className="d-flex mt20">
                    <div className="mr12">
                      <a href="http://" target="_blank" rel="noopener noreferrer">
                        {fb}
                      </a>
                    </div>
                    <div className="mr12">
                      <a href="http://" target="_blank" rel="noopener noreferrer">
                        {twitter}
                      </a>
                    </div>
                    <div className="mr12">
                      <a href="http://" target="_blank" rel="noopener noreferrer">
                        {instagram}
                      </a>
                    </div>
                    <div className="mr12">
                      <a href="http://" target="_blank" rel="noopener noreferrer">
                        {yt}
                      </a>
                    </div>
                    <div>
                      <a href="http://" target="_blank" rel="noopener noreferrer">
                        {linkdin}
                      </a>
                    </div>
                  </div>
                </div>



              </Col>
            </Row>

            <div className="copyright mt20 pt20 pb20 mb20">
              <Row className="align-items-center">
                <Col lg={6}>
                  <Link
                    to="#"
                    className="colorGrey fs14 fRegular  mb0 mr10 text-uppercase"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/#"
                    className="colorGrey fs14 fRegular mb0 mr10 text-uppercase"
                  >
                    Terms & Condition
                  </Link>
                </Col>
                <Col lg={6}>
                  <div className="d-flex justify-content-lg-end">
                    <p className="colorGrey fs14 fRegular itemLightwhite mb0 text-uppercase">
                      &#169; {new Date().getFullYear()}{" "}
                      <a
                        href="https://emporia.agency/"
                        target="_blank"
                        className="ml2 colorGrey"
                      >
                        Emporia Agency
                      </a>{" "}
                      PVT LTD. All rights reserved
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </footer>
    </>

  );
};

export default Footer;
