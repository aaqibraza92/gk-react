import React, { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import { Col, Container, Row } from "reactstrap";
import '../../assets/css/contact.css';
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
     
     <Container>
       <Row>
          <Col md={12}>
                <div className="pt200 pb60 text-center position-relative ">
                <h2 className="fs90 colorprimary contactusheading mb-0">Contact Us</h2>
                <div className="bordercontactus"></div>
                <p className="fs30 colorLightBrown">Get in touch with us today</p>
          </div>
          </Col>
       </Row>
     </Container>

      <section className="formSectionA pt100 pb100 bgLightBluenew">
        <Container>
          <div className="wrapperContact">
           
            
          </div>
        </Container>
      </section>

    </>
  );
};

export default ContactUs;
