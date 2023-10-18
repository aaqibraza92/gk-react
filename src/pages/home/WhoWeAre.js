import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const WhoWeAre = () => {
    return (
        <section className='pt100 pb100 bgWhite'>
            <Container>
                <div className='text-center'>
                    <h2 className='colorBlack mb50 fs58 fw600 text-center'>
                        who we are?
                    </h2>

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        loop={true}
                        speed={2000}
                        autoplay={{ delay: 1000 }}
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => { }}
                        onSwiper={() => { }}
                        breakpoints={{
                            // when window width is >= 640px
                            300: {
                                width: 300,
                                slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            550: {
                                width: 550,
                                slidesPerView: 1,
                            },
                            992: {
                                width: 992,
                                slidesPerView: 1,
                            },
                            1201: {
                                width: 1201,
                                slidesPerView: 1,
                            },
                            1360: {
                                width: 1360,
                                slidesPerView: 1,
                            },
                        }}
                    >
                        <div className="bloggerList">

                            {Array(3).fill().map((e, i) => (
                                <SwiperSlide key={i}>
                                    <Row className='align-items-center'>
                                        <Col lg={4} md={4}>
                                            <div className='circleAnimate'>
                                                <div className='mb0'>
                                                <span className='fw700 fs50'>
                                                    4
                                                </span>
                                                <span className='fw700 fs50'>
                                                    k +
                                                </span>
                                                </div>    
                                                <div className='colorBrown text-uppercase'>
                                                    Happy <br/>
                                                    Families
                                                </div>                                          
                                            </div>
                                        </Col>
                                        <Col lg={8} md={8}>
                                            <div className='imgWrp'>
                                                <img className='img-fluid' src={require('../../assets/img/home/Family Outline.png')} alt="" />
                                            </div>
                                        </Col>
                                    </Row>
                                </SwiperSlide>
                            ))}


                        </div>
                    </Swiper>





                </div>
            </Container>
        </section>
    )
}

export default WhoWeAre