import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import ImageContent from "../home/ImageContent";
import CallToAction from "../../components/CallToAction";
import { Col, Row } from "reactstrap";
import WhatWeDo from "../home/WhatWeDo";
import { Helmet } from "react-helmet";
import axios from "axios";
import { HOME_URL, SERVICE_URL } from "../../helpers/apiurls";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

let data = [
  {
    img: require('../../assets/img/service/sr1.png'),
    title: "Routine check-ups and preventive care",
    content: "Routine check-ups and preventive care offer numerous benefits to individuals of all ages. Our services help monitor health status, detect potential problems before they become serious, and provide personalized guidance to enhance well-being, Preventive care encompasses various aspects, including immunizations, screenings, counseling, and education. It empowers individuals to take control of their health and make informed decisions about their lifestyles."
  },
  {
    img: require('../../assets/img/service/sr2.png'),
    title: " Immunization and vaccination ",
    content: "Immunization and vaccination services are a cornerstone of preventive healthcare, safeguarding individuals and communities from the burden of infectious diseases. With our comprehensive approach, expert care, and emphasis on education, we strive to promote healthier lives and a safer future for all."
  },
  {
    img: require('../../assets/img/service/sr3.png'),
    title: "Chronic disease management",
    content: "Chronic disease management services play a significant role in reducing healthcare costs, hospitalizations, and complications associated with chronic conditions. By providing individuals with our state-of-the-art facility and personal support needed to manage their conditions effectively, these services contribute to better quality of life and overall health outcomes."
  },
  {
    img: require('../../assets/img/service/health.png'),
    title: " Health screenings and diagnostic tests",
    content: "Health screenings and diagnostic tests are very important to maintain and improve health. These services involve the early detection, diagnosis, and monitoring of various medical conditions, allowing for timely interventions and treatments. "
  },
  {
    img: require('../../assets/img/service/man_health.png'),
    title: "Men’s health services",
    content: "Men's health services often recognize the unique health challenges and concerns that every Man faces, as well as the importance of encouraging men to seek medical care and openly discuss their health. Our well trained team who specialize in men's health may offer tailored advice and treatment plans to address these specific needs. It's important for men to engage in regular health check-ups and screenings and to communicate openly with their healthcare providers about their concerns and questions."
  },
  {
    img: require('../../assets/img/service/sr5.png'),
    title: "Women's health services",
    content: "It's important for women to receive regular check-ups and screenings to maintain their overall health and catch any potential health issues early on."
  },
  {
    img: require('../../assets/img/service/sr4.png'),
    title: "Geriatric care ",
    content: "It's important to tailor geriatric care to each person's unique needs and circumstances. The specific services needed will depend on the individual's health status, level of independence, and personal preferences."
  },
  {
    img: require('../../assets/img/service/medkit.png'),
    title: "In-office procedures",
    content: "In-office procedures are typically non-invasive or minimally invasive, requiring only local anaesthesia or sedation, ensuring patient comfort. Common examples include dental cleanings, biopsies, skin lesion removals, and minor surgeries like vasectomies or colonoscopies. These offer several advantages, including convenience, reduced costs, and shorter recovery times compared to hospital-based treatments. At Alamo Primary Care, we offer efficient and accessible in-office procedures, from the hands of expert professionals who perform well-analysed treatments that enable individuals to return to their daily routines more swiftly."
  },


];

const Service = () => {
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
    <div>
      <Helmet>
        <title>Services - Alamo Primary Care</title>
      </Helmet>
      <BreadCrumb
        // subTitle="Welcome to Alamo Primary Care"
        title={
          <div>
            <span className="colorBlue">Our</span>{" "}
            <span className="colorGreen">Services</span>{" "}
          </div>
        }
        items={[
          { name: "Home", url: "/" },
          { name: "Our Story", url: "/" },
          { name: "Privacy Policy", url: "" },
        ]}
        bgImage={require("../../assets/img/service/service_hero.png")}
      />


      <section className="bgLightBlue pt80 pb80">
        <div className="container-xl">
          {/* <h2 className="colorBlue fs50 fw700  text-center"><span className="colorGreen">Our Dedicated Team Works</h2> */}
          <h4 className="text-center fs24 fs700 mobFs19 colorBlue w-80 m-auto pb40">Our Dedicated Team work collaboratively to develop personalized treatment that cater to your specific needs, ensuring you receive the highest level of care.</h4>
          <Row className="gy-3">
            {
              loading ? postData.length > 0 && postData.map((e, i) => (
                <Col lg={6} md={6} key={i}>
                  <div className="bgWhite pt40 pb40 pl30 pr30 minH hovers transition">
                    <div className="mb30">
                      <img src={e?.acf?.icon_image?.sizes?.large} className="img-fluid" alt="" />
                    </div>
                    <h4 className="fs24 fs700 mb30 colorBlue">
                      {e?.title?.rendered}
                    </h4>
                    <div className="fs16 fw400 colorBlue" dangerouslySetInnerHTML={{ __html: e?.content?.rendered }} />
                  </div>
                </Col>
              ))
                : <Row>
                  <Col md={6}>  <div class="skeleton" style={{height: '300px'}}>  </div></Col>
                  <Col md={6}>  <div class="skeleton" style={{height: '300px'}}>  </div></Col>
                  <Col md={6}>  <div class="skeleton" style={{height: '300px'}}>  </div></Col>
                  <Col md={6}>  <div class="skeleton" style={{height: '300px'}}>  </div></Col>
                </Row> 
              
              
            }


          </Row>

        </div>
      </section>

      {/* <OurTeam className="servicePage" /> */}
      <WhatWeDo />
      <CallToAction title="Get started with alamo primary care"
        buttonName1="New-Patient-Registration"
        buttonName2="Book Appointment"
        link1="/contact-us"
        link2="/contact-us"
        bgImg={require('../../assets/img/bgImg.png')}
      />
    </div>
  );
};

export default Service;
