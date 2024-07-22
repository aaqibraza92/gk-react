import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import { Fade, Flip } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
const BlogItems = () => {
  const activeTheme = useSelector((state) => {
    return state && state?.persistedReducer?.theme?.dayTheme;
  });
  return (

    <>
    
 

    <section className={`${activeTheme ? "bgWhite" : "bgFullBlack"} pt80 pb80`}>
      <Container>
        <Row className="gy-5 m-auto">
          <Col lg={5} md={5} xl={5}>
          <Fade right cascade delay={100}>
              <img
                src={require("../../assets/img/home/ver_bg.jpg")}
                className="img-fluid blogimage border"
                alt=""
              />
            </Fade>

            <p
              className={`${activeTheme ? "colorBlack" : "colorWhite"
                } mb0 fontlight fw400 fs15 mt-2`}
            >
              <Fade bottom cascade damping={0.5e-1} delay={100}>
                Blogs
              </Fade>
            </p>


            <h3 className="fs30  colorBrown">
              {/* <Fade className="headingFont"  bottom cascade damping={0.5e-1} delay={100}> */}
              GK Builders: A Leading Real Estate Company in Hyderabad

              {/* </Fade> */}
            </h3>

              <p
                className={`${activeTheme ? "colorBlack" : "colorWhite"
                  }   fs15`}
              >
                <Fade left delay={200}>
                Hyderabad, a city known for its rich cultural heritage and rapid urbanization, has seen a significant boom in its real estate market.
                </Fade>
           
              </p>

            <div className="">
              <Fade left>
                <Link className="btnTransparent mr12 fMedium btnMob button button--calypso" to="/blog-single">
                  <span
                    className={`${activeTheme ? "colorBlack" : "colorWhite"
                      } mr10`}
                  >
                    Read More
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


          <Col lg={5} md={5} xl={5}>
          <Fade right cascade delay={100}>
              <img
                src={require("../../assets/img/home/CurrentRealEstateMarketTrends.jpg")}
                className="img-fluid blogimage border"
                alt=""
              />
            </Fade>

            <p
              className={`${activeTheme ? "colorBlack" : "colorWhite"
                } mb0 fontlight fw400 fs15 mt-2`}
            >
              <Fade bottom cascade damping={0.5e-1} delay={100}>
                Blogs
              </Fade>
            </p>


            <h3 className="fs30  colorBrown">
              {/* <Fade className="headingFont"  bottom cascade damping={0.5e-1} delay={100}> */}
              Current Real Estate Market Trends in Hyderabad

              {/* </Fade> */}
            </h3>

              <p
                className={`${activeTheme ? "colorBlack" : "colorWhite"
                  }   fs15`}
              >
                <Fade left delay={200}>
                Hyderabad, the vibrant capital of Telangana, continues to be a focal point in India's real estate landscape, </Fade>
           
              </p>

            <div className="">
              <Fade left>
                <Link className="btnTransparent mr12 fMedium btnMob button button--calypso" to="/current-real-estate-market-trends-in-hyderabad">
                  <span
                    className={`${activeTheme ? "colorBlack" : "colorWhite"
                      } mr10`}
                  >
                    Read More
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

        
        </Row>
      </Container>
    </section>
    </>
  );
};

export default BlogItems;
