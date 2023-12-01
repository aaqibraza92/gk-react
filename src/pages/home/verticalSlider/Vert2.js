
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css'

// import "./styles.css";
import { Pagination, Mousewheel, Navigation } from 'swiper';

const Vert2 = () => {
  return (
    <div class="slideronenew">
    <Swiper
      slidesPerView={"3"}
      centeredSlides={true}
      spaceBetween={0}
      loop={true}
      navigation={true}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
     
      modules={[Mousewheel, Pagination ,Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
         <div className="box">
            <h1>sliderone</h1>
         </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="box">
            <h1>slidertwo</h1>
         </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="box">
            <h1>sliderthree</h1>
         </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="box">
            <h1>sliderfour</h1>
         </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="box">
            <h1>sliderfive</h1>
         </div>
      </SwiperSlide>
      
    </Swiper>
    </div>
  )
}

export default Vert2