import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import { Fade } from "react-awesome-reveal";
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
              className={`${activeTheme ? "colorBlack" : "colorWhite"
                } mb0 fontlight fw400 fs33`}
            >
              <Fade bottom cascade damping={0.5e-1}>
                about us
              </Fade>
            </p>


            <h4 className="fs36 mb0 text-uppercase colorBrown">
              <Fade bottom cascade className="brownGradient" damping={0.5e-1}>
                Exclusive communities
              </Fade>

            </h4>

            <h3 className="fs60 mb0 text-uppercase colorBrown">
              <Fade bottom cascade damping={0.5e-1}>
                For Holistic
              </Fade>
            </h3>

            <h2 className="living mb20 text-uppercase colorBrown">
              <Fade bottom cascade damping={0.5e-1}>
                Livings
              </Fade>
            </h2>
            <Fade left >
              <p className={`${activeTheme ? "colorBlack" : "colorWhite"} fs15`}>

                GK Builders and Developers aims to enhance the quality of life
                of its customers by translating today’s trends of better and
                healthy living into comfortable and pleasant homes. Through its
                superior craftsmanship, customer-friendly policies and reliable
                track record, the company has earned a stellar reputation as one
                of the best real estate builders in Hyderabad.

              </p>
            </Fade>
            <Fade left>
              <p
                className={`${activeTheme ? "colorBlack" : "colorWhite"
                  } mb55 mobMb30 fs15`}
              >

                GK Builders and Developers continues to focus on futuristic
                expansion and has chalked out plans to develop more luxurious
                residential projects across Hyderabad and Secunderabad soon.

              </p>
            </Fade>

            <div className="mt10">
              <Fade left>
                <Link className="btnTransparent mr12 fMedium btnMob button button--calypso" to="/#">
                  <span
                    className={`${activeTheme ? "colorBlack" : "colorWhite"
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
              </Fade>
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
