
// import Auth from "../Auth/Auth";
// import AuthHelper from "../Auth/AuthHelper";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "../../pages/home";
import Header from "../../components/header";
import Footer from "../../components/footer";
import PageNotFound from "../../pages/404";
import AboutUs from "../../pages/about";
import ContactUs from "../../pages/contact-us";
import PrivacyPolicy from "../../pages/privacyPolicy";
import Project from "../../pages/project";
import Thankyou from "../../pages/thankyou";

const GetRoute = ({ isprivate: isPrivate, page: Page, ...rest }) => {

  const location= useLocation();
  var LoggedIn = false;
  // if (Auth.isUserLoggedIn()) {
  //   LoggedIn = true;
  // }
  if (isPrivate && !LoggedIn) {
   // return <Navigate to="/" />;
  } else {
    return (
      <>
        {!rest.hideHeaderFooter && (
          <Header />
        
        )}
        <div className="contentWrapper">
          <Page {...rest} />
        </div>
        {!rest.hideHeaderFooter && (
          <Footer footer={rest.footer || false} />
        )}
      </>
    );
  }
};

let RouterList = [

  {
    element: <GetRoute isprivate={false} role="Default" page={HomePage} />,
    path: "/",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={AboutUs} />,
    path: "/about-us",
    isAdmin: false,
  },

  {
    element: <GetRoute isprivate={false} role="Default" page={ContactUs} />,
    path: "/contact-us",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={PrivacyPolicy} />,
    path: "/privacy-policy",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={Project} />,
    path: "/project",
    isAdmin: false,
  },
  {
    element: <GetRoute isprivate={false} role="Default" page={Thankyou} />,
    path: "/thankyou",
    isAdmin: false,
  },
  {
    element: (
      <GetRoute isprivate={false} role="Default" page={PageNotFound} hideHeaderFooter={true} />
    ),
    path: "*",
    isAdmin: false,
    
  },
  
];

export default RouterList;
