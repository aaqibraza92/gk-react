import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "../../assets/css/header.css";
import {
  angleDownIcon,
  burgerMenu,
  callSvg,
  closeIcon,
} from "../../assets/svg/Svg";

const Header = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const resizeScreen = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    resizeScreen();
    window.addEventListener("resize", resizeScreen);
    return () => {
      window.removeEventListener("resize", resizeScreen);
    };
  });

  useEffect(() => {
    document.getElementById("triggerToOpen") !== null &&
      document
        .getElementById("triggerToOpen")
        .addEventListener("click", (event) => {
          document.getElementById("myNav").classList.add("enableMobileMenu");
        });

    document.getElementById("closeMenu") !== null &&
      document
        .getElementById("closeMenu")
        .addEventListener("click", (event) => {
          document.getElementById("myNav").classList.remove("enableMobileMenu");
        });
  }, []);
  return (
    <header className={`transition`}>
      <div id="myNav" className={`overlay`}>
        <button id="closeMenu" className="closebtn noBtn">
          {closeIcon}
        </button>
        <div className="overlay-content">
          <Navbar />
        </div>
      </div>
      <div className={`upperHeader pt20 pb20 `}>
        <div className="container-xl">
          <Row className="align-items-center">
            <Col lg={3} md={3} xs={6}>
              <Link to="/">
                <img
                  className="img-fluid mainLogo"
                  src={require("../../assets/img/logo.png")}
                  alt="logo"
                />
              </Link>
            </Col>

            <Col lg={9} md={9} xs={6}>
              {screenWidth < 1024 ? (
                <div className="d-flex justify-content-end">
                  <button id="triggerToOpen" className="noBtn triggerMenu">
                    {burgerMenu}
                  </button>
                </div>
              ) : (
                <Navbar />
              )}
            </Col>
          </Row>
        </div>
      </div>
    </header>
  );
};

export default Header;

const Navbar = (props) => {
  const [stickyHeader, setstickyHeader] = useState("");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY;
      if (isTop > 200) {
        setstickyHeader("topDown");
      } else {
        setstickyHeader("topUp");
      }
    });
    document.querySelectorAll(".clickToClose").length > 0 &&
      document.querySelectorAll(".clickToClose").forEach((item) => {
        item.addEventListener("click", (event) => {
          document.getElementById("myNav").classList.remove("enableMobileMenu");
        });
      });
  }, []);

  return (
    <div className={`navWrapper mobileheader ${stickyHeader}`}>
      <Container>
        <div className="d-flex justify-content-end">
          <ul className="noUl d-flex flex-wrap headerMenu mb0 align-items-center">
            <li>
              <Link to="/" className="colorBlack clickToClose">
                Home
              </Link>
            </li>
            <li>
              <Link to="/#" className="colorBlack clickToClose">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/#" className="colorBlack clickToClose">
                Services
              </Link>
            </li>
            <li>
              <Link to="/#" className="colorBlack clickToClose">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/#" className="colorBlack clickToClose">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
