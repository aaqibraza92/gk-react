import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import { Fade, Flip } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import BlogItems from "./blogItems";
const Blogs = () => {
  const activeTheme = useSelector((state) => {
    return state && state?.persistedReducer?.theme?.dayTheme;
  });
  return (

    <>
    <Helmet>
      <title>Blogs - GK Builders & Developers</title>
    </Helmet>


         <Container>
          <Fade bottom delay={100}> <h2 className="fs70 mb0 brownGradient text-center mb70">  Blogs</h2> </Fade>
          </Container>
 

          <section className="mt30">
                <Container>
                   <BlogItems />
                </Container>
      </section>
    </>
  );
};

export default Blogs;
