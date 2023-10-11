/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "../../assets/css/footer.css";
import {
  callSvg,
  envelopSvg,
  fb,
  globleSvg,
  linkdin,
  linkdinColor,
  locationSvg,
  twitter,
} from "../../assets/svg/Svg";

const Footer = () => {
  return (
    <footer>
      <Container>  
        <Row className="gy-5">
          <Col lg={3} md={3} xl={3}>
          <Link to="/">
          <div className="bgWhite pt15 pb15 pl15 pr15 radius mb15 text-center col-md-11">
  <img
                className="img-fluid fooTerLogo"
                src={require("../../assets/img/main_logo.png")}
                alt="logo"
              />
          </div>
            
            </Link>

            <div className="social">
                <Link to="https://www.facebook.com/profile.php?id=61550296982314" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                  <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>
                </Link>

                 <Link to="https://www.instagram.com/alamoprimarycare/" target="_blank">
                 <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                 <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"/></svg></Link>

                 <Link to="https://twitter.com/Alamoprimcare" target="_blank">
                 <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                 </Link>

                 <Link to="https://www.linkedin.com/in/alamo-primary-care-254a65288/" target="_blank">
                 <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                 </Link>

                
            </div>
          </Col>
          <Col lg={3} md={3} xl={3}>
            <h3 className="colorWhite fs30 fw500  mb40 text-uppercase">
              Get IN TOUCH
            </h3>
            <ul className="noUl">
            <li className="mb12">
                <div className="d-flex">
                  <span className="mr12">{callSvg}</span>
                  <a
                    href="tel:210-571-1338"
                    className="colorWhite fs15 fRegular itemLightwhite"
                  >
                    210-571-1338
                  </a>
                </div>
              </li>
 <li className="mb12">
                <div className="d-flex">
                  <span className="mr12">{globleSvg}</span>
                  <Link
                    to="https://alamoprimarycare.com/"
                    className="colorWhite fs15 fRegular itemLightwhite"
                  >
                 www.alamoprimarycare.com
                  </Link>
                </div>
              </li>
              <li className="mb12">
                <div className="d-flex">
                  <span className="mr12">{envelopSvg}</span>
                  <a
                    href="mailto:admin@alamoprimarycare.com"
                    className="colorWhite fs15 fRegular itemLightwhite"
                  >
                 admin@alamoprimarycare.com
                  </a>
                </div>
              </li>

            
              <li className="mb0">
                <div className="d-flex">
                  <span className="mr12">{locationSvg}</span>
                  <a
                    href="https://goo.gl/maps/ByFg1ZhGJvtVedkX7" 
                    className="colorWhite fs15 fRegular itemLightwhite" target="_blank"
                  >
                  12047 Potranco Rd Ste 105, San Antonio, TX 78253, United States
                  </a>
                </div>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={3} xl={3}>
            <h3 className="colorWhite fs30 fw500  mb40 text-uppercase">
              useful link
            </h3>
            
            <ul className="noUl">
              <li className="mb8">
                <Link
                  to="/"
                  className="colorWhite fs15 fRegular itemLightwhite"
                >
                Home
                </Link>
              </li>
              <li className="mb8">
                <Link
                  to="/about-us"
                  className="colorWhite fs15 fRegular itemLightwhite"
                >
               About Us
                </Link>
              </li>
              <li className="mb8">
                <Link
                  to="/services"
                  className="colorWhite fs15 fRegular itemLightwhite"
                >
               Services
                </Link>
              </li>
              <li className="mb8">
                <Link
                  to="/#"
                  className="colorWhite fs15 fRegular itemLightwhite"
                >
               Blog
                </Link>
              </li>
              
              <li>
                <Link
                  to="/contact-us"
                  className="colorWhite fs15 fRegular itemLightwhite"
                >
              Contact Us
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={3} xl={3}>
            <h3 className="colorWhite fs30 fw500 mb40 text-uppercase">
             Locate us
            </h3>
           

            <iframe className="w-100 radius" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.929341217516!2d-98.73212219999999!3d29.4308615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c4341b9ac9cd5%3A0x96849cc9ca8f19a9!2sAlamo%20Primary%20Care!5e0!3m2!1sen!2sin!4v1692448288032!5m2!1sen!2sin" height="230" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            
       
          </Col>
        </Row>

        <div className="copyright mt50 pt20 pb20">
          <Row className="align-items-center">
            <Col lg={6}>
              <p className="colorWhite fs14 fRegular itemLightwhite mb0 opacity55">
                Copyright {new Date().getFullYear()}. All Rights Reserved |
                Designed & Developed by <Link to="https://emporia.agency/" className="colorGreen" target="_blank">Emporia Agency</Link>
              </p>
            </Col>
            <Col lg={6}>
              <div className="d-flex justify-content-lg-end">
                <Link
                  to="/#"
                  className="colorWhite fs14 fRegular itemLightwhite mb0 mr10 opacity55"
                >
                  Terms & Condition /
                </Link>
                <Link
                  to="#"
                  className="colorWhite fs14 fRegular itemLightwhite mb0 mr10 opacity55"
                >
                  Privacy Policy /
                </Link>
                <Link
                  to="#"
                  className="colorWhite fs14 fRegular itemLightwhite mb0 opacity55"
                >
                  Help
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
