import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { checkSvg } from "../../assets/svg/Svg";

let data = [
  "Temporary/Contract",
  "Contract-to-permanent / Full-Time",
  "Permanent/Full-Time",
  "Functional services (FSP)",
];
const WhatWeDoSec = () => {
  return (
    <section className="bgLightBlue pt80 pb80">
      <Container>
        <Row className="align-items-center mobilereverse">
          <Col lg={6}>
            <img
              src={require("../../assets/img/about/clinic.jpg")}
              className="img-fluid radius10"
              alt="what we do"
            />
          </Col>
          <Col lg={6} className="intro-content">
            <div className="bgWhite shadowContent radius10 pl60 pr60 pt60 pb60">
              <h2 className="colorGreen fw600 fs45 mobFs28 fBold mb30">
                <div className="colorBlue">A Primary Care 
</div>
That Truly Cares
              </h2>
              <p className="fs18 fw400 colorBlue">
             
Cutting-edge facilities boasting advanced technology and seasoned healthcare experts

              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhatWeDoSec;
