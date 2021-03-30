import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  const background = {
    background: "url(logo512.png) no-repeat center fixed",
  };

  const changeOpacity = (e) => {
    e.target.style.opacity = "0.3";
  };

  const resetOpacity = (e) => {
    e.target.style.opacity = "1.0";
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <Navbar activeLink="Portfolio" />
      <hr className="mt-5 h-line" />
      <h2 className="indent orangeText">Portfolio</h2>
      <hr className="h-line mb-5" />
      <div className="container">
        <div className="row orangeText mb-5">
          <div
            className="col-4 img-overlay"
            onMouseEnter={changeOpacity}
            onMouseLeave={resetOpacity}
          >
            <img
              data-aos="fade-up"
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
          <div className="col-4 text-center img-overlay">
            <img className="img-fluid rounded" src="NEON Logo.png" alt="" />
            <div className="img-text-overlay">
              <h4>Medical Trials</h4>
            </div>
          </div>
        </div>

        <div className="row orangeText">
          <div className="col-4 img-overlay">
            <img
              data-aos="fade-up"
              className="img-fluid rounded-lg"
              src="sleepData.jpg"
              alt=""
            />
            <div className="img-text-overlay">
              <h4>Sleep Visualisation</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
