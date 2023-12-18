import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./helpers/Global/GCss/index";
import { Route, Routes, useLocation } from "react-router-dom";
import RouterList from "./helpers/Routes/RoutesList";
import AnimatedCursor from "react-animated-cursor";
import SmoothScroll from "./components/SmoothScoll";
import { useEffect, useState } from "react";
import { Player } from "video-react";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const location = useLocation();
  const [isAnimate, setisAnimate] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisAnimate(false);
    }, 7000);
  }, [window.location.pathname]);

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

  return (
    <>
      {isAnimate && location?.pathname === "/" && (
        <div className="custom-div w-100" onClick={(e)=>setisAnimate(false)} onMouseMove={(e) => moveText(e)} onMouseOut={(e)=>hideText(e)}>
        <span className="text">Click to close</span>
          <Player
            className="w-100 position-relative z999 customheight"
            autoPlay={true}
            loop={true}
            muted={true}
            controls={false}
          >
            <source src={require("./assets/video/loader.mp4")} />
          </Player>
        </div>
      )}
      {!isAnimate && (
        <div className="wrapperApp">
          <Routes>
            {RouterList &&
              RouterList.map((elem, ind) => {
                return (
                  <Route key={ind} path={elem.path} element={elem.element} />
                );
              })}
          </Routes>
        </div>
      )}

      {/* </SmoothScroll> */}
    </>
  );
}

export default App;
