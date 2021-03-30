import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  const background = {
    background: "url(logo512.png) no-repeat center fixed",
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <Navbar activeLink="Portfolio" />
      <hr className="mt-5 h-line" />
      <h2 className="indent orangeText">Portfolio</h2>
      <hr className="h-line mb-5" />
      <div className="container">
        <p className="mb-5">
          These are a collection of projects that I've worked on over the years.
        </p>
        <div className="row orangeText">
          <div className="col-4 img-overlay">
            <img
              data-aos="fade-in"
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
