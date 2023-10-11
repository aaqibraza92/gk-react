import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "../../assets/css/header.css";
import { angleDownIcon, burgerMenu, callSvg, closeIcon } from "../../assets/svg/Svg";

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
 
    document.getElementById('triggerToOpen')!==null && document.getElementById('triggerToOpen').addEventListener('click', event => {
      document.getElementById('myNav').classList.add('enableMobileMenu');
      
    });

    document.getElementById('closeMenu')!==null && document.getElementById('closeMenu').addEventListener('click', event => {
      document.getElementById('myNav').classList.remove('enableMobileMenu');
      
    })
    

  }, []);
  return (
    <header className={`transition`}>
      
      <div id="myNav" className={`overlay`}>
        <button id='closeMenu' className="closebtn noBtn" >
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
                src={require("../../assets/img/main_logo.png")}
                alt="logo"
              />
            </Link>
          </Col>

          <Col lg={9} md={9} xs={6}>
            {screenWidth < 1024 && (
              <div className="d-flex justify-content-end">
                <button id="triggerToOpen"  className="noBtn triggerMenu">{burgerMenu}</button>
              </div>
            )}

            {
              screenWidth > 1024 && <div className="d-flex justify-content-end">
                    <div className="d-flex flex-wrap align-items-center">
                      <div className="mr25">
                        <p className="fw600 fs15 colorBlack mb0">
                        Hours Of Operation:
                        </p>
                        <p className="fw400 fs15 colorGrey mb0">
                        Monday to Friday, <br/>
                        8:00 am - 5:00 pm
                        </p>
                    
                      </div>
                        <a href="tel:210-571-1338" className="colorBlack fw600 fs18 mr12"> <span className="mr7">{callSvg}</span>210-571-1338</a>
                        <a href="https://www.healowpay.com/HealowPay/jsp/healow/login.jsp" target="_blank" className="btnTheme bgGreen  fMedium btnMob fw500 mr12">Pay Online </a>
                        <Link to="https://mycw192.ecwcloud.com/portal24523/jsp/100mp/login_otp.jsp" target="_blank" className="btnTheme bgBlue  mr12 fMedium btnMob fw500">Patient Portal</Link>
                        <Link to="/contact-us" className="btnTheme bgGreen mr0 fMedium btnMob fw500">Book Appointment </Link>
                    </div>

              </div>
            }
            
          </Col>
        </Row>
      </div>
    </div>
     
              
      {screenWidth > 1024 && <Navbar />}
    </header>
  );
};

export default Header;

const Navbar = (props) => {
  const [stickyHeader, setstickyHeader] = useState("");


  useEffect(()=>{
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY;
      if (isTop > 200) {
        setstickyHeader("topDown");
      } else {
        setstickyHeader("topUp");
      }
    });
    document.querySelectorAll('.clickToClose').length > 0 && document.querySelectorAll('.clickToClose').forEach(item => {
      item.addEventListener('click', event => {
        document.getElementById('myNav').classList.remove('enableMobileMenu');
        
      })
    })
  },[])

  return (
    <div className={`navWrapper bgBlue mobileheader ${stickyHeader}`}>
        <Container>
        <ul className="noUl d-flex flex-wrap headerMenu mb0 align-items-center justify-content-between">
      <li>
        <Link to="/" className="colorWhite clickToClose">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about-us" className="colorWhite clickToClose">
        About Us 
        </Link>
      </li>
      {/* <li>
        <Link to="#" className="colorPara">
          Our Story <span className="ml5 arrowDown">{angleDownIcon}</span>
        </Link>
        <ul className="subMenu">
          <li>
            <Link to="/about-us" className="clickToClose">About Us</Link>
          </li>
          <li>
            <Link to="/what-we-do" className="clickToClose">What We Do</Link>
          </li>
          <li>
            <Link to="/our-team" className="clickToClose">Our Team </Link>
          </li>
          <li>
            <Link to="/core-values" className="clickToClose">Core Values </Link>
          </li>
        </ul>
      </li> */}

      <li>
        <Link to="/services" className="colorWhite clickToClose">
        Services 
        </Link>
      </li>
      <li>
        <Link to="/#" className="colorWhite clickToClose">
       Blog 
        </Link>
      </li>
      {/* <li>
        <Link to="/#" className="colorWhite clickToClose">
        Patient Portal 
        </Link>
      </li> */}
      <li>
        <Link to="/contact-us" className="colorWhite clickToClose">
        Contact Us
        </Link>
      </li>
      <li className="destop-none">
        <Link className="colorWhite clickToClose" to="https://www.healowpay.com/HealowPay/jsp/healow/login.jsp" target="_blank" >Pay Online </Link>
      </li>
      <li className="destop-none">
      <Link className="colorWhite clickToClose" to="https://mycw192.ecwcloud.com/portal24523/jsp/100mp/login_otp.jsp" target="_blank" >Patient Portal</Link>

      </li>
      <li className="destop-none">
      <Link className="colorWhite clickToClose" to="/contact-us" >Book appointment</Link>
      
      </li>
    </ul>
       </Container>
    </div>
  
  );
};
