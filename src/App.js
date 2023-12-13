import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./helpers/Global/GCss/index";
import { Route, Routes, useLocation } from "react-router-dom";
import RouterList from "./helpers/Routes/RoutesList";
import AnimatedCursor from "react-animated-cursor"
import SmoothScroll from "./components/SmoothScoll";
import { useEffect, useState } from "react";
import { Player } from "video-react";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const location= useLocation();
  const [isAnimate,setisAnimate]=useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setisAnimate(false);
    }, 7000);
  },[window.location.pathname])

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



  return (
    <>
  {
        (isAnimate && location?.pathname==="/") &&  <Player className="w-100 position-relative z999 customheight" autoPlay={true} loop={true} muted={true} controls={false}>
        <source
          src={require("./assets/video/loader.mp4")}
        />
      </Player>
      }
      {
        !isAnimate &&     <div className="wrapperApp" >
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
