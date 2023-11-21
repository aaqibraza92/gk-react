import React, { useEffect } from 'react'
import HomeBanner from './HomeBanner'
import '../../assets/css/home.css'
import { Helmet } from "react-helmet";
import AboutUs from './AboutUs';
import Testimonial from './Testimonial';
import WhoWeAre from './WhoWeAre';
import WhyChooseUs from './WhyChooseUs';
import OurProjects from './OurProjects';
import { useSelector } from 'react-redux';
import { useRef } from 'react';

const HomePage = () => {
  var myRef = useRef(null);

const executeScroll=()=>{
  myRef.current.scrollIntoView({behavior:"smooth", block: "end", inline:"nearest"}) 
}
  const homeAnimate = useSelector((state) => {
    return (
      state && state?.persistedReducer?.theme?.flip
    );
  });


  return (
    <>
      <Helmet>
        <title>Home - GK Builders & Developers</title>
      </Helmet>
      <main>
     
     
        <HomeBanner />
        <AboutUs />
        <button onClick={()=>executeScroll()} id='makeClick'> Click to scroll </button> 
        <OurProjects/>
   
        <WhyChooseUs/>
        <div className='scrollHide'>
        <WhoWeAre/>
        <div ref={myRef} style={{height: "10px"}}>
        </div>
        <Testimonial/>
        </div>
     
      
      </main>
    </>


  )
}

export default HomePage
