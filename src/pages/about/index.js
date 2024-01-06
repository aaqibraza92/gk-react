import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import "../../assets/css/about.css";
import "../../assets/css/footer.css";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import ScrollTrigger from "react-scroll-trigger";
import Reveal, { Fade, Flip } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Player } from "video-react";
import axios from "axios";
import { TEAM_URL } from "../../helpers/apiurls";

const AboutUs = () => {
  const [vision, setvision] = useState(false);
  const [vision1, setvision1] = useState(false);
  const [loader, setloader] = useState(true);
  const [data, setdata] = useState([]);
  const activeTheme = useSelector((state) => {
    return state && state?.persistedReducer?.theme?.dayTheme;
  });

  // const videoRef = useRef(null);
  // useEffect(() => {
  //   videoRef.current.play();
  // }, [videoRef]);

  // const videoRefn = useRef(null);
  // useEffect(() => {
  //   videoRefn.current.play();
  // }, [videoRefn]);
  const [playStatus, setplayStatus] = useState(false);

  const customAnimation = keyframes`
	from {
		clip-path: inset(0 100% 0 0);
    background-color: #222222;
	}
	to {
		clip-path: inset(0 0 0 0);
    background-color: #222222;
	}
  0%, 50% {
		transform-origin: 0 50%;
	}
	
	60%, 100% {
		transform-origin: 100% 50%;		
	}

	
	60% {
		transform: scaleX(1);
	}
	
	100% {
		transform: scaleX(0);
	}
`;

  useEffect(() => {
    getAbout()
  }, [])
  const getAbout = async () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json"
      },
    };

    await axios.get(TEAM_URL, options).then((res) => {
      if (res && res.status === 200) {
        setdata(res?.data);
        setloader(false);
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>About Us - GK Builders & Developers</title>
      </Helmet>
   
      <section className="heroSection aboutus position-relative d-flex align-items-center">
        <h1 className="text-white fs70 subfont text-uppercase reveal-text1 position-relative leftBorder pl20">
          <Reveal keyframes={customAnimation} delay={400} className="aniCl">
            <div className="w-100 vHidden">Lorem ipsum</div>
          </Reveal>
          About Us
        </h1>
      </section>

      <div
        className={`${activeTheme ? "bgWhite" : "bgBlueGradient"
          } pt80 pb80 mobPb30`}
      >
        <div className="container-xl">
          <Row className="align-items-center gy-4">
            <Col lg={7} md={7}>
              <Fade bottom cascade>
                <h3
                  className={`${activeTheme ? "colorBlack" : "brownGradient"
                    } fs50 mobFs30`}
                >
                  Our legacy <br></br> dates back to
                </h3>
              </Fade>
              <Fade left cascade>
                <h3
                  className={`${activeTheme ? "colorBlack" : "brownGradient"
                    } fs140`}
                >
                  {" "}
                  <br style={{ display: "none" }} />
                  1985
                </h3>
                {/* <h2 className={`${activeTheme ? "colorBlack" : "brownGradient"} fs140`}>
                1985
                </h2> */}
              </Fade>
              <Fade bottom delay={100}>
                <p
                  className={`${activeTheme ? "colorBlack" : "colorWhite"
                    } fs15`}
                >
                  When it comes to real estate developers in Hyderabad providing
                  quality, transparency, and professionalism, the name that
                  garners unflinching trust is GK BUILDERS AND DEVELOPERS.
                  Committed to creating well-landscaped luxurious abodes for the
                  elite of the city, the company follows customer-friendly
                  policies and best-in-industry practices.
                </p>
              </Fade>
              <Fade bottom delay={100}>
                <p
                  className={`${activeTheme ? "colorBlack" : "colorWhite"
                    } fs15`}
                >
                  Over a period of three and half decades GK BUILDERS AND
                  DEVELOPERS has carved a distinct niche for itself through
                  several projects spread over mainly in Sainikpuri zone of
                  Secunderabad. The very fact that two colonies have been named
                  after this group shows the strong presence it has in this
                  zone.
                </p>
              </Fade>
              <Fade bottom delay={100}>
                <p
                  className={`${activeTheme ? "colorBlack" : "colorWhite"
                    } fs15`}
                >
                  Having developed about 3 million sq ft., GK BUILDERS AND
                  DEVELOPERS is now focusing on developing large housing schemes
                  in the form of gated communities in the peripheral areas of
                  the twin cities, which are fast developing to meet the housing
                  requirements of middle and upper middle-class customers. From
                  project to project, they strengthened their customer base by
                  improving quality and design as per the changing needs and
                  tastes of the modern customers.
                </p>
              </Fade>
              <Fade bottom delay={100}>
                <p
                  className={`${activeTheme ? "colorBlack" : "colorWhite"
                    } fs15`}
                >
                  Founded 36 years ago by Late Sri.K. Ramakrishnaiah, GK
                  BUILDERS AND DEVELOPERS groomed many young people to become
                  independent builders by themselves. Many of the reputed
                  builders in this area have their roots with the organisation
                  for whom construction is a profession and community work a
                  passion.
                </p>
              </Fade>
            </Col>

            <Col lg={5} md={5} className="text-center">
              <Fade right cascade delay={200}>
                <img
                  src={require("../../assets/img/aboutus/settings.gif")}
                  className="img-fluid"
                  alt=""
                />
                {/* <Player className="w-100" autoPlay={true} loop={true} muted={true} controls={false}>
                      <source
                        src={require("../../assets/video/settings.mp4")}
                      />
                    </Player> */}
              </Fade>
            </Col>
          </Row>
        </div>
      </div>

      <div className="bgmission pt80 pb80 ">
        <div className="position-relative mobPb30 mb60">
          <section className="mb30">
            <div className="container-xl">
              <Row className="align-items-center">
                <Col lg={6} md={12} sm={12}>
                  <div className="visionvidio">
                    <Player className="w-100" autoPlay={true} loop={true} muted={true} controls={false}>
                      <source
                        src={require("../../assets/img/home/Visionweb.mp4")}
                      />
                    </Player>
                    {/* <video className="w-100" ref={videoRef} autoplay loop muted>
                      <source
                        src={require("../../assets/img/home/Visionweb.mp4")}
                        type="video/mp4"
                      />
                    </video> */}
                  </div>
                </Col>
              </Row>
            </div>
          </section>

          <section
            className={`${activeTheme ? "bgfifty" : "bgfiftyBrown"} mainabhout`}
          >
            <div className="container-xl">
              <Row className="align-items-center gy-4 ">
                <Col lg={6} md={12} sm={12} className="text-left aboutusnew">
                  <ScrollTrigger onEnter={() => setvision(true)}>
                    {vision && (
                      <div
                        className={`position-relative ${activeTheme ? "bordernew" : "borderBlack"
                          } `}
                      >
                        <Reveal
                          keyframes={customAnimation}
                          delay={400}
                          className="aniCl"
                        >
Our vision is to enhance the quality of living by offering the best living spaces in the twin cities of
Hyderabad and Secunderabad. We want to give our customers an experience of best branded
materials and create a comfortable and safe living space at a competitive price.
                        </Reveal>
                        <h3 className="fs45 subfont position-relative">

                          Our Vision
                        </h3>
                        <p
                          className={`position-relative ${activeTheme ? "colorLight" : "colorWhite"
                            } fs16 w-85 mb-0`}
                        >
Our vision is to enhance the quality of living by offering the best living spaces in the twin cities of
Hyderabad and Secunderabad. We want to give our customers an experience of best branded
materials and create a comfortable and safe living space at a competitive price.
                        </p>
                      </div>
                    )}
                  </ScrollTrigger>
                </Col>
              </Row>
            </div>
          </section>
        </div>

        <div className="position-relative mb60">
          <section
            className={`${activeTheme ? "bgfiftymission" : "bgfiftymissionBrown"
              }  pb40 pt40 newone`}
          >
            <div className="container-xl">
              <Row className="align-items-center gy-4">
                <Col lg={6} md={12} sm={12} className="text-left">
                  <ScrollTrigger onEnter={() => setvision1(true)}>
                    {vision1 && (
                      <div
                        className={`position-relative ${activeTheme ? "bordernew" : "borderBlack"
                          } `}
                      >
                        <Reveal
                          keyframes={customAnimation}
                          delay={400}
                          className="aniCl"
                        >

Our mission is to extend our horizons beyond the existing areas and continue our legacy as the
most trusted developer in Telangana. We aim to foster trust among our clientele, potential
customers and create an unparalleled reputation and track record.
                        </Reveal>
                        <h3 className="fs45 subfont position-relative">

                          Our Mission{" "}
                        </h3>
                        <p
                          className={` position-relative ${activeTheme ? "colorLight" : "colorWhite"
                            } fs16 w-85`}
                        >

Our mission is to extend our horizons beyond the existing areas and continue our legacy as the
most trusted developer in Telangana. We aim to foster trust among our clientele, potential
customers and create an unparalleled reputation and track record.
                        </p>
                      </div>
                    )}
                  </ScrollTrigger>
                </Col>
              </Row>
            </div>
          </section>

          <section className="mainabhoutnew">
            <div className="container-xl">
              <Row className="align-items-center gy-4 ">
                <Col lg={6} md={12} sm={12} className="secondaboutus">
                  <div className="visionvidio">
                    <Player className="w-100" autoPlay={true} loop={true} muted={true} controls={false}>
                      <source
                        src={require("../../assets/img/home/Missionweb.mp4")}
                      />
                    </Player>
                    {/* <video
                      className="w-100"
                      ref={videoRefn}
                      autoplay
                      loop
                      muted
                    >
                      <source
                        src={require("../../assets/img/home/Missionweb.mp4")}
                        type="video/mp4"
                      />
                    </video> */}
                  </div>
                </Col>
              </Row>
            </div>
          </section>
        </div>
      </div>

      <div
        className={`${activeTheme ? "bgourteam" : "bgBlueGradient"
          } pt80 pb80 mobPb30`}
      >
        <div className="container-xl">
          <Row className="align-items-center gy-4  ">
            <Col lg={12} md={12} className="text-center">
              <Fade bottom cascade>
                <h3
                  className={`${activeTheme ? "fontlight" : "brownGradient"
                    } fs50 mobFs30  text-uppercase subfont `}
                >
                  Our
                  <br className="d-none" /> Pillars{" "}
                </h3>
              </Fade>
              <Fade bottom cascade>
                <h3
                  className={`${activeTheme ? "fontlight" : "brownGradient"
                    } fs28 fs16 subfont fontlight`}
                >
                  GK Group’s <br className="d-none" />
                  Foundation
                </h3>
              </Fade>
              <div className="devider"></div>
            </Col>
            {
              loader && <Row className="gy-3">
                {
                  Array(2).fill().map((e, i) => {
                    <Col lg={6} md={6} key={i}>
                      <div className="skeleton" style={{ height: "400px" }}></div>
                    </Col>
                  })
                }
              </Row>
            }
            {
              data.length > 0 && data?.map((e, i) => (
                <Col key={i} lg={5} md={5} className="text-center m-auto mb30">
                  <Fade bottom cascade>
                    <img
                      src={e?.x_featured_media_large}
                      className="img-fluid w-75"
                      alt=""
                    />
                  </Fade>
                  <div className={` text-start mt20 border-start pl30 `}>
                    <Fade bottom>
                      <p className={`${activeTheme ? "text-white" : "paraGrey"}`}>
                        <div dangerouslySetInnerHTML={{ __html: e?.content?.rendered }} />
                      </p>
                    </Fade>

                    <b className="colorWhite">
                      <Fade bottom cascade damping={0.5e-1} delay={100}>
                        {
                          e?.title?.rendered
                        }
                      </Fade>
                      <br></br>
                      {
                        e?.acf?.designation
                      }
                    </b>
                  </div>
                </Col>
              ))
            }

          </Row>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
