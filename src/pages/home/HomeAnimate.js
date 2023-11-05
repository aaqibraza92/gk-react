import React from "react";
import { Col, Container, Row } from "reactstrap";
import Flip from 'react-reveal/Flip';
import { Slide } from "react-awesome-reveal";

const HomeAnimate = () => {
  return (
    <section className="sectionAnimate">
      <Container>
        <Row className="gx-5">
          <Col lg={3} md={3} sm={3} xs={3}>
          <Flip left duration={1200}>
              <div className="boxFlip"></div>
            </Flip>
          </Col>
          <Col lg={3} md={3} sm={3} xs={3}>
          <Flip left duration={1200}>
              <div className="boxFlip"></div>
            </Flip>
          </Col>
          <Col lg={3} md={3} sm={3} xs={3}>
          <Flip left duration={1200}>
              <div className="boxFlip"></div>
            </Flip>
          </Col>
          <Col lg={3} md={3} sm={3} xs={3}>
          <Flip left duration={1200}>
              <div className="boxFlip"></div>
            </Flip>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeAnimate;
