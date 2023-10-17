import React from 'react'
import HomeBanner from './HomeBanner'
import '../../assets/css/home.css'
import { Helmet } from "react-helmet";
import AboutUs from './AboutUs';
import Testimonial from './Testimonial';
import WhoWeAre from './WhoWeAre';
import WhyChooseUs from './WhyChooseUs';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home - GK Builders & Developers</title>
      </Helmet>
      <main>
        <HomeBanner />
        <AboutUs />
        <WhyChooseUs/>
        <WhoWeAre/>
        <Testimonial/>
      </main>
    </>


  )
}

export default HomePage
