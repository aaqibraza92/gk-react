import React from "react";
import { Link } from "react-router-dom";
import { angleRight } from "../../assets/svg/Svg";
import { Container } from "reactstrap";

const BreadCrumb = (props) => {
  console.log(props?.bgImage);
  return (
    <section style={{background: `url(${props?.bgImage})`}} className="breadCrumb bgcover d-flex align-items-center justify-content-start pt90 pb90">
      <Container>
      <div className="contentArea">
      {props.subTitle && (
          <p className="mt15 colorGreen fs18">{props.subTitle}</p>
        )}
        <h2 className="colorBlue fs60 mobFs22 fw600">{props?.title}</h2>
        {/* <ul className="noUl d-flex">
          <li className="colorBlue">
            Home
          </li>
          <li className="colorGreen text-capitalize fw500"> 
            {window.location.pathname}
          </li>
        </ul> */}
    

        {/* {props?.items && (
          <ul className="noUl d-flex justify-content-center">
            {props?.items.map((e, i) => (
              <li key={i} className="mr10 mobmr5 mobFs10 colorPara">
                {e.url === "" ? (
                  <span>{e.name}</span>
                ) : (
                  <Link className="colorPara" to={e.url}>
                    {" "}
                    {e.name} <span className="ml5">{angleRight}</span>{" "}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )} */}
      </div>

      </Container>

    </section>
  );
};

export default BreadCrumb;
