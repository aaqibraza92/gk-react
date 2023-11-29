import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Col, Container, Row } from "reactstrap";
import { Fade, Zoom } from "react-awesome-reveal";
gsap.registerPlugin(ScrollTrigger);

let data = [
  {
    title: "SUPERIOR CONSTRUCTION",
    para: "With over three decades of unparalleled experience in construction and development, the GK group is one of the most trusted names amongst real estate developers in Hyderabad. Our name and brand are synonymous with superior quality of construction materials, best-in-industry practices and compliance with safety protocol.",
    img: require("../../assets/img/home/layer_building.png"),
    class: "firstSlide",
  },
  {
    title: "VALUE FOR MONEY",
    para: "Even as we remain steadfast in our goal to develop Hyderabad’s most luxurious projects, our prices are among the most competitive in today’s market. We offer our customers the best value for their money and investment. While no compromises are made in the quality of construction, every effort is made to optimise costs and pass on the benefit to the customer.",
    img: require("../../assets/img/home/valueformoney.png"),
  },
  {
    title: "TRANSPARENCY",
    para: "All our operations and communication are transparent, and we encourage you to visit our sites at any time to get a look at our practices. We are committed to following all RERA guidelines and comply with all local municipal laws while developing our projects.",
    img: require("../../assets/img/home/transparency.png"),
  },
  {
    title: "TRACK RECORD",
    para: "We have tirelessly served over 4000 satisfied customers to earn the tag of one of Hyderabad’s most reliable developers. Our customers are truly our brand ambassadors and endorse our brand’s sense of commitment and professionalism. It has taken us over 35 years to build an impeccable track and reputation of one of the best real estate developers of Hyderabad we are committed to take this legacy forward.",
    img: require("../../assets/img/home/record.png"),
  },
];




const ScrollComp = () => {
  const parentContainer = useRef();
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(max-width: 768px)", () => {
      // setBackgroundColor('gainsboro');
    });
    mm.add(
      "(min-width: 1200px)",
      () => {
        const sections = gsap.utils.toArray(".service");
        console.log(sections.length);
        const timeline = gsap.timeline();
        timeline.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: parentContainer.current,
            start: "top top",
            end: () => "+=" + parentContainer.current.offsetWidth,
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            invalidateOnRefresh: true
          }
        });
      },
      parentContainer
    );

    return () => mm.revert();
  }, []);

  // useLayoutEffect(() => {
  //   gsap.to(".mask", {
  //     scale: 12.18999,
  //     scrollTrigger: {
  //       trigger: "#img",
  //       start: "center bottom",
  //       markers: true,
  //       toggleActions: "play reverse",
  //       pin: true,
  //       scrub: true,
  //       end: "+=200%"
  //     }
  //   });
  // }, []);

  return (
    <div className="App">
      <header>

        <div className="content">

          <div ref={parentContainer}>
            <div className="services position-relative">
              {/* <div className="service d-none" >

              </div> */}
              {data.map((e, i) => (
                <div key={i} className={`${i === 3 && "last_service"} service`}     style={{
                  backgroundImage: `url(${require("../../assets/img/home/ver_bg.jpg")})`,
                }}>
                  <div className="container">
                    <div className="text-center mb60">
                      <Zoom left>
                        <img
                          src={require("../../assets/img/home/three_dot.png")}
                          className="img-fluid"
                          alt=""
                        />
                      </Zoom>
                      <Fade left cascade damping={1e-1} delay={100}>
                        <h2 className="colorWhite mb0 pb-0 fs50 fontlight subfont text-center">
                          why choose us?
                        </h2>
                      </Fade>
                    </div>
                    <div className="cornerHandle">
                      <div className="whyChsWrp">
                        <Row className="align-items-center">
                          <Col lg={6} md={12}>
                            <h3 className="brownGradient fs30 mb25 mobFs21">
                              {e.title}
                            </h3>
                            <p className="fs14">{e.para}</p>
                          </Col>
                          <Col lg={6} md={12}>
                            <img
                              src={e.img}
                              alt="building"
                              className="img-fluid"
                            />
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>

                </div>
              ))}

            </div>
          </div>
        </div>
      </header>


    </div>
  );
};

export default ScrollComp;
