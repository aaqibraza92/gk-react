import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./helpers/Global/GCss/index";
import { Route, Routes, useLocation } from "react-router-dom";
import RouterList from "./helpers/Routes/RoutesList";
import AnimatedCursor from "react-animated-cursor";
import SmoothScroll from "./components/SmoothScoll";
import { useEffect, useState } from "react";
import { Player } from "video-react";
import { Helmet } from "react-helmet";


function App() {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const location = useLocation();
  const [isAnimate, setisAnimate] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setisAnimate(false);
  //   }, 7000);
  // }, [window.location.pathname]);

  const resizeScreen = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    resizeScreen();
    window.addEventListener("resize", resizeScreen);
    return () => {
      window.removeEventListener("resize", resizeScreen);
    };
  }, []);

  function moveText(event) {
    var div = event.currentTarget;
    var text = div.querySelector(".text");

    var offsetX =
      event.clientX - div.getBoundingClientRect().left - text.offsetWidth / 2;
    var offsetY =
      event.clientY - div.getBoundingClientRect().top - text.offsetHeight / 2;

    text.style.left = offsetX + "px";
    text.style.top = offsetY + "px";
    // text.style.display = "block";
  }

  function hideText(event) {
    var text = event.currentTarget.querySelector(".text");
    // text.style.display = "none";
  }

  const videoHide=()=>{
    setisAnimate(false)
    sessionStorage.setItem("videoHide","true")
  }

  const videoEnable=  sessionStorage.getItem("videoHide");


  return (
    <>
    <Helmet>
      {
        !isAnimate &&   <script src="https://www.kenyt.ai/botapp/ChatbotUI/dist/js/bot-loader.js" type="text/javascript" data-bot="20472097"></script> 
      }
  
    </Helmet>

    {
      videoEnable!=="true" &&     (isAnimate && location?.pathname === "/") && (
        <div className="custom-div w-100" onClick={(e) => videoHide()} onMouseMove={(e) => moveText(e)} onMouseOut={(e) => hideText(e)}>
          <span className="text text-center flight">Click <br></br> To Open</span>

          <Player
          className="w-100"  height={700} muted={true} playsInline={true} autoPlay={true} loop={true} controls={false}>
          <source src={require("./assets/video/loader.mp4")} />
        </Player>
        </div>
      )
    }
  

      {
        (location?.pathname === "/" && videoEnable!=="true") ? "" : <div className="wrapperApp">
          <Routes>
            {RouterList &&
              RouterList.map((elem, ind) => {
                return (
                  <Route key={ind} path={elem.path} element={elem.element} />
                );
              })}
          </Routes>
        </div>
      }



      {/* </SmoothScroll> */}
    </>
  );
}

export default App;
