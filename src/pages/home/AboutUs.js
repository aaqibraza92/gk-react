import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
const AboutUs = () => {
  const activeTheme = useSelector((state) => {
    return (
      state && state?.persistedReducer?.theme?.dayTheme
    );
  });
  return (
    <section className={`${activeTheme ? "bgWhite" : "bgFullBlack"} pt80 pb80`}> 
      <Container>
        <Row>
          <Col lg={6} md={6} xl={6}>
            <p className={`${activeTheme ? "colorBlack" : "colorWhite"} mb0 fontlight fw400 fs40`}>about us</p>
            <h4 className="fs40 mb0 text-uppercase brownGradient">Exclusive communities</h4>
            <h3 className="fs70 mb0 text-uppercase brownGradient">For Holistic</h3>
            <h2 className="living mb20 text-uppercase brownGradient">Livings</h2>
            <p className={`${activeTheme ? "colorBlack" : "colorWhite"}`}>
              GK Builders and Developers aims to enhance the quality of life of
              its customers by translating today’s trends of better and healthy
              living into comfortable and pleasant homes. Through its superior
              craftsmanship, customer-friendly policies and reliable track
              record, the company has earned a stellar reputation as one of the
              best real estate builders in Hyderabad.
            </p>
            <p className={`${activeTheme ? "colorBlack" : "colorWhite"} mb70`}>
              GK Builders and Developers continues to focus on futuristic
              expansion and has chalked out plans to develop more luxurious
              residential projects across Hyderabad and Secunderabad soon.
            </p>
            <div className="mt10">
            <Link className="btnTransparent mr12 fMedium btnMob" to="/#">
              <span className={`${activeTheme ? "colorBlack" : "colorWhite"} mr10`}>Know More</span>
              <img
                src={require("../../assets/img/home/arrowBrown.png")}
                className="img-fluid"
                alt=""
                style={{width: '28px'}}
              />
            </Link>
            </div>
       
          </Col>
          <Col lg={6} md={6} xl={6}>
            <img src={require('../../assets/img/home/buildings.png')} className='img-fluid' alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
