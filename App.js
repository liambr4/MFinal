import React from "react";
import Navbar from "./components/navbar.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Searchbar from "./components/searchbar.component";
import leftBanner from "./images/rightAdBanner.png";
import rightBanner from "./images/leftAdBanner.png";
import bottomBanner from "./images/bottomAdBanner.png";
function App() {
  return (
    <Router>
      <div className="d-flex">
        <div style={{ width: "10%" }}>
          <img style={{ width: "100%" }} src={leftBanner}></img>
        </div>
        <div className="container">
          <div>
            <Navbar />
            <br />
            <Route path="/" component={Searchbar} />
          </div>
        </div>
        <div style={{ width: "10%" }}>
          <img style={{ width: "100%" }} src={rightBanner}></img>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <img style={{ width: "100%" }} src={bottomBanner}></img>
      </div>
    </Router>
  );
}

export default App;
