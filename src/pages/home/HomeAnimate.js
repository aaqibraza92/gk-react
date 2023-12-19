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
      <div id="load" className="wrapper containerAnimate row" onMouseEnter={(e)=>handleHover(e)}>
        <div className=" col-md-2 col-2">
          <div className="hover panel">
            <div className="front">
              <div className="box1">
           
              </div>
            </div>
            <div className="back">
              <div className="box2">
              </div>
            </div>
          </div>
      </div>

      <div className="col-md-2 col-2">
          <div className="hover panel">
            <div className="front">
              <div className="box1">
           
              </div>
            </div>
            <div className="back">
              <div className="box2">
              </div>
            </div>
          </div>
      </div>

      <div className=" col-md-2 col-2">
          <div className="hover panel">
            <div className="front">
              <div className="box1">
           
              </div>
            </div>
            <div className="back">
              <div className="box2">
              </div>
            </div>
          </div>
      </div>
  
      <div className="col-md-2 col-2">
          <div className="hover panel">
            <div className="front">
              <div className="box1">
           
              </div>
            </div>
            <div className="back">
              <div className="box2">
               
              </div>
            </div>
          </div>
      </div>
  
      <div className="col-md-2 col-2">
          <div className="hover panel">
            <div className="front">
              <div className="box1">
           
              </div>
            </div>
            <div className="back">
              <div className="box2">
               
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-2">
          <div className="hover panel">
            <div className="front">
              <div className="box1">
           
              </div>
            </div>
            <div className="back">
              <div className="box2">
               
              </div>
            </div>
          </div>
        </div>
     </div>
      </Container>
    </section>
  );
};

export default HomeAnimate;
