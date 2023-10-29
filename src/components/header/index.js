import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "../../assets/css/header.css";
import { useSelector } from "react-redux";

const Header = () => {

  
  const activeTheme = useSelector((state) => {
    return state && state?.persistedReducer?.theme?.dayTheme;
  });
  useEffect(() => {
    
    if(activeTheme){
      document.body.className = window.location.pathname==="/" ? "home" : window.location.pathname;
    }else{
      document.body.className = window.location.pathname==="/" ? "home darkMode" : window.location.pathname + " darkMode";
    }
    
    return () => { document.body.className = ''; }
    
  },[window.location.pathname]);

  const [stickyHeader, setstickyHeader] = useState("");

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY;
      if (isTop > 200) {
        setstickyHeader("topDown");
      } else {
        setstickyHeader("topUp");
      }
    });

  
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

  const closeMenu=()=>{
    document.getElementById("menu-icon").click();
  }

  return (
    <header
      className={`mainHeader transition ${stickyHeader} ${
        !activeTheme && "darkMode"
      }`}
    >
      <div id="myNav" className={`overlay`}>
      
        <div className="overlay-content">
          <Navbar />
        </div>
      </div>
      <div className={`upperHeader pt20 pb20 `}>
        <div className="container-xl">
          <Row
            className={`${
              stickyHeader === "topDown"
                ? "align-items-center"
                : "align-items-top"
            }`}
          >
            <Col lg={3} md={3} xs={6}>
              <Link className="mainLogo" to="/">
                <img
                  className="img-fluid mainLogo"
                  src={
                    activeTheme
                      ? require("../../assets/img/logo.png")
                      : require("../../assets/img/white_logo.png")
                  }
                  alt="logo"
                />
              </Link>
            </Col>

            <Col lg={9} md={9} xs={6}>
              {screenWidth < 1024 ? (
                <div className="d-flex justify-content-end">
                  {/* <button id="triggerToOpen" className="noBtn triggerMenu">
                    {burgerMenu}
                  </button> */}
                  <span class="menuTrigger">
                    <input
                      class="menu-icon"
                      type="checkbox"
                      id="menu-icon"
                      name="menu-icon"
                    />
                    <label htmlFor="menu-icon"></label>
                    <nav class="nav triggerMenu">
                      <ul class="pt-5">
                        <li onClick={()=>closeMenu()}>
                         <Link className="makeClose" to="/">Home</Link>
                        </li>
                        <li onClick={()=>closeMenu()}>
                        <Link className="makeClose" to="/about-us">About Us</Link>
                        </li>
                        <li onClick={()=>closeMenu()}>
                        <Link className="makeClose" to="/project">Our Projects</Link>
                        </li>
                        <li onClick={()=>closeMenu()}>
                        <Link className="makeClose" to="/contact-us">Contact Us</Link>
                        </li>
                      </ul>
                    </nav>
                  </span>
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
  const activeTheme = useSelector((state) => {
    return state && state?.persistedReducer?.theme?.dayTheme;
  });

  useEffect(() => {
    // document.querySelectorAll(".clickToClose").length > 0 &&
    //   document.querySelectorAll(".clickToClose").forEach((item) => {
    //     item.addEventListener("click", (event) => {
    //       document.getElementById("myNav").classList.remove("enableMobileMenu");
    //     });
    //   });
  }, []);

  return (
    <div className={`navWrapper mobileheader mt10 `}>
      <div className="container-xxl">
        <div className={`d-flex justify-content-end`}>
          <ul className="noUl d-flex flex-wrap headerMenu mb0 align-items-center">
            <li className="mr15">
              <Link
                to="/"
                className={`${
                  activeTheme ? "colorBlack" : "colorWhite"
                } clickToClose`}
              >
                Home
              </Link>
            </li>
            <li className="mr15">
              <Link
                to="/about-us"
                className={`${
                  activeTheme ? "colorBlack" : "colorWhite"
                } clickToClose`}
              >
                About Us
              </Link>
            </li>

            <li className="mr15">
              <Link
                to="/project"
                className={`${
                  activeTheme ? "colorBlack" : "colorWhite"
                } clickToClose`}
              >
                our projects
              </Link>
            </li>

            <li>
              <Link
                to="/contact-us"
                className={`${
                  activeTheme ? "colorBlack" : "colorWhite"
                } clickToClose`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
