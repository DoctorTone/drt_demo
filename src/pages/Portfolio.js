import React from "react";
import Navbar from "../components/Navbar";
import { useSpring, animated } from "react-spring";

const Portfolio = () => {
  const props = useSpring({ scale: 1, from: { scale: 0 } });

  return (
    <div>
      <Navbar activeLink="Portfolio" />
      <hr className="mt-5 h-line" />
      <h2 className="indent">Portfolio</h2>
      <hr className="h-line mb-5" />
      <div className="container">
        <div className="row">
          <div className="col-4 img-overlay">
            <animated.img
              style={props}
              className="img-fluid rounded-lg"
              src="volumeRender.jpg"
              alt=""
            />
            <div className="img-text-overlay">
              <h4>Medical Visualisation</h4>
            </div>
          </div>
          <div className="col-4 img-overlay">
            <img className="img-fluid rounded-lg" src="FTSEViz.jpg" alt="" />
            <div className="img-text-overlay">
              <h4>3D Data Visualisation</h4>
            </div>
          </div>
          <div className="col-4">
            <img className="img-fluid rounded" src="pandemic.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
