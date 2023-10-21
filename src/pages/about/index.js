import React, { useEffect,useRef, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import '../../assets/css/about.css';
import "../../assets/css/footer.css"
import { Helmet } from "react-helmet";
const AboutUs = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.play();
  }, [videoRef]);

  const videoRefn = useRef(null);
  useEffect(() => {
    videoRefn.current.play();
  }, [videoRefn]);
  const [playStatus, setplayStatus] = useState(false);

  return (
    <>
      
      <Helmet>
        <title>About Us - GK Builders & Developers</title>
      </Helmet>
      <section className="heroSection aboutus">
            <h1 className="text-white fs70 subfont text-uppercase">About Us</h1>
      </section>
      
      <div className="bgWhite pt80 pb80 mobPb30">
        <div className="container-xl">
          <Row className="align-items-center gy-4 mobilereverse">
            <Col lg={7} md={7}>
               <h3 className="fs60">Our legacy <br></br> dates back to</h3>
               <h2 className="fs140">1985</h2>
               <p>When it comes to real estate developers in Hyderabad providing quality, transparency, and professionalism, the name that garners unflinching trust is GK BUILDERS AND DEVELOPERS. Committed to creating well-landscaped luxurious abodes for the elite of the city, the company follows customer-friendly policies and best-in-industry practices.</p>
               <p>Over a period of three and half decades GK BUILDERS AND DEVELOPERS has carved a distinct niche for itself through several projects spread over mainly in Sainikpuri zone of Secunderabad. The very fact that two colonies have been named after this group shows the strong presence it has in this zone.</p>
               <p>Having developed about 3 million sq ft., GK BUILDERS AND DEVELOPERS is now focusing on developing large housing schemes in the form of gated communities in the peripheral areas of the twin cities, which are fast developing to meet the housing requirements of middle and upper middle-class customers. From project to project, they strengthened their customer base by improving quality and design as per the changing needs and tastes of the modern customers.</p>
               <p>Founded 36 years ago by Late Sri.K. Ramakrishnaiah, GK BUILDERS AND DEVELOPERS groomed many young people to become independent builders by themselves. Many of the reputed builders in this area have their roots with the organisation for whom construction is a profession and community work a passion.</p>

            </Col>

            <Col lg={5} md={5} className="text-center">
          
            <img src={require('../../assets/img/aboutus/VectorSmartObject.webp')} className='img-fluid' alt="" />
            </Col>
          </Row>
        </div>
      </div>

      <div className="bgmission pt80 pb80 mobPb30">
        <section className="bgfifty pb40 pt40 mb30">
            <div className="container-xl">
              <Row className="align-items-center gy-4 mobilereverse">
                <Col lg={6} md={6}>
                   <div className="visionvidio">
                   <video className="w-100" ref={videoRef} autoplay loop muted>
                      <source
                        src={require("../../assets/img/home/Visionweb.mp4")}
                        type="video/mp4"
                      />
                    </video>
                   </div>
                </Col>

                <Col lg={6} md={6} className="text-left">
                    <div className="pb-3">
                    <h3 className="fs45 subfont">Our Vision</h3>
                    <p className="fs17 colorLight w-85">Our vision is to enhance the quality of living by offering the best living spaces in the twin cities of Hyderabad and Secunderabad. We want to give our customers an experience of best branded materials and create a comfortable.</p>

                    </div>
                </Col>
              </Row>
            </div>
        </section>


        <section className="bgfiftymission pb40 pt40">
            <div className="container-xl">
              <Row className="align-items-center gy-4 mobilereverse">
                

                <Col lg={6} md={6} className="text-left">
                    <div className="pb-3">
                    <h3 className="fs45 subfont">Our Mission</h3>
                    <p className="fs17 colorLight w-85">Our mission is to grow as a brand and become one of the leading developers in the industry. We aim to develop trust among our clientele and potential customers and create create a peerless reputation and track record.</p>

                    </div>
                </Col>

                <Col lg={6} md={6}>
                   <div className="visionvidio">
                   <video className="w-100" ref={videoRefn} autoplay loop muted>
                      <source
                        src={require("../../assets/img/home/Missionweb.mp4")}
                        type="video/mp4"
                      />
                    </video>
                   </div> 
                </Col>
              </Row>
            </div>
        </section>
        
      </div>


      <div className="bgourteam pt80 pb80 mobPb30">
        <div className="container-xl">
          <Row className="align-items-center gy-4 mobilereverse ">
            <Col lg={12} md={12} className="text-center">
               <h3 className="fs60  text-uppercase subfont fontlight">Our Pillars</h3>
               <h3 className="fs30 subfont fontlight">GK Group’s Foundation</h3>
               <div className="devider">
                 
               </div>
            </Col>

            <Col lg={5} md={5} className="text-center m-auto">
               <img src={require('../../assets/img/aboutus/teamone.webp')} className='img-fluid w-75' alt="" />
               <div className="text-start mt20 border-start pl30 text-white">
                  <p>
                  Our respected founder Late Sri K Ramakrishnaiah was a retired Subedar in the Indian Army with a prolific record of service spanning 28 years. A visionary and philanthropist, he donated two acres of prime land to a trust to develop educational institutions. He also gifted 1000 square yards of land abutting the main road to a church and provided a place for Brahmakumaris to conduct their programs.
                  </p>
                  <b>
                  Late SRI. K Ramakrishnaian<br></br>
                  Founder
                  </b>
               </div>
            </Col>
            <Col lg={5} md={5} className="text-center m-auto">
            <img src={require('../../assets/img/aboutus/teamtwo.webp')} className='img-fluid w-75' alt="" />
               <div className="text-start mt20 border-start pl30 text-white">
                  <p>
                  A civil engineer from Osmania University Hyderabad, Mr. Rao has more than three decades of experience and involvement in construction of residential complexes. A leader by example, he takes active interest in resolving various issues concerning the development of projects. Mr. Rao also participates in deliberations with the government and other agencies for the welfare of builders’ community.</p>
                  <b>
                  Mr.K. Hanumantha Rao<br></br>
                  Managing Partner
                  </b>
               </div>
            </Col>
          </Row>
        </div>
      </div>



    </>
  );
};

export default AboutUs;
