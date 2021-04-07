import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import AbsoluteWrapper from "../components/AbsoluteWrapper";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  const background = {
    background: "url(logo512.png) no-repeat center fixed",
  };

  const renderStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
  };

  const imgStyle = {
    border: "white solid 1px",
  };

  const changeOpacity = (e) => {
    console.log(`Mouse in target = ${e.target}`);
    e.target.style.opacity = "0.3";
  };

  const resetOpacity = (e) => {
    console.log(`Mouse out target=${e.target}`);
    e.target.style.opacity = "1.0";
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div style={renderStyle}>
      <Navbar activeLink="Portfolio" />
      <hr className="mt-5 h-line" />
      <h2 className="indent orangeText">Portfolio</h2>
      <hr className="h-line mb-5" />
      <div className="container">
        <div className="row orangeText text-center mb-5">
          <div className="col-6">
            <Link className="link-image" to="/portfolio/medical">
              <img
                data-aos="fade-up"
                className="img-fluid rounded-lg"
                src="volumeRender.jpg"
                alt=""
              />
              <div className="img-text-overlay">
                <h4>Medical Visualisation</h4>
              </div>
            </Link>
          </div>
          <div className="col-6 img-overlay">
            <img
              data-aos="fade-up"
              className="img-fluid rounded-lg"
              src="FTSEViz.jpg"
              alt=""
            />
            <div className="img-text-overlay">
              <h4>3D Data Visualisation</h4>
            </div>
          </div>
        </div>

        <div className="row orangeText text-center mb-5">
          <div className="col-6 img-overlay">
            <img
              data-aos="fade-up"
              className="img-fluid rounded"
              src="sleepData.jpg"
              alt=""
            />
            <div className="img-text-overlay">
              <h4>Sleep Visualisation</h4>
            </div>
          </div>
          <div className="col-6 img-overlay">
            <img
              data-aos="fade-up"
              className="img-fluid rounded-lg"
              src="NEON.jpg"
              alt=""
            />
            <div className="img-text-overlay">
              <h4>Clinical Trials</h4>
            </div>
          </div>
        </div>

        <div className="row orangeText text-center mb-5">
          <div className="col-6 img-overlay">
            <img
              data-aos="fade-up"
              className="img-fluid rounded-lg"
              src="dnaVisualisation.jpg"
              alt=""
            />
            <div className="img-text-overlay">
              <h4>Scientific Visualisation</h4>
            </div>
          </div>
          <div className="col-6 img-overlay">
            <img
              data-aos="fade-up"
              className="img-fluid rounded-lg"
              src="fireSafety.jpg"
              alt=""
            />
            <div className="img-text-overlay">
              <h4>Safety Simulation</h4>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-5 h-line" />
      <p>Company info here</p>
    </div>
  );
};

export default Portfolio;
