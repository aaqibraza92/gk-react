import React, { useRef, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import { Col, Container, Row } from "reactstrap";
import { Helmet } from "react-helmet";
const AboutUs = () => {
  const videoRef = useRef(null);
  const [playStatus, setplayStatus] = useState(false);

  return (
    <>
      <Helmet>
        <title>About Us - GK Builders & Developers </title>
      </Helmet>
      <BreadCrumb
        // subTitle="GK Builders & Developers "
        title={
          <div>
            <span className="colorBlue">About</span>{" "}
            <span className="colorGreen">Us</span>{" "}
          </div>
        }
        //bgImage={require("../../assets/img/about/hero_about.png")}
      />
      
      <div className="bgWhite pt100 imgCont mobPb30">
<div className="container-xl">
          <Row className="align-items-center gy-4 mobilereverse">
            <Col lg={6} md={6}>
          
            </Col>

            <Col lg={6} md={6}>
          
           
            </Col>
          </Row>
        </div>
    </div>

      
      
    </>
  );
};

export default AboutUs;
