import { Container } from 'reactstrap'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Mousewheel, Pagination } from 'swiper';

const WhyChooseUs = () => {
  return (
    <section className='pt100 pb100' style={{ backgroundImage: `url(${require('../../assets/img/home/ver_bg.jpg')})` }}>
      <Container>
        <h2 className='colorWhite fs58 fw600 text-center'>
          why choose us?
        </h2>

        <Swiper
          direction={'vertical'}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {/* {Array(6).fill().map((e,i)=>(
          <SwiperSlide key={i}>    <img src={require('../../assets/img/home/pr_c.jpg')} className='img-fluid' /></SwiperSlide>
        ))} */}

          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>

        </Swiper>
      </Container>
    </section>
  )
}

export default WhyChooseUs