import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import bgImage from  '../../assets/img/BookAppointment.png';


const CallToAction = () => {
  return (
    <section className="text-center bgImage pt100 pb100 mobPt50 mobPb50 bgcolorblueGradinat"   style={{ backgroundImage: `url(${bgImage})` }} >
       <div className="container-xl">
      <div className="pt30 pb30">
      <h2 className="colorWhite fs50 fw600 mb60 mobMb30">
          We Treat All Patients From Age 16.
        </h2>
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <Link className="btnBorder btnTheme fs20 fw500 bgGreen mr15 mb15 fMedium btnMob pt20 pb20 pl30 pr30" to="/contact-us">
            New-Patient-Registration 
          </Link>
          <Link className="btnTheme borderGreen fs20 fw500 bgGreen mb15  fMedium btnMob pt20 pb20 " to="/contact-us">
            Book Appointment
          </Link>
        </div>
      </div>
     
      </div>
    </section>
  );
};

export default CallToAction;
