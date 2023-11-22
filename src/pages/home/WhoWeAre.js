import React, { useRef } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { useDispatch, useSelector } from "react-redux";
import { Fade, Zoom } from "react-awesome-reveal";
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Autoplay } from 'swiper';
import { viewPortFunc } from '../../store/slices/UserSlices';



const WhoWeAre = () => {
    const [screenWidth, setScreenWidth] = useState(window.screen.width);
    const resizeScreen = () => {
      setScreenWidth(window.innerWidth);
    };

    const ref1 = useRef(null);
    const sectionEndRef = useRef(null);
    const [isSectionEndVisible, setIsSectionEndVisible] = useState(false);
    const dispatch= useDispatch();
  
    // useEffect(() => {
    //   const observer = new IntersectionObserver(
    //     ([entry]) => {
    //       setIsSectionEndVisible(entry.isIntersecting);
    //       dispatch(viewPortFunc(entry.isIntersecting));
    //     },
    //     {
    //       root: null, 
    //       rootMargin: '600px',
    //       threshold: screenWidth > 767 ? 0.5 : 0.6, 
    //     }
    //   );
  
    //   if (sectionEndRef.current) {
    //     observer.observe(sectionEndRef.current);
    //   }
  
    //   return () => {
    //     if (sectionEndRef.current) {
    //       observer.unobserve(sectionEndRef.current);
    //     }
    //   };
    // }, []); 

    useEffect(() => {
        resizeScreen();
            window.addEventListener("resize", resizeScreen);
            return () => {
              window.removeEventListener("resize", resizeScreen);
            };
    },[]);
          

    const [triggerHover, settriggerHover] = useState(false);


    const activeTheme = useSelector((state) => {
        return (
            state && state?.persistedReducer?.theme?.dayTheme
        );
    });

    const handleHover=()=>{
        settriggerHover(true);
       
    }

    return (
        <section ref={sectionEndRef}  className={`${activeTheme ? "bgPink" : "bgFullBlack"} pt100 pb100 `}>
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
                    <Row className='align-items-center gy-4 mt20'>
                        <Col lg={4} md={6}>
                        <Zoom>
                                <div>
                                    <div className='circleMainWrp position-relative d-flex align-items-center justify-content-center h-100'>
                             
                                        {
                                            triggerHover ? <div className='circleAnimate position-absolute'>
                                            </div> : <div className='circleAnimate hideRotate position-absolute' onMouseOver={() => handleHover()}>
                                            </div>

                                         
                                        }

                                        {
                                            triggerHover ?
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

                                                </Swiper> :
                                                <div className='blankData'></div>

                                        }
                                           
                                    
                                     



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