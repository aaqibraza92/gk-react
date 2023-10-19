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

let data = [
    {
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero cupiditate eos, voluptas neque distinctio cumque nostrum laborum consectetur! Aliquam molestiae cumque alias quia aliquid expedita ipsa quidem facilis rerum ab.",
        author: "Manasa",
        position: "Project Lead, Tech Mahindra",
        tag: "Atmakaru"
    },
    {
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero cupiditate eos, voluptas neque distinctio cumque nostrum laborum consectetur! Aliquam molestiae cumque alias quia aliquid expedita ipsa quidem facilis rerum ab.",
        author: "Manasa",
        position: "Project Lead, Tech Mahindra",
        tag: "Atmakaru"
    },
    {
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero cupiditate eos, voluptas neque distinctio cumque nostrum laborum consectetur! Aliquam molestiae cumque alias quia aliquid expedita ipsa quidem facilis rerum ab.",
        author: "Manasa",
        position: "Project Lead, Tech Mahindra",
        tag: "Atmakaru"
    },
]



const Testimonial = () => {



    return (
        <section className='testimonial d-flex h-100 pt100 pb100' style={{ backgroundImage: `url(${require('../../assets/img/home/what_say.jpg')})` }}>
            <div className='wrapper_what_people w-100'>
                <Container>
                    <Row>
                        <Col lg={3} md={3} xl={3}>
                            <h2 className='colorWhite fs58 fw500'>
                                What <br />
                                Peaople <br />
                                Say
                            </h2>

                        </Col>
                        <Col lg={9} md={9} xl={9}>
                            <div className='pl30 pr30'>
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                loop={true}
                                speed={3000}
                                autoplay={{ delay: 2000 }}
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

                                    {data.map((e, i) => (
                                        <SwiperSlide key={i}>
                                            <div className='test_wrapper position-relative d-flex align-items-end' >
                                                <div className='position-relative d-flex justify-content-end'>
                                                <img src={require("../../assets/img/home/home_frame.png")} className='img-fluid' alt="" />
                                                <img src={require("../../assets/img/home/heart_testi.png")} className='img-fluid position-absolute heartAuthor' alt="" />
                                                </div>
                                                
                                                <div className='dataTesti position-absolute'>
                                                    <p className='fs16 colorWhite mb30'>
                                                        {e?.para}
                                                    </p>

                                                    <Row className='align-items-center'>
                                                        <Col lg={6} md={6}>
                                                        <div className='fs18 fw600 colorWhite text-uppercase'>
                                                            {e?.tag}
                                                        </div>
                                                        </Col>
                                                        <Col lg={6} md={6}>
                                                        <div className='fs18 fw600 colorWhite text-uppercase mb15'>
                                                                -   {e?.author}
                                                            </div>

                                                            <p className='colorWhite fs15'>
                                                                {e?.position}
                                                            </p>

                                                        </Col>
                                                    </Row>
                                              
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}




                                </div>
                            </Swiper>
                            </div>
                        

                


                        </Col>
                    </Row>
                </Container>
            </div>

        </section>
    )
}

export default Testimonial







