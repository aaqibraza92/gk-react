import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";

const AboutUs = () => {
  const activeTheme = useSelector((state) => {
    return state && state?.persistedReducer?.theme?.dayTheme;
  });
  return (
    <section className={`${activeTheme ? "bgWhite" : "bgFullBlack"} pt80 pb80`}>
      <Container>
        <Row className="gy-5">
          <Col lg={6} md={6} xl={6}>
            <p
              className={`${
                activeTheme ? "colorBlack" : "colorWhite"
              } mb0 fontlight fw400 fs40`}
            >
              <Fade bottom cascade>
                about us
              </Fade>
            </p>
            
            <Fade bottom className="brownGradient">
            <h4 className="fs40 mb0 text-uppercase brownGradient">
                Exclusive communities
            </h4>
            </Fade>
            <h3 className="fs70 mb0 text-uppercase brownGradient">
              <Fade bottom cascade>
                For Holistic
              </Fade>
            </h3>
            <h2 className="living mb20 text-uppercase brownGradient">
              <Fade bottom cascade>
                Livings
              </Fade>
            </h2>
            <p className={`${activeTheme ? "colorBlack" : "colorWhite"}`}>
              <Fade left cascade>
                GK Builders and Developers aims to enhance the quality of life
                of its customers by translating today’s trends of better and
                healthy living into comfortable and pleasant homes. Through its
                superior craftsmanship, customer-friendly policies and reliable
                track record, the company has earned a stellar reputation as one
                of the best real estate builders in Hyderabad.
              </Fade>
            </p>
            <p
              className={`${
                activeTheme ? "colorBlack" : "colorWhite"
              } mb70 mobMb30`}
            >
              <Fade left cascade>
                GK Builders and Developers continues to focus on futuristic
                expansion and has chalked out plans to develop more luxurious
                residential projects across Hyderabad and Secunderabad soon.
              </Fade>
            </p>

            <div className="mt10">
              <Reveal effect="fadeInUp">
                <Link className="btnTransparent mr12 fMedium btnMob" to="/#">
                  <span
                    className={`${
                      activeTheme ? "colorBlack" : "colorWhite"
                    } mr10`}
                  >
                    Know More
                  </span>
                  <img
                    src={require("../../assets/img/home/arrowBrown.png")}
                    className="img-fluid"
                    alt=""
                    style={{ width: "28px" }}
                  />
                </Link>
              </Reveal>
            </div>
          </Col>
          <Col lg={6} md={6} xl={6}>
            <Fade right cascade>
              <img
                src={require("../../assets/img/home/buildings.png")}
                className="img-fluid"
                alt=""
              />
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
