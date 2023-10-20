import { Container } from 'reactstrap'
import React, { useRef, useState } from 'react';
import { useSelector } from "react-redux";

const WhyChooseUs = () => {
  const activeTheme = useSelector((state) => {
    return (
      state && state?.persistedReducer?.theme?.dayTheme
    );
  });
  
  return (
    <section className='pt100 pb100' style={{ backgroundImage: `url(${require('../../assets/img/home/ver_bg.jpg')})` }}>
      <Container>
      <div className="text-center">
          <img
            src={require("../../assets/img/home/three_dot.png")}
            className="img-fluid"
            alt=""
          />
          <h2 className="colorWhite mb50 fs58 fontlight subfont text-center">
            why choose us?
          </h2>
        </div>  


      </Container>
    </section>
  )
}

export default WhyChooseUs