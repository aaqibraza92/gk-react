import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const AboutUs = () => {
  return (
    <section className="pt80 pb80"> 
      <Container>
        <Row>
          <Col lg={6} md={6} xl={6}>
            <p>about us</p>
            <h4>Exclusive communities</h4>
            <h3>For Holistic</h3>
            <h2>Livings</h2>
            <p>
              GK Builders and Developers aims to enhance the quality of life of
              its customers by translating today’s trends of better and healthy
              living into comfortable and pleasant homes. Through its superior
              craftsmanship, customer-friendly policies and reliable track
              record, the company has earned a stellar reputation as one of the
              best real estate builders in Hyderabad.
            </p>
            <p>
              GK Builders and Developers continues to focus on futuristic
              expansion and has chalked out plans to develop more luxurious
              residential projects across Hyderabad and Secunderabad soon.
            </p>
            <div className="mt20">
            <Link className="btnTheme mr12 fMedium btnMob" to="/#">
              <span className="mr5">Know More</span>
              <img
                src={require("../../assets/img/home/arrDiagonal.png")}
                className="img-fluid"
                alt=""
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
