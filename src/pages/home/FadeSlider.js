import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper';
import { Container } from 'reactstrap';

const FadeSlider = () => {

  return (
    <Container>
    <Swiper
    spaceBetween={30}
    effect={'fade'}
    navigation={true}
    pagination={{
      clickable: true,
    }}
    modules={[EffectFade, Navigation, Pagination]}
    className="mySwiper"
  >
    <SwiperSlide>
      <h2 className='text-dark'>
        Demo
      </h2>
    </SwiperSlide>
    <SwiperSlide>
    <h2 className='text-dark'>
        Demo1
      </h2>
    </SwiperSlide>
    <SwiperSlide>
    <h2 className='text-dark'>
        Demo3
      </h2>
    </SwiperSlide>
    <SwiperSlide>
    <h2 className='text-dark'>
        Demo4
      </h2>
    </SwiperSlide>
  </Swiper>
    </Container>


  )
}

export default FadeSlider