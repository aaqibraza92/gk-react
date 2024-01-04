import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import { Button, Col, Container, Form, Label, Row } from "reactstrap";
import '../../assets/css/contact.css';
import { Helmet } from "react-helmet";
import LookingForJob from "./LookingForJob";
import LookingForTalent from "./LookingForTalent";
import Select from "react-select";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ContactUs = (props) => {
  const activeTheme = useSelector((state) => {
    return state && state?.persistedReducer?.theme?.dayTheme;
  });

  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');

    // Set the script attributes (e.g., type, src, async, etc.)
    script.crossorigin = 'anonymous';
    script.src = 'https://forms.cdn.sell.do/t/forms/63e46f684443ae6f461f3ca5/63e470054443ae6f791f2d04.js';
    script.async = true;
    script.setAttribute('data-form-id', '63e470054443ae6f791f2d04');

    // Append the script to the body
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [projectType, setprojectType] = useState([])



  return (
    <>
      <Helmet>
        <title>Contact Us - GK Builders & Developers</title>

      </Helmet>

      <Container>
        <Row>
          <Col md={12}>

            <div className=" pb60 text-center position-relative pt-3">
              <h2 className={`${activeTheme ? "contactusheading" : "contactusheadingdark"} fs90 mobFs32 colorprimary  mb-0`}>Contact Us</h2>
              <div className="bordercontactus"></div>
              <p className="fs30 colorLightBrown">Get in touch with us today</p>
            </div>

            <Row className="justify-content-center">
              <Col lg={9}>
                <script src="https://forms.cdn.sell.do/t/forms/63e46f684443ae6f461f3ca5/63e470054443ae6f791f2d04.js" data-form-id="63e470054443ae6f791f2d04"
                  crossorigin="anonymous" async></script>
                <Form className={activeTheme ? "dayForm" : "nightForm"}>

                </Form>
              </Col>
            </Row>


          </Col>
        </Row>
      </Container>

      <section>
        <Container>

        </Container>
      </section>




      <section className="pt100">
        <Container>
          <Row>
            <Col md={9} className="m-auto">
              <Link
                className="" target="_blank"
                to="https://maps.app.goo.gl/pHyxRxwTHSKB4amb7"
              >
                <img src={require('../../assets/img/aboutus/gmap.png')} className='img-fluid newboxshadow' alt="" />
              </Link>


            </Col>
          </Row>
        </Container>
      </section>

    </>
  );
};

export default ContactUs;
