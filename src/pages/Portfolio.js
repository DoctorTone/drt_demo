import React from "react";
import Navbar from "../components/Navbar";
import Bounce from "react-reveal/Bounce";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";

const Portfolio = () => {
  return (
    <div>
      <Navbar activeLink="Portfolio" />
      <hr className="mt-5 h-line" />
      <h2 className="indent">Portfolio</h2>
      <hr className="h-line mb-5" />
      <div className="container">
        <div className="row">
          <div className="col-4 img-overlay">
            <Zoom>
              <img
                className="img-fluid rounded-lg"
                src="volumeRender.jpg"
                alt=""
              />
            </Zoom>
            <div className="img-text-overlay">
              <h4>Medical Visualisation</h4>
            </div>
          </div>
          <div className="col-4">
            <Zoom>
              <img className="img-fluid rounded" src="FTSEViz.jpg" alt="" />
            </Zoom>
          </div>
          <div className="col-4">
            <Zoom>
              <img className="img-fluid rounded" src="pandemic.jpg" alt="" />
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
