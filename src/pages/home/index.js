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

const HomePage = () => {

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
        <OurProjects/>
        <WhyChooseUs/>
        <WhoWeAre/>
        <Testimonial/>
      
      </main>
    </>


  )
}

export default HomePage
