import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import Flip from 'react-reveal/Flip';
import { Slide } from "react-awesome-reveal";
import { useDispatch, useSelector } from "react-redux";
import { actiionFlip } from "../../store/slices/UserSlices";

const HomeAnimate = () => {
  const dispatch= useDispatch();
  const activeTheme = useSelector((state) => {
    return (
      state && state?.persistedReducer?.theme?.dayTheme
    );
  });

  useEffect(()=>{
    var loader= document.getElementById("load");
    loader!==null && loader.classList.remove("loader");
  
      setTimeout(() => {
        loader!==null && loader.classList.add("loader");
      }, 100);
  },[window.location.pathname])

  const handleHover=()=>{
    setTimeout(() => {
    }, 900);
    
  }

  return (
    <section className={`sectionAnimate d-flex align-items-center ${activeTheme ? "" : "bgBlack"}`}>
      <Container fluid>
      <div id="load" class="wrapper containerAnimate row" onMouseEnter={(e)=>handleHover(e)}>
        <div class=" col-md-2">
          <div class="hover panel">
            <div class="front">
              <div class="box1">
           
              </div>
            </div>
            <div class="back">
              <div class="box2">
              </div>
            </div>
          </div>
      </div>

      <div class="col-md-2">
          <div class="hover panel">
            <div class="front">
              <div class="box1">
           
              </div>
            </div>
            <div class="back">
              <div class="box2">
              </div>
            </div>
          </div>
      </div>

      <div class=" col-md-2">
          <div class="hover panel">
            <div class="front">
              <div class="box1">
           
              </div>
            </div>
            <div class="back">
              <div class="box2">
              </div>
            </div>
          </div>
      </div>
  
      <div class="col-md-2">
          <div class="hover panel">
            <div class="front">
              <div class="box1">
           
              </div>
            </div>
            <div class="back">
              <div class="box2">
               
              </div>
            </div>
          </div>
      </div>
  
      <div class="col-md-2">
          <div class="hover panel">
            <div class="front">
              <div class="box1">
           
              </div>
            </div>
            <div class="back">
              <div class="box2">
               
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="hover panel">
            <div class="front">
              <div class="box1">
           
              </div>
            </div>
            <div class="back">
              <div class="box2">
               
              </div>
            </div>
          </div>
        </div>
     </div>

        {/* <Row className="gx-5">
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
        </Row> */}
      </Container>
    </section>
  );
};

export default HomeAnimate;
