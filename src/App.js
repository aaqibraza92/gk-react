import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./helpers/Global/GCss/index";
import { Route, Routes } from "react-router-dom";
import RouterList from "./helpers/Routes/RoutesList";
import AnimatedCursor from "react-animated-cursor"
import SmoothScroll from "./components/SmoothScoll";
import { useEffect, useState } from "react";


function App() {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
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
      {/* {
        screenWidth > 1000 && <AnimatedCursor color='142, 118, 83' />
      } */}
      <div className="wrapperApp" >
        <Routes>
          {RouterList &&
            RouterList.map((elem, ind) => {
              return (
                <Route key={ind} path={elem.path} element={elem.element} />
              );
            })}
        </Routes>
      </div>
      {/* </SmoothScroll> */}
    </>
  );
}

export default App;
