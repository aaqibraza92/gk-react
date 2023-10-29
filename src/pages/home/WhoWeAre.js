import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';
import { useState } from 'react';
import { useEffect } from 'react';
const WhoWeAre = () => {

    const [triggerHover, settriggerHover] = useState(false);
    const [slide, setSlide] = useState("slide1");
    useEffect(() => {
        if(triggerHover){
            const timeout = setTimeout(() => {
                setSlide("slide2");
              }, 10000);
              return () => clearTimeout(timeout);
        }
     
    }, [triggerHover]);

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

                        <Fade bottom cascade>
                            <h2 className={`${activeTheme ? "colorBlack" : "colorWhite"} mb50 fs50 fontlight subfont text-center`}>
                                who we are?
                            </h2>
                        </Fade>

                    </div>
                    <Row className='align-items-center gy-4'>
                        <Col lg={4} md={4}>
                            <Zoom top cascade>
                                <div>
                                    <div className='circleMainWrp position-relative d-flex align-items-center justify-content-center h-100'>

                                    {
                                        triggerHover ?   <div className='circleAnimate position-relative'>
                                        </div> :   <div className='circleAnimate hideRotate position-relative' onMouseOver={()=>settriggerHover(true)}>
                                        </div>
                                    }
                                        {
                                            triggerHover && slide==="slide1" &&
                                            <Fade bottom cascade>
                                            <div className='wrpCircle position-absolute'>
                                            <div className='mb0 lh50'>
                                                <span className='fontlight subfont fs80 mobFs35 brownGradient fw500'>
                                              4
                                                </span>
                                                <span className='fontlight subfont fs80 mobFs35 brownGradient'>
                                                k <svg style={{ marginLeft: '-12px' }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0,0,256,256">
                                                        <g fill="#a07f50" fill-rule="evenodd" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(10.66667,10.66667)"><path d="M11,2v9h-9v2h9v9h2v-9h9v-2h-9v-9z"></path></g></g>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className={`${activeTheme ? "colorBrown" : "colorWhite"}  text-uppercase fs30 lh39 fontlight`}>
                                            Happy <br />
                                            Families
                                            </div>
                                        </div>
                                        </Fade>
                                        }
                                        {
                                            triggerHover && slide==="slide2" &&
                                            <Fade bottom cascade>
                                            <div className='wrpCircle position-absolute'>
                                            <div className='mb0 lh50'>
                                                <span className='fontlight subfont fs80 mobFs35 brownGradient fw500'>
                                              8
                                                </span>
                                                <span className='fontlight subfont fs80 mobFs35 brownGradient'>
                                                k <svg style={{ marginLeft: '-12px' }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0,0,256,256">
                                                        <g fill="#a07f50" fill-rule="evenodd" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(10.66667,10.66667)"><path d="M11,2v9h-9v2h9v9h2v-9h9v-2h-9v-9z"></path></g></g>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className={`${activeTheme ? "colorBrown" : "colorWhite"}  text-uppercase fs30 lh39 fontlight`}>
                                            Lorem <br />
                                            Ipsum
                                            </div>
                                        </div>
                                        </Fade>
                                        }
                                     
                                    </div>
                                </div>

                            </Zoom>


                        </Col>
                        <Col lg={7} md={7} className=''>
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