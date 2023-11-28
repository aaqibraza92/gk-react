import React from "react";
import { Timeline, Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import styled from "styled-components";
import { Fade, Zoom } from "react-awesome-reveal";
import { Col, Row } from "reactstrap";

const SectionWipes2Styled = styled.div`
  overflow: hidden;
  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #pinContainer .panel {
    height: 100vh;
    width: 100%;
    position: absolute;
    text-align: center;
  }
  .panelSec span {
    position: relative;
    display: block;
    top: 50%;
    font-size: 80px;
  }


  .panelSec.opacity {
    opacity: 1;
  }
`;

/**
 * https://github.com/bitworking/react-scrollmagic/blob/master/src/Scene.js
 *  initEventHandlers
 *  215
 *  code for on enter, on leave events
 */
const ScrollComp = (props) => {
    return (
        <>
            {/* <Controller>
        <Scene duration={600} pin={true} enabled={true} indicators={true}>
          {(progress, event) => (
            <div className="sticky">
              console.log(event);
              <span>Pin Test {JSON.stringify(event, null, 4)}</span>
            </div>
          )}
        </Scene>
        <Scene duration={200} pin={{ pushFollowers: false }} indicators={true}>
          <div className="sticky">
            <div>Pin sTest</div>
          </div>
        </Scene>
        <Scene duration={300} pin={true} offset={100} indicators={true}>
          <div className="sticky blue">
            <div>Pin Test</div>
          </div>
        </Scene>
      </Controller> */}
            <SectionWipes2Styled>
                <Controller>
                    <Scene
                        triggerHook={0}
                        duration="100%"
                        pin
                        pinSettings={{
                            pushFollowers: false,
                            spacerClass: "thisClass"
                        }}
                        indicators={true}
                    >
                        <div id="pinContainer" style={{
                            backgroundImage: `url(${require("../../assets/img/home/ver_bg.jpg")})`,
                        }}>

                            <section className="panelSec blue d-flex align-items-center">
                                <div className="container-xxl">
                                    <div className="text-center">
                                        <Zoom left>
                                            <img
                                                src={require("../../assets/img/home/three_dot.png")}
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </Zoom>
                                        <Fade left cascade damping={1e-1} delay={100}>
                                            <h2 className="colorWhite mb50 pb-5 fs50 fontlight subfont text-center">

                                                why choose us?

                                            </h2>
                                        </Fade>
                                    </div>
                                    <div className="cornerHandle">
                                        <div className="whyChsWrp">
                                            <Row className="align-items-center">
                                                <Col lg={6} md={12}>
                                                    <h3 className="brownGradient fs30 mb25 mobFs21">
                                                    SUPERIOR CONSTRUCTION
                                                    </h3>
                                                    <p className="fs14">With over three decades of unparalleled experience in construction and development, the GK group is one of the most trusted names amongst real estate developers in Hyderabad. Our name and brand are synonymous with superior quality of construction materials, best-in-industry practices and compliance with safety protocol.</p>
                                                </Col>
                                                <Col lg={6} md={12}>
                                                    <img
                                                        src={require("../../assets/img/home/layer_building.png")}
                                                        alt="building"
                                                        className="img-fluid"
                                                    />
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </Scene>
                    <Scene
                        triggerHook="onLeave"
                        duration="100%"
                        pin
                        pinSettings={{
                            pushFollowers: false,
                            spacerClass: "thisClass"
                        }}
                        indicators={true}
                        classToggle={"opacity"}
                        progressEvents={true}
                    >
                        {(propgress, event) => (
                            <section id="pinContainer" style={{
                                backgroundImage: `url(${require("../../assets/img/home/ver_bg.jpg")})`,
                            }} className="panelSec turqoise d-flex align-items-center">
                         <div className="container-xxl">
                                    <div className="text-center">
                                        <Zoom left>
                                            <img
                                                src={require("../../assets/img/home/three_dot.png")}
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </Zoom>
                                        <Fade left cascade damping={1e-1} delay={100}>
                                            <h2 className="colorWhite mb50 pb-5 fs50 fontlight subfont text-center">

                                                why choose us?

                                            </h2>
                                        </Fade>
                                    </div>
                                    <div className="cornerHandle">
                                        <div className="whyChsWrp">
                                            <Row className="align-items-center">
                                                <Col lg={6} md={12}>
                                                    <h3 className="brownGradient fs30 mb25 mobFs21">
                                                    VALUE FOR MONEY
                                                    </h3>
                                                    <p className="fs14">Even as we remain steadfast in our goal to develop Hyderabad’s most luxurious projects, our prices are among the most competitive in today’s market. We offer our customers the best value for their money and investment. While no compromises are made in the quality of construction, every effort is made to optimise costs and pass on the benefit to the customer.</p>
                                                </Col>
                                                <Col lg={6} md={12}>
                                                    <img
                                                        src={require("../../assets/img/home/valueformoney.png")}
                                                        alt="building"
                                                        className="img-fluid"
                                                    />
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}
                    </Scene>
                    <Scene
                        triggerHook="onLeave"
                        duration="100%"
                        pin
                        indicators={true}
                        classToggle={"opacity"}
                        reverse={false}
                    >
                        <section id="pinContainer" style={{
                            backgroundImage: `url(${require("../../assets/img/home/ver_bg.jpg")})`,
                        }} className="panelSec bordeaux d-flex align-items-center">
                        <div className="container-xxl">
                                    <div className="text-center">
                                        <Zoom left>
                                            <img
                                                src={require("../../assets/img/home/three_dot.png")}
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </Zoom>
                                        <Fade left cascade damping={1e-1} delay={100}>
                                            <h2 className="colorWhite mb50 pb-5 fs50 fontlight subfont text-center">

                                                why choose us?

                                            </h2>
                                        </Fade>
                                    </div>
                                    <div className="cornerHandle">
                                        <div className="whyChsWrp">
                                            <Row className="align-items-center">
                                                <Col lg={6} md={12}>
                                                    <h3 className="brownGradient fs30 mb25 mobFs21">
                                                    TRANSPARENCY
                                                    </h3>
                                                    <p className="fs14">All our operations and communication are transparent, and we encourage you to visit our sites at any time to get a look at our practices. We are committed to following all RERA guidelines and comply with all local municipal laws while developing our projects.</p>
                                                </Col>
                                                <Col lg={6} md={12}>
                                                    <img
                                                        src={require("../../assets/img/home/transparency.png")}
                                                        alt="building"
                                                        className="img-fluid"
                                                    />
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                        </section>
                    </Scene>

                    <Scene
                        triggerHook="onLeave"
                        duration="100%"
                        pin
                        indicators={true}
                        classToggle={"opacity"}
                        reverse={false}
                    >
                        <section id="pinContainer" style={{
                            backgroundImage: `url(${require("../../assets/img/home/ver_bg.jpg")})`,
                        }} className="panelSec bordeaux d-flex align-items-center">
                        <div className="container-xxl">
                                    <div className="text-center">
                                        <Zoom left>
                                            <img
                                                src={require("../../assets/img/home/three_dot.png")}
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </Zoom>
                                        <Fade left cascade damping={1e-1} delay={100}>
                                            <h2 className="colorWhite mb50 pb-5 fs50 fontlight subfont text-center">

                                                why choose us?

                                            </h2>
                                        </Fade>
                                    </div>
                                    <div className="cornerHandle">
                                        <div className="whyChsWrp">
                                            <Row className="align-items-center">
                                                <Col lg={6} md={12}>
                                                    <h3 className="brownGradient fs30 mb25 mobFs21">
                                                    TRACK RECORD
                                                    </h3>
                                                    <p className="fs14">We have tirelessly served over 4000 satisfied customers to earn the tag of one of Hyderabad’s most reliable developers. Our customers are truly our brand ambassadors and endorse our brand’s sense of commitment and professionalism. It has taken us over 35 years to build an impeccable track and reputation of one of the best real estate developers of Hyderabad we are committed to take this legacy forward.</p>
                                                </Col>
                                                <Col lg={6} md={12}>
                                                    <img
                                                        src={require("../../assets/img/home/record.png")}
                                                        alt="building"
                                                        className="img-fluid"
                                                    />
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                        </section>
                    </Scene>
                </Controller>
            </SectionWipes2Styled>
        </>
    );
};
export default ScrollComp;
