import React, { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import { Col, Container, Form, Label, Row } from "reactstrap";
import '../../assets/css/contact.css';
import { Helmet } from "react-helmet";
import LookingForJob from "./LookingForJob";
import LookingForTalent from "./LookingForTalent";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ContactUs = (props) => {
  const activeTheme = useSelector((state) => {
    return state && state?.persistedReducer?.theme?.dayTheme;
  });




  return (
    <>
      <Helmet>
        <title>Contact Us - GK Builders & Developers</title>
        <script
          src="https://forms.cdn.sell.do/t/forms/63e46f684443ae6f461f3ca5/63e470054443ae6f791f2d04.js" data-form-id="63e470054443ae6f791f2d04"
          crossorigin="anonymous"
          async
        ></script>
      </Helmet>

      <Container>
        <Row>
          <Col md={12}>
            <div className=" pb60 text-center position-relative ">
              <h2 className={`${activeTheme ? "contactusheading" : "contactusheadingdark"} fs90 mobFs32 colorprimary  mb-0`}>Contact Us</h2>
              <div className="bordercontactus"></div>
              <p className="fs30 colorLightBrown">Get in touch with us today</p>
            </div>

            <Row className="justify-content-center">
              <Col lg={9}>
                <Form>
                  <Row>
                    <Col lg={6} md={6}>
                      <div className="form-group">
                        <Label htmlFor="name">
                          Name
                        </Label>
                        <input className="form-control" placeholder="Name" type="text" name="name" id="name" value="" />
                      </div>
                    </Col>
                    <Col lg={6} md={6}>
                      <div className="form-group">
                        <Label htmlFor="email">
                          Email
                        </Label>
                        <input className="form-control" placeholder="Email" type="email" name="email" id="email" value="" />
                      </div>
                    </Col>
                    <Col lg={6} md={6}>
                      <div className="form-group">
                        <Label htmlFor="Phone">
                          Phone
                        </Label>
                        <input className="form-control" placeholder="Phone" type="number" name="Phone" id="Phone" value="" />
                      </div>
                    </Col>
                    <Col lg={6} md={6}>
                      <div className="form-group">
                        <Label htmlFor="project">
                          Project of interest
                        </Label>
                        <select name="project" id="project" className="form-control">
                          <option value="">Select Project of Interest</option>
                        </select>
                      </div>
                    </Col>
                    <Col lg={12} md={12}>
                      <div className="form-group">
                        <Label htmlFor="comment">
                          Comment
                        </Label>
                        <textarea name="comment" placeholder="Comment" id="comment" className="form-control"></textarea>
                      </div>
                    </Col>
                  </Row>
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
