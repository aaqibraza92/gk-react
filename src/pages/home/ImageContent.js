import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { contactType } from "../../store/slices/UserSlices";

const ImageContent = () => {
  const dispatch= useDispatch();

  const contactTypeHandle=(v)=>{
    dispatch(contactType(v));
  }
 
  return (
<div className="bgWhite pt100 imgCont mobPb30">
<div className="container-xl">
          <Row className="align-items-center gy-4 mobilereverse">
            <Col lg={6} md={6}>
              <div>
              <img
                className="img-fluid"
                src={require("../../assets/img/servicesTwo.png")}
                alt="banner"
              />
              </div>
            </Col>

            <Col lg={6} md={6}>
              <div className="pl30 pr15 m-auto w-80">
   
              <h3 className="fs50 fw700 tabfs24 mobFs38 mt0 mobmb0 mobmr0  text-start colorBlue ml0 mb20">
              <span className="colorGreen"> Exceptional Care</span> <br></br> Tailored to Your  Needs</h3>
              <p className="fs16 colorBlue fw400 tabfs15 mobFs15 mb10">
              Welcome to Alamo Primary Care, your trusted provider of comprehensive primary healthcare services in San Antonio. We are dedicated to delivering personalized, compassionate care that focuses on your overall well-being.
                </p>
              </div>
           
            </Col>
          </Row>
        </div>
    </div>
  );
};

export default ImageContent;
