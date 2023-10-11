import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import BreadCrumb from "../../components/BreadCrumb";
import bgImage from "../../assets/img/ourteamBG.png";
import CallToAction from "../../components/CallToAction";
import { Helmet } from "react-helmet";
import axios from "axios";
import { HOME_URL, TEAM_URL } from "../../helpers/apiurls";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const OurTeam = () => {
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
    loadTeamData();
  }, [currentPage]);

  const loadTeamData = async () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };

    await axios.get(`${HOME_URL + TEAM_URL}?per_page=25&page=${currentPage}`, options).then((res) => {

      if (res && res.status === 200) {
        setPostData(res?.data);
        setloading(true);
        setTotalPage(res?.headers["x-wp-totalpages"]);
        setTotalCount(res?.headers["x-wp-total"]);
        if (currentPage !== 1) {
          navigation(`/blogs/?page=${currentPage}`);
        }

      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Our Team - Alamo </title>
      </Helmet>
      <BreadCrumb
        subTitle="Welcome to Alamo Primary Care"
        title={
          <div>
            <span className="colorBlue">Our</span>{" "}
            <span className="colorGreen">Team</span>{" "}
          </div>
        }
        bgImage={require("../../assets/img/team/hero_team.png")}
      />

      {
        loading ? postData.length > 0 && postData.map((e, i) => (
          i % 2 ? <section key={i} className="pt80 pb80 whatWeDo"
            style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="container-xl">
              <Row className="align-items-center gy-3 mobilereverse">
                <Col lg={6} className="intro-content">
                  <div className="bgWhite  shadowContentRight radius10 pl15 pr15 pt60 pb60 text-center">
                    <h2 className="colorBlue fw600 fs45 mobFs28 fBold mb30">
                      {e?.title?.rendered}
                    </h2>
                    <h5 className="colorBlue fw400 fs24 mobFs58 fBold mb30">
                      {e?.acf?.position}
                    </h5>

                    <div className="fs18 fw400 colorBlue w-80 m-auto" dangerouslySetInnerHTML={{ __html: e?.content?.rendered }} />

                    <div class="bglight radius10 p-3 mt20">
                      <Row>
                        <Col md={6} className="justify-content-center d-flex mobilecontentstart mb5">
                          <div className="d-flex">
                            <div className="mr10">
                              <img
                                src={require("../../assets/img/phone.png")}
                                className="img-fluid"
                                alt="Phone"
                              />
                            </div>
                            <div >
                              <Link className="text-start" to={`tel:${e?.acf?.position}`}>
                                <p className="mb-0 colorBlue ">Contact Now</p>
                                <span className="fw500 colorGreen"> {e?.acf?.mobile}</span>
                              </Link>
                            </div>
                          </div>

                        </Col>
                        <Col md={6} className="justify-content-center d-flex mobilecontentstart mb5">
                          <div className="d-flex">
                            <div className="mr10">
                              <img
                                src={require("../../assets/img/mail.png")}
                                className="img-fluid"
                                alt="Phone"
                              />
                            </div>
                            <div >
                              <Link className="text-start" to={`mailto:${e?.acf?.email}`}>
                                <p className="mb-0 colorBlue ">Mail ID</p>
                                <span className="fw500 colorGreen">{e?.acf?.email}</span>
                              </Link>
                            </div>
                          </div>

                        </Col>
                      </Row>
                    </div>

                  </div>
                </Col>

                <Col lg={6}>
                  <img
                    src={e?.x_featured_media_original}
                    className="img-fluid radius19"
                    alt="what we do"
                  />
                </Col>

              </Row>
            </div>
          </section> :
            <section key={i} className="pt80 pb80 whatWeDo">
              <div className="container-xl">
                <Row className="align-items-center gy-3">
                  <Col lg={6}>
                    <img
                      src={e?.x_featured_media_original}
                      className="img-fluid radius19"
                      alt="what we do"
                    />
                  </Col>
                  <Col lg={6} className="intro-content">
                    <div className="bgWhite shadowContent radius10 pl15 pr15 pt60 pb60 text-center">
                      <h2 className="colorBlue fw600 fs45 mobFs28 fBold mb30">
                        {e?.title?.rendered}
                      </h2>
                      <h5 className="colorBlue fw400 fs24 mobFs58 fBold mb30">
                        {e?.acf?.position}
                      </h5>
                      <div className="fs18 fw400 colorBlue w-80 m-auto" dangerouslySetInnerHTML={{ __html: e?.content?.rendered }} />


                      <div class="bglight radius10 p-3 mt20">
                        <Row>
                          <Col md={6} className="justify-content-center d-flex mobilecontentstart mb5">
                            <div className="d-flex">
                              <div className="mr10">
                                <img
                                  src={require("../../assets/img/phone.png")}
                                  className="img-fluid"
                                  alt="Phone"
                                />
                              </div>
                              <div >
                                <Link className="text-start" to={`tel:${e?.acf?.position}`}>
                                  <p className="mb-0 colorBlue ">Contact Now</p>
                                  <span className="fw500 colorGreen">    {e?.acf?.mobile} </span>
                                </Link>
                              </div>
                            </div>

                          </Col>
                          <Col md={6} className="justify-content-center mobilecontentstart d-flex mb5">
                            <div className="d-flex">
                              <div className="mr10">
                                <img
                                  src={require("../../assets/img/mail.png")}
                                  className="img-fluid"
                                  alt="Phone"
                                />
                              </div>
                              <div >
                                <Link className="text-start" to={`mailto:${e?.acf?.email}`}>
                                  <p className="mb-0 colorBlue ">Mail ID</p>
                                  <span className="fw500 colorGreen">{e?.acf?.email} </span>
                                </Link>
                              </div>
                            </div>

                          </Col>
                        </Row>
                      </div>

                    </div>
                  </Col>
                </Row>
              </div>
            </section>

        )) : <div className="container-xl mt80 mb80">
          <Row>
            <Col md={6}>
              <div class="skeleton" style={{ height: '450px' }}>  </div>
            </Col>
            <Col md={6}>
              <div class="skeleton" style={{ height: '450px' }}>  </div>
            </Col>
            <Col md={6}>
              <div class="skeleton" style={{ height: '450px' }}>  </div>
            </Col>
            <Col md={6}>
              <div class="skeleton" style={{ height: '450px' }}>  </div>
            </Col>
          </Row>
        </div>
      }




      <CallToAction
        title="Get started with alamo primary care"
        buttonName1="New-Patient-Registration"
        buttonName2="Book Appointment"
        link1="#"
        link2="#"
        bgImg={require("../../assets/img/about/Mask.png")}
        btnType="blue"
      />

    </>
  );
};

export default OurTeam;
