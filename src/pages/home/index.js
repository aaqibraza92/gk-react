import React from 'react'
import HomeBanner from './HomeBanner'
import '../../assets/css/home.css'
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home - GK Builders & Developers</title>
      </Helmet>
    <main>
    <HomeBanner/>
   
    </main>
    </>

     
  )
}

export default HomePage
