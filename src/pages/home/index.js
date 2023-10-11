import React from 'react'
import HomeBanner from './HomeBanner'
import '../../assets/css/home.css'
import WhatWeDo from './WhatWeDo'
import { Helmet } from "react-helmet";
import ImageContent from './ImageContent'
import CallToAction from './CallToAction'
import CallToActionFirst from './CallToActionFirst'
import OurTeam from './OurTeam'
import OurServices from './OurServices'

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home - Alamo Primary Care</title>
      </Helmet>
    <main>
    <HomeBanner/>
   
    <ImageContent/>
    <CallToActionFirst/>
    <OurServices/>
    {/* <OurTeam/> */}
    <CallToAction/>
    {/* <PractiseAreas/> */}
    {/* <WhyChosseUs/> */}
    {/* <Testomonial/> */}
    {/* <Counter/> */}
    <WhatWeDo/>
    </main>
    </>

     
  )
}

export default HomePage
