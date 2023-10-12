import React, { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import Location from "./Location";
import { Col, Container, Row } from "reactstrap";

import { Helmet } from "react-helmet";
import LookingForJob from "./LookingForJob";
import LookingForTalent from "./LookingForTalent";
import { useSelector } from "react-redux";
const ContactUs = (props) => {
  const selector= useSelector((state)=>{
    return state
});


  const [switcher, setswitcher] = useState(selector?.type?.cntType==="talent" ? true : false);

  return (
    <>
      <Helmet>
        <title>Contact Us - GK Builders & Developers</title>
      </Helmet>
     
      <BreadCrumb
        // subTitle="GK Builders & Developers
        title={
          <div>
            <span className="colorBlue">Contact</span>{" "}
            <span className="colorGreen">Us</span>{" "}
          </div>
        }
        bgImage={require("../../assets/img/contactus.png")}
      />

      <section className="formSectionA pt100 pb100 bgLightBluenew">
        <Container>
          <div className="wrapperContact">
            <Row className="justify-content-center">
              <Col lg={7}>
                <div className="text-center mb30">
                  <h2 className="fw700 colorGreen text-capitalize mobFs28  fs50 "><span className="colorBlue">Get in</span> Touch</h2>
                  
                </div>
              </Col>
              <Col lg={11}>
                 <LookingForJob />
              </Col>
            </Row>


          </div>
        </Container>
      </section>

    </>
  );
};

export default ContactUs;
