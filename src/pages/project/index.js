import React from "react";
import { Col, Container, Row } from "reactstrap";

const Project = () => {
  return (
    <section>
      <Container>
        <h2 className="fs70 mb0 brownGradient text-center mb60">Projects</h2>

        <Row className="justify-content-end">
          <Col lg={9}>
            <div className=" d-flex justify-content-end">
              <div className="">
              <div className="imgProject position-relative pt20 pb20 pe20">
                  <img src={require('../../assets/img/project/pr1.png')} className="img-fluid" alt="" />
                  </div>
              </div>
                
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Project;
