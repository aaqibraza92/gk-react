import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Col, Row } from "reactstrap";
import axios from "axios";
import { HOME_URL, SERVICE_URL } from "../../helpers/apiurls";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const OurServices = () => {
  const [loading, setloading] = useState(false);

  const [postData, setPostData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const navigation = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setcurrentPage] = useState(
    searchParams.get("page") ? searchParams.get("page") : 1
  );
  useEffect(() => {
    loadServiceList();
  }, [currentPage]);

  const loadServiceList = async () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };

    await axios.get(`${HOME_URL + SERVICE_URL}?per_page=12&page=${currentPage}`, options).then((res) => {
      if (res && res.status === 200) {
        setPostData(res?.data);
        console.log(res?.data);
        setloading(true);
        setTotalPage(res?.headers["x-wp-totalpages"]);
        setTotalCount(res?.headers["x-wp-total"]);
        if (currentPage !== 1) {
          navigation(`/blogs/?page=${currentPage}`);
        }

      }
    });
  };

  var SliderSettings = {
    dots: false,
    arrows: false,
    loop: true,
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

  var SliderSettings2 = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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
    <section className="servicearea pt100 pb100 mobPb50 mobPt50 text-center bgLightBlue">
      <div className="container-xl">
        <Row className="justify-content-center mb45 gy-3">
          <Col lg={6}>
            <h2 className="colorBlue fs50 fw600 mb20">
              <span className="colorGreen">Our</span> Services
            </h2>

            <p className="colorBlue fs15 fw400 mb20">
              Comprehensive Services for Your Health Needs
            </p>
            <p className="colorBlue fs15 fw400 mb20">
              At Alamo Primary Care, we offer a wide range of primary care
              services to address all aspects of your health.
            </p>
          </Col>
        </Row>

        <Slider className="parentSl mb20 mobMb30" {...SliderSettings}>

          {
            loading ? postData.length > 0 && postData.map((e, i) => (

              <div className="pl10 pr10" key={i}>
                <div className="radius10 position-relative mainSerWrap transition">
                  <img
                    src={e?.x_featured_media_original}
                    className="w-100 radius10"
                    alt=""
                  />
                  <div className="w-100 default radius10 blueGrd posUp position-absolute h-100 d-flex flex-column pl30 pr30 pb30 transition">
                    <div className="h-100 d-flex align-items-end">
                      <div className="text-start pb20">
                        <div className="mb20">
                          <img src={e?.acf?.icon_image?.sizes?.large} alt="" />
                        </div>
                        <h4 className="colorWhite fs24 fw600">
                          {e?.title?.rendered}
                        </h4>
                      </div>
                    </div>
                  </div>



                  <div className="w-100 onHover radius10 blueGrd posUp img-hvr hvr-6 position-absolute h-100 d-flex flex-column pl30 pr30 transition">
                    <div className="h-100 d-flex align-items-center  transition">
                      <div className="text-start">
                        <div className="mb20">
                          <img src={e?.acf?.icon_image?.sizes?.large} alt="" />
                        </div>
                        <h4 className="colorWhite fs24 fw600 mb20">
                          {e?.title?.rendered}
                        </h4>
                        <div className="colorWhite fs15 fw400 mb20" dangerouslySetInnerHTML={{ __html:  e?.content?.rendered.substring(0, 200)+"..." }} />
                        <div className="mt40">
                          <Link
                            className="btnTheme btnWhite fw600 fs16 pt15 pb15 mr12 fMedium btnMob"
                            to="/services"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            ))
              : <>
                <div class="skeleton" style={{ height: '300px' }}>  </div>
                <div class="skeleton" style={{ height: '300px' }}>  </div>
                <div class="skeleton" style={{ height: '300px' }}>  </div>
              </>


          }






        </Slider>

        {/* <Slider className="parentSl newslide" {...SliderSettings2}>
          <div className="pl10 pr10">
            <div className="radius10 position-relative mainSerWrap transition">
              <img
                src={require("../../assets/img/demo_1.png")}
                className="w-100 radius10"
                alt=""
              />
              <div className="w-100 default radius10 blueGrd posUp position-absolute h-100 d-flex flex-column pl30 pb30 pr30 transition">
                <div className="h-100 d-flex align-items-end">
                  <div className="text-start pb20">
                    <div className="mb20">
                      <img src={require("../../assets/img/Womenshealthservices.png")} alt="" />
                    </div>
                    <h4 className="colorWhite fs24 fw600">
                      Women's health services
                    </h4>
                  </div>
                </div>
              </div>
              <div className="w-100 onHover radius10 blueGrd posUp position-absolute h-100 d-flex flex-column pl30 pr30 transition">
                <div className="h-100 d-flex align-items-center">
                  <div className="text-start">
                    <div className="mb20">
                      <img src={require("../../assets/img/Womenshealthservices.png")} alt="" />
                    </div>
                    <h4 className="colorWhite fs24 fw600 mb20">
                      Women's health services
                    </h4>
                    <p className="colorWhite fs15 fw400 mb20">
                      It's important for women to receive regular check-ups and screenings to maintain their overall health.
                    </p>
                    <div className="mt40">
                      <Link
                        className="btnTheme btnWhite fw600 fs16 pt15 pb15 mr12 fMedium btnMob"
                        to="/services"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pl10 pr10">
            <div className="radius10 position-relative mainSerWrap transition">
              <img
                src={require("../../assets/img/Validation.png")}
                className="w-100 radius10"
                alt=""
              />
              <div className="w-100 default radius10 blueGrd posUp position-absolute h-100 d-flex flex-column pl30 pb30 pr30 transition">
                <div className="h-100 d-flex align-items-end">
                  <div className="text-start pb20">
                    <div className="mb20">
                      <img src={require("../../assets/img/Geriatriccare.png")} alt="" />
                    </div>
                    <h4 className="colorWhite fs24 fw600">
                      Geriatric care
                    </h4>
                  </div>
                </div>
              </div>
              <div className="w-100 onHover radius10 blueGrd posUp position-absolute h-100 d-flex flex-column pl30 pr30 transition">
                <div className="h-100 d-flex align-items-center">
                  <div className="text-start">
                    <div className="mb20">
                      <img src={require("../../assets/img/Geriatriccare.png")} alt="" />
                    </div>
                    <h4 className="colorWhite fs24 fw600 mb20">
                      Geriatric care
                    </h4>
                    <p className="colorWhite fs15 fw400 mb20">
                      It's important to tailor geriatric care to each person's unique needs and circumstances.
                    </p>
                    <div className="mt40">
                      <Link
                        className="btnTheme btnWhite fw600 fs16 pt15 pb15 mr12 fMedium btnMob"
                        to="/services"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider> */}

      </div>
    </section>
  );
};

export default OurServices;
