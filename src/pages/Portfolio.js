import React from "react";
import Navbar from "../components/Navbar";

const Portfolio = () => {
  return (
    <div>
      <Navbar activeLink="Portfolio" />
      <hr className="mt-5 h-line" />
      <h2 className="indent">Portfolio</h2>
      <hr className="h-line" />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img className="img-fluid rounded" src="volumeRender.jpg" alt="" />
          </div>
          <div className="col-4">
            <img className="img-fluid rounded" src="FTSEViz.jpg" alt="" />
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
