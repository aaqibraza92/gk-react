import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { contactType } from "../../store/slices/UserSlices";
import { arrowDiagonal } from "../../assets/svg/Svg";

const HomeBanner = () => {
  return (
    <div className="position-relative homeBanner d-flex align-items-center bgLightBlue">
      <img
        className="img-fluid w-100"
        src={require("../../assets/img/home/home_sl1.jpg")}
        alt="banner"
      />
      <div className="caption position-absolute w-100">
        <div className="container-xl">
          <Row>
            <Col lg={12} md={12}>
              <div>
                <h2 className="bannerF  fw700 tabfs24 mobFs18 mobwidth50 mt0 mobmb0 mobmr0 fSemiBold text-start colorWhite ml0 text-uppercase">
                  Live Life
                </h2>
                <h2 className="bannerF text-end fw700 tabfs24 mobFs18 mobwidth50 mt0 mobmb0 mobmr0 fSemiBold text-start colorWhite ml0 text-uppercase">
                  Sky High
                </h2>

                <div className="d-flex justify-content-end">
                  <Link
                    className="btnTheme mr12 fMedium btnMob"
                    to="/#"
                  >
                   <span className="mr5">Know More</span> <img src={require('../../assets/img/home/arrDiagonal.png')} className="img-fluid" alt="" />
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
