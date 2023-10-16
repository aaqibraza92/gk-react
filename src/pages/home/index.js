import React from 'react'
import HomeBanner from './HomeBanner'
import '../../assets/css/home.css'
import { Helmet } from "react-helmet";
import AboutUs from './AboutUs';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home - GK Builders & Developers</title>
      </Helmet>
      <main>
        <HomeBanner />
        <AboutUs />

      </main>
    </>


  )
}

export default HomePage
