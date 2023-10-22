import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { contactType } from "../../store/slices/UserSlices";
import { arrowDiagonal } from "../../assets/svg/Svg";
import { useSelector } from "react-redux";
const HomeBanner = () => {
  
  const activeTheme = useSelector((state) => {
    return (
      state && state?.persistedReducer?.theme?.dayTheme
    );
  });

  return (
    <div className="position-relative homeBanner d-flex align-items-center bgLightBlue">
      <img
        className="img-fluid w-100 bannerImg"
        src={activeTheme ? require("../../assets/img/home/home_sl1.jpg") : require("../../assets/img/home/banner_night.jpg")}
        alt="banner"
      />
      <div className="caption position-absolute w-100">
        <div className="container-xl">
          <Row>
            <Col lg={10} md={10} className="m-auto">
              <div>
                <h2 className="bannerF   tabfs24  mt0 mobmb0 mobmr0 fSemiBold text-start colorWhite ml0 text-uppercase">
                  Live Life <br/> <span className="text-end d-block">Sky High</span>
                </h2>
             

                <div className="d-flex justify-content-end">
                  <Link
                    className={`${activeTheme ? "bgBlack" : "bgWhite"} btnTheme mr12 fMedium btnMob`}
                    to="/#"
                  >
                   <span className={`${activeTheme ? "brownGradient" : "colorBlack"} mr5`}>Know More</span> <img src={activeTheme ? require('../../assets/img/home/arrDiagonal.png') : require('../../assets/img/home/arrowBlack.png')} className="img-fluid" alt="" />
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
