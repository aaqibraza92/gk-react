import React, { useState } from "react";
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


  const [projectType, setprojectType] = useState([])



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
            <div className=" pb60 text-center position-relative pt-3">
              <h2 className={`${activeTheme ? "contactusheading" : "contactusheadingdark"} fs90 mobFs32 colorprimary  mb-0`}>Contact Us</h2>
              <div className="bordercontactus"></div>
              <p className="fs30 colorLightBrown">Get in touch with us today</p>
            </div>

            <Row className="justify-content-center">
              <Col lg={9}>
                <Form className={activeTheme ? "dayForm" : "nightForm"}>
                  <Row>
                    <Col lg={6} md={6} className="mb-3">
                      <div className="form-group">

                        <input className="form-control customfiled" placeholder="Full Name" type="text" name="name" id="name" />
                      </div>
                    </Col>
                    <Col lg={6} md={6} className="mb-3">
                      <div className="form-group">

                        <input className="form-control customfiled" placeholder="Email" type="email" name="email" id="email" />
                      </div>
                    </Col>
                    <Col lg={6} md={6} className="mb-3">
                      <div className="form-group">

                        <input className="form-control customfiled" placeholder="Phone Number" type="tel" name="Phone" id="Phone" />
                      </div>
                    </Col>
                    <Col lg={6} md={6} className="mb-3">
                      <div className="form-group">

                        {/* <Select
                          classNamePrefix="themeSelect"
                          className="themeSelect"
                          options={[
                            { value: "Permanent", label: "Permanent" },
                            { value: "Contract", label: "Contract" },
                            { value: "Not Sure", label: "Not Sure" }
                          ]}
                          value={projectType}
                          placeholder={<div>Employment type *</div>}
                          onChange={(e) => setprojectType(e)}
                        /> */}
                        <select data-required="true" data-validator="string" className="form-control customfiled" name="sell_do[form][lead][project_id]">
                          <option value="" disabled selected>Select project of interest</option>
                          <option value="63e61e9b8eb6d81df3424152">TRAID</option>
                          <option value="63e61ede8eb6d81daf4244ee">Pearl Enclave</option>
                          <option value="63e61f588eb6d81daf424527">Zenith</option>
                          <option value="63e61fab8eb6d801482cd5b7">Casa Grande</option>
                          <option value="63e6205a8eb6d8015f2cbca8">Festoon</option>
                          <option value="63e621cc8eb6d81df3424282">Park East End</option>
                          <option value="63e622048eb6d812e037c0ac">SURYA ARCADE</option>
                          <option value="63e6223a8eb6d86d02b4d8cc">Silver Leaf</option>
                          <option value="63ef6770ed23e966057bbf8a">Casa Grande 1 </option>
                          <option value="63ef67b7ed23e962a52d97a0">Casa Grande 2</option>
                          <option value="63ef67f9ed23e9706613cf2e">Casa Grande 3 </option>
                          <option value="63ef6852ed23e9719a5b73e4">Alam Villas</option>
                          <option value="63ef771ced23e962bc2d9906">Ram Arcade</option>
                        </select>
                      </div>
                    </Col>
                    <Col lg={12} md={12} className="mb-3">
                      <div className="form-group">

                        <textarea name="comment" placeholder="Comment" id="comment" rows={2} className="form-control customfiled"></textarea>
                      </div>
                    </Col>

                    <Col lg={9} md={9} className="mb-3">
                      <div className="form-group">
                        <p>I authorize GK Builders and Developers and its representatives to Call, SMS, Email or WhatsApp me about its product and offers. The consent overrides any registration for DNC/NDNC.</p>
                      </div>
                    </Col>
                    <Col lg={3} md={3} className="mb-3">
                      <div className="form-group text-end">

                        <Button
                          className={`${activeTheme ? "bgBlack" : "bgBlack"} d-flex w-100 justify-content-center btnTheme mr12 fMedium btnMob button button--calypso`}
                          to="#!"
                        >
                          <span className={`${activeTheme ? "brownGradient" : "colorWhite"} mr5`}>Submit</span> <img src={activeTheme ? require('../../assets/img/home/arrDiagonal.png') : require('../../assets/img/home/arrDiagonal.png')} className="img-fluid" alt="" />
                        </Button>
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
