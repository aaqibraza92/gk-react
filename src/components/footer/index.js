/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
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
import { Fade, Zoom } from "react-awesome-reveal";
import { viewPortFunc } from "../../store/slices/SliderReducer";
import { Player } from "video-react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    window.addEventListener("load", function () {
      dispatch(viewPortFunc(false));
    });
  }, []);
  const viewPort = useSelector((state) => {
    return state && state?.persistedReducer?.Slider?.viewPort;
  });

  const activeTheme = useSelector((state) => {
    return state && state?.persistedReducer?.theme?.dayTheme;
  });
  const themeSwitch = (val) => {
    dispatch(themeType(val));
    window.location.reload();
  };
  // const videoRef = useRef(null);
  // const videoRef1 = useRef(null);
  // useEffect(() => {
  //   if(videoRef && activeTheme){
  //     videoRef?.current.play();
  //   }else{
  //     videoRef1?.current.play();
  //   }
  // }, [videoRef]);

  return (
    <>
      {activeTheme ? (
        <button className="noBtn viewToggle" onClick={() => themeSwitch(false)}>
          <img
            src={require("../../assets/img/footer/dayview.png")}
            className="img-fluid "
            alt=""
          />
        </button>
      ) : (
        <button className="noBtn viewToggle" onClick={() => themeSwitch(true)}>
          <img
            src={require("../../assets/img/footer/nightview.png")}
            className="img-fluid "
            alt=""
          />
        </button>
      )}

      {/* <section className={`${location?.pathname==="/" && (viewPort ? "d-block" : "d-none")}`}> */}
      <footer
        className={`position-relative h-100 d-flex align-items-end mainFooer`}
      >
        {activeTheme ? (
          <Player
            className="w-100"
            autoPlay={true} playsinline={true} loop={true} muted={true} controls={false}
          >
            <source src={require("../../assets/img/footer/footer-day.mp4")} />
          </Player>
        ) : (
          <Player
            className="w-100"
            autoPlay={true} playsinline={true} loop={true} muted={true} controls={false}
          >
            <source src={require("../../assets/img/footer/night-footer.mp4")} />
          </Player>
        )}

        <div className="position-absolute absPos w-100">
          <div className="container-xxl">
            <Row className="gy-3">
              <Col lg={4} md={6} xl={4}>
                <Fade bottom>
                  <div className="radius30 fRounder pl30 pr30 pt60 pb60">
                    <ul className="pl0 noUl fNav row cssfont">
                      <li className="col-md-6 col-6">
                        <Link
                          to="/about-us"
                          className={`${activeTheme ? "colorLightBrown" : "colorGrey1"
                            } position-relative pl17 fs16`}
                        >
                          about us
                        </Link>
                      </li>
                      <li className="col-md-6 col-6">
                        <Link
                          to="/project"
                          className={`${activeTheme ? "colorLightBrown" : "colorGrey1"
                            } position-relative pl17 fs16`}
                        >
                          our projects
                        </Link>
                      </li>
                      <li className="col-md-6 col-6">
                        <HashLink
                          className={`${activeTheme ? "colorLightBrown" : "colorGrey1"
                            } position-relative pl17 fs16`}
                          to="/#choose-us"
                        >
                          why choose us?
                        </HashLink>
                      </li>

                      <li className="col-md-6 col-6">
                        <HashLink
                          className={`${activeTheme ? "colorLightBrown" : "colorGrey1"
                            } position-relative pl17 fs16`}
                          to="/#who-we-are"
                        >
                          who we are?
                        </HashLink>

                      </li>
                      <li className="col-md-6 col-6">
                        <HashLink
                          className={`${activeTheme ? "colorLightBrown" : "colorGrey1"
                            } position-relative pl17 fs16`}
                          to="/#testimonial"
                        >
                          testimonials
                        </HashLink>

                      </li>
                      <li className="col-md-6 col-6">
                        <Link
                          to="/contact-us"
                          className={`${activeTheme ? "colorLightBrown" : "colorGrey1"
                            } position-relative pl17 fs16`}
                        >
                          contact us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Fade>
              </Col>

              <Col lg={4} md={6} xl={4}>
                <Fade bottom>
                  <div className="radius30 fRounder pl30 pr30 pt60 pb60">
                    <div className="d-flex">
                      <div className="mr8" style={{ width: "28px" }}>
                        {locationSvg}
                      </div>
                      <div
                        className={`${activeTheme ? "colorLightBrown" : "colorGrey1"
                          } fs15`}
                      >
                        35-8, Aasta 2nd floor Beside GK Saraswati Function Hall, GK Colony, Sainikpuri Post, Secunderabad-500094, T.S.
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="mr8" style={{ width: "28px" }}>
                        {globleSvg}
                      </div>
                      <div
                        className={`${activeTheme ? "colorLightBrown" : "colorGrey1"
                          } fs16`}
                      >
                        <a
                          href="https://gkdevelopers.in/"
                          className={`${activeTheme ? "colorLightBrown" : "colorGrey1"
                            } fs16`}
                        >
                          www.gkdevelopers.in
                        </a>
                      </div>
                    </div>
                  </div>
                </Fade>
              </Col>

              <Col lg={4} md={6} xl={4}>
                <Fade bottom>
                  <div className="radius30 fRounder pl30 pr30 pt60 pb60 mb30">
                    <div className="d-flex mb12">
                      <div className="mr8" style={{ width: "28px" }}>
                        {callSvg}
                      </div>
                      <div
                        className={`${activeTheme ? "colorLightBrown" : "colorGrey1"
                          } fs16`}
                      >
                        <a
                          href="tel:+91 8951761122"
                          className={`${activeTheme ? "colorLightBrown" : "colorGrey1"
                            } fs16`}
                        >
                          {" "}
                          +91 89517 61122
                        </a>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="mr8" style={{ width: "28px" }}>
                        {envelopSvg}
                      </div>
                      <div
                        className={`${activeTheme ? "colorLightBrown" : "colorGrey1"
                          } fs16`}
                      >
                        <a
                          href="mailto:salesteam@gkdevelopers.in"
                          className={`${activeTheme ? "colorLightBrown" : "colorGrey1"
                            } fs16`}
                        >
                          salesteam@gkdevelopers.in
                        </a>
                      </div>
                    </div>
                    <div className="d-flex mt20">
                      <div className="mr12">
                        <a
                          href="https://www.facebook.com/gkbuilderanddevelopers/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {fb}
                        </a>
                      </div>
                      <div className="mr12 whitesvg">
                        <a
                          href="https://twitter.com/GkbuildersD"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {twitter}
                        </a>
                      </div>
                      <div className="mr12">
                        <a
                          href="https://www.instagram.com/gk_builders_and_developers/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {instagram}
                        </a>
                      </div>
                      <div className="mr12">
                        <a
                          href="https://www.youtube.com/channel/UCUOWq1ROcrULJNuVIs4n4Lw"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {yt}
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://www.linkedin.com/company/gk-builders-and-developers/about/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {linkdin}
                        </a>
                      </div>
                    </div>
                  </div>
                </Fade>
              </Col>
            </Row>

            <div className="copyright mt20 pt20 pb20 mb20">
              <Row className="align-items-center">
                <Col lg={4}>
                  <div className="d-flex flex-wrap">
                      <Link
                      to="/privacy-policy"
                      className="colorGrey fs12 fRegular mb0 mr10 text-uppercase"
                    >
                      <Fade bottom> Privacy Policy</Fade>
                    </Link> 
                    <HashLink
                      className={`${activeTheme ? "colorLightBrown" : "colorGrey1"
                        } colorGrey fs12 fRegular  mb0 mr10 text-uppercase`}
                      to="/privacy-policy/#terms-conditions"
                    >
                     <Fade bottom> Terms & Condition</Fade>
                    </HashLink>

                    
                  </div>
                </Col>
                <Col lg={8}>
                  <Fade bottom>
                    <div className="d-flex justify-content-lg-end">
                      <p className="colorGrey fs12 fsm14 fRegular itemLightwhite mb0 text-uppercase">
                        &#169; {new Date().getFullYear()} GK GROUP ALL RIGHTS
                        RESERVED. DESIGNED AND MANAGED BY{" "}
                        <a
                          href="https://emporia.agency/"
                          target="_blank"
                          className="ml2 colorGrey"
                        >
                          EMPORIA AGENCY{" "}
                        </a>
                      </p>
                    </div>
                  </Fade>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </footer>
      {/* </section> */}
    </>
  );
};

export default Footer;
