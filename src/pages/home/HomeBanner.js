import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { contactType } from "../../store/slices/UserSlices";

const HomeBanner = () => {

  return (
    <div className="position-relative homeBanner d-flex align-items-center bgLightBlue">
      <img
        className="img-fluid w-100"
        src={require("../../assets/img/home_banner.png")}
        alt="banner"
      />
      <div className="caption position-absolute w-100">
      <div className="container-xl">
          <Row>
            <Col lg={5} md={8}>
              <div>
                <p className="fs20 colorGreen fw600 tabfs15 mobFs15 mb10">
                Welcome to Alamo Primary Care
                </p>
                <h1 className="fs50 fw700 tabfs24 mobFs18 mobwidth50 mt0 mobmb0 mobmr0 fSemiBold text-start colorBlue ml0">
                Compassionate 
                Primary Care 
                Services for a 
                Healthier You
                </h1>

                <div className="d-flex">
                  <Link
                    className="btnTheme bgGreen mr12 fMedium btnMob"
                    to="/contact-us"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
