import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { useSelector } from "react-redux";
import { Fade, Zoom } from "react-awesome-reveal";
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Autoplay } from 'swiper';



const WhoWeAre = () => {

    const [triggerHover, settriggerHover] = useState('d-none');



    const activeTheme = useSelector((state) => {
        return (
            state && state?.persistedReducer?.theme?.dayTheme
        );
    });

    return (
        <section className={`${activeTheme ? "bgPink" : "bgFullBlack"} pt100 pb100 `}>
            <Container>
                <div className='text-center'>
                    <div className="">
                        <Zoom left>
                            <img src={require('../../assets/img/home/three_dot.png')} className="img-fluid" alt="" />
                        </Zoom>

                        <h2 className={`${activeTheme ? "colorBlack" : "colorWhite"} mb50 fs50 fontlight subfont text-center`}>
                            <Fade left cascade damping={1e-1} delay={100}>   who we are? </Fade>
                        </h2>

                    </div>
                    <Row className='align-items-center gy-4'>
                        <Col lg={4} md={6}>
                            <Zoom top cascade>
                                <div>
                                    <div className='circleMainWrp position-relative d-flex align-items-center justify-content-center h-100'>
                                    <div className='circleAnimate position-relative' onMouseOver={() => settriggerHover('d-block')}>
                                            </div>
                                        {/* {
                                            triggerHover ? <div className='circleAnimate position-relative'>
                                            </div> : <div className='circleAnimate hideRotate position-relative' onMouseOver={() => settriggerHover('d-block')}>
                                            </div>

                                         
                                        } */}

                                        
                                            
                                            <div className={`${triggerHover} wrpCircle position-absolute`}>
                                                <Swiper
                                                    autoplay={{
                                                        delay: 2500,
                                                        disableOnInteraction: false,
                                                    }}
                                                    spaceBetween={0}
                                                    effect={'fade'}
                                                    navigation={false}
                                                    pagination={{
                                                        clickable: false,
                                                    }}
                                                    modules={[EffectFade, Autoplay]}
                                                    className="mySwiper swiperFadeEff"
                                                >
                                                    <SwiperSlide>
                                                        <div className='mb0 lh50'>
                                                            <span className='fontlight subfont fs60 mobFs35 brownGradient fw500'>
                                                            4000
                                                            </span>
                                                            <span className='fontlight subfont fs80 mobFs35 brownGradient plusIcon'>
                                                                + 
                                                            </span>
                                                        </div>
                                                        <div className={`${activeTheme ? "colorBrown" : "colorWhite"}  text-uppercase fs30 lh39 fontlight`}>
                                                            Happy <br />
                                                            Families
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className='mb0 lh50'>
                                                            <span className='fontlight subfont fs60 mobFs35 brownGradient fw500'>
                                                            63
                                                            </span>
                                                            <span className='fontlight subfont fs80 mobFs35 brownGradient plusIcon'>
                                                                + 
                                                            </span>
                                                        </div>
                                                        <div className={`${activeTheme ? "colorBrown" : "colorWhite"}  text-uppercase fs30 lh39 fontlight`}>
                                                        Projects
                                                        </div>
                                                    </SwiperSlide>

                                                    <SwiperSlide>
                                                        <div className='mb0 lh50'>
                                                            <span className='fontlight subfont fs60 mobFs35 brownGradient fw500'>
                                                            30
                                                            </span>
                                                            <span className='fontlight subfont fs80 mobFs35 brownGradient plusIcon'>
                                                                + 
                                                            </span>
                                                        </div>
                                                        <div className={`${activeTheme ? "colorBrown" : "colorWhite"}  text-uppercase fs30 lh39 fontlight`}>
                                                        Years <br/> Expertise
                                                        </div>
                                                    </SwiperSlide>

                                                    <SwiperSlide>
                                                        <div className='mb0 lh50'>
                                                            <span className='fontlight subfont fs60 mobFs35 brownGradient fw500'>
                                                            3M
                                                            </span>
                                                            <span className='fontlight subfont fs80 mobFs35 brownGradient plusIcon'>
                                                                + 
                                                            </span>
                                                        </div>
                                                        <div className={`${activeTheme ? "colorBrown" : "colorWhite"}  text-uppercase fs30 lh39 fontlight`}>
                                                        sq. ft Area <br/> Delivered
                                                        </div>
                                                    </SwiperSlide>

                                                </Swiper>
                                            </div>
                                    
                                     



                                    </div>
                                </div>

                            </Zoom>


                        </Col>
                        <Col lg={7} md={6} className=''>
                            <div className='imgWrp mobMt30'>
                                <Fade right cascade>
                                    <img className='img-fluid' src={require('../../assets/img/home/Family-Outline.png')} alt="" />
                                </Fade>

                            </div>
                        </Col>
                    </Row>






                </div>
            </Container>
        </section>
    )
}

export default WhoWeAre