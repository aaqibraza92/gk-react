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
                    <Row className='align-items-center'>
                        <Col lg={4} md={4}>
                            <div className='circleAnimate'>
                                <div className='wrpCircle'>
                                <div className='mb0'>
                                    <span className='fw700 fs60 brownGradient'>
                                        4
                                    </span>
                                    <span className='fw700 fs60 brownGradient'>
                                        k <svg style={{marginLeft: '-12px'}} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0,0,256,256">
<g fill="#a07f50" fill-rule="evenodd" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(10.66667,10.66667)"><path d="M11,2v9h-9v2h9v9h2v-9h9v-2h-9v-9z"></path></g></g>
</svg>
                                    </span>
                                </div>
                                <div className='colorBrown text-uppercase fs24 lh25 fw400'>
                                    Happy <br />
                                    Families
                                </div>
                                </div>
                              
                            </div>
                        </Col>
                        <Col lg={8} md={8}>
                            <div className='imgWrp'>
                                <img className='img-fluid' src={require('../../assets/img/home/Family Outline.png')} alt="" />
                            </div>
                        </Col>
                    </Row>






                </div>
            </Container>
        </section>
    )
}

export default WhoWeAre