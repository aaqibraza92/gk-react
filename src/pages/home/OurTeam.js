import React from "react";
import { Col, Container, Row } from "reactstrap";
import bgImage from "../../assets/img/team.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const OurTeam = () => {
  var SliderSettings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: "",
    nextArrow: "",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 10,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="position-relative pb100 mobPb50">
      <section
        className="text-center bgImage pt100 pb0 mobPt50 "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container-xl">
          <Row className="justify-content-center ">
            <Col lg={8}>
              <h2 className="colorWhite fs50 fw600 mb20">Providers And The Practice Manager.</h2>
              <p className="colorWhite fs20 fw600 mb30">
                Experienced and Compassionate Professionals
              </p>

              {/* <p className="colorWhite fs15 fw400 mb20">
                We take great pride in our team of highly skilled and
                compassionate healthcare providers at Alamo Primary Care. Our
                team includes board-certified physicians, nurse practitioners,
                and support staff who are committed to delivering exceptional
                care to our patients.
              </p>
              <p className="colorWhite fs15 fw400 mb20">
                Each member of our team brings a wealth of experience,
                expertise, and a genuine passion for helping others. We strive
                to build strong relationships with our patients based on trust,
                open communication, and mutual respect.
              </p>
              <p className="colorWhite fs15 fw400 mb20">
                Get to know our team and rest assured that you are in capable
                hands when you choose Alamo Primary Care for your healthcare
                needs.
              </p> */}
            </Col>
          </Row>
         
        </div>
        <div className="grd teamLists mt30">
        <div className="container-xl">
        <Slider className="parentSl" {...SliderSettings}>
              <div className="pl10 pr10 pb25">
              <div className="radius10 bgWhite pl30 pr30 pt30 pb30 shadow ">
                <div className="mb20">
                  <img
                    src={require("../../assets/img/t1.png")}
                    className="img-fluid radius10"
                    alt=""
                  />
                </div>

                <h3 className="colorBlue fs30 fw600 mb5">
                  Dr. Chewing Shinlong
                </h3>
                <p className="colorBlue fs30 fw400 mb10">
                  D.N.Sc. - M.B.B.S,Ph.D
                </p>
                <p className="colorBlue fs15 fw400 mb10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime, repellendus? Consectetur ut dolor molestiae impedit
                  amet deleniti
                </p>
                <div className="mt30 mb10">
                  <Link
                    to="#"
                    className="btnTheme bgBlue  mr12 fMedium btnMob fw700 pt18 pb18"
                  >
                    View Details
                  </Link>
                </div>
              </div>
              </div>

              <div className="pl10 pr10 pb25">
              <div className="radius10 bgWhite pl30 pr30 pt30 pb30 shadow teamLists">
                <div className="mb20">
                  <img
                    src={require("../../assets/img/t2.png")}
                    className="img-fluid radius10"
                    alt=""
                  />
                </div>

                <h3 className="colorBlue fs30 fw600 mb5">
                  Dr. Chewing Shinlong
                </h3>
                <p className="colorBlue fs30 fw400 mb10">
                  D.N.Sc. - M.B.B.S,Ph.D
                </p>
                <p className="colorBlue fs15 fw400 mb10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime, repellendus? Consectetur ut dolor molestiae impedit
                  amet deleniti
                </p>
                <div className="mt30 mb10">
                  <Link
                    to="#"
                    className="btnTheme bgBlue  mr12 fMedium btnMob fw700 pt18 pb18"
                  >
                    View Details
                  </Link>
                </div>
              </div>
                </div>

                <div className="pl10 pr10 pb25">
                <div className="radius10 bgWhite pl30 pr30 pt30 pb30 shadow teamLists">
                <div className="mb20">
                  <img
                    src={require("../../assets/img/t3.png")}
                    className="img-fluid radius10"
                    alt=""
                  />
                </div>

                <h3 className="colorBlue fs30 fw600 mb5">
                  Dr. Chewing Shinlong
                </h3>
                <p className="colorBlue fs30 fw400 mb10">
                  D.N.Sc. - M.B.B.S,Ph.D
                </p>
                <p className="colorBlue fs15 fw400 mb10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime, repellendus? Consectetur ut dolor molestiae impedit
                  amet deleniti
                </p>
                <div className="mt30 mb10">
                  <Link
                    to="#"
                    className="btnTheme bgBlue  mr12 fMedium btnMob fw700 pt18 pb18"
                  >
                    View Details
                  </Link>
                </div>
              </div>
</div>

          </Slider>

        
        </div>
      </div>
      </section>
    
    </div>
  );
};

export default OurTeam;
