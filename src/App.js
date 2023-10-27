import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./helpers/Global/GCss/index";
import { Route, Routes } from "react-router-dom";
import RouterList from "./helpers/Routes/RoutesList";
import AnimatedCursor from "react-animated-cursor"
import SmoothScroll from "./components/SmoothScoll";

function App() {
  return (
    <>
      <AnimatedCursor color='142, 118, 83'/>
      {/* <AlertModal /> */}
      {/* <SmoothScroll> */}
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
      {/* </SmoothScroll> */}
    </>
  );
}

export default App;
