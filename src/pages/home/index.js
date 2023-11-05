import React from 'react'
import HomeBanner from './HomeBanner'
import '../../assets/css/home.css'
import { Helmet } from "react-helmet";
import AboutUs from './AboutUs';
import Testimonial from './Testimonial';
import WhoWeAre from './WhoWeAre';
import WhyChooseUs from './WhyChooseUs';
import OurProjects from './OurProjects';
import VerticalImageSlider from './VerticalImageSlider';
import HomeAnimate from './HomeAnimate';
import { useState } from 'react';

const HomePage = () => {
  const [isAnimate,setisAnimate]=useState(true);
  return (
    <>
      <Helmet>
        <title>Home - GK Builders & Developers</title>
      </Helmet>
      <main>
      {
        isAnimate &&  <HomeAnimate/>
      }
     
        <HomeBanner />
        <AboutUs />
        <OurProjects/>
        <WhyChooseUs/>
        <WhoWeAre/>
        <Testimonial/>
      
      </main>
    </>


  )
}

export default HomePage
