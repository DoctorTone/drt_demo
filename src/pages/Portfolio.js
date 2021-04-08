import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import AbsoluteWrapper from "../components/AbsoluteWrapper";
import AOS from "aos";
import "aos/dist/aos.css";
import Info from "../components/Info";
import Footer from "../components/Footer";

const Portfolio = () => {
  const background = {
    background: "url(logo512.png) no-repeat center fixed",
  };

  const renderStyleBackground = {
    position: "absolute",
    height: "250vh",
    width: "100%",
    background: "black",
    backgroundImage: 'url("night.jpg")',
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
  };

  const renderStyle = {
    position: "absolute",
    height: "100vh",
    width: "100%",
    background: "rgb(38, 38, 38)",
  };

  const imgStyle = {
    border: "white solid 1px",
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div style={renderStyle}>
      <Navbar activeLink="Portfolio" />
      <div id="portfolio" className="container">
        <hr className="mt-5 h-line" />
        <h2 className="orangeText display-4">Portfolio</h2>
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
              <Link className="link-image" to="/portfolio/dataViz">
                <img
                  data-aos="fade-up"
                  className="img-fluid rounded-lg"
                  src="FTSEViz.jpg"
                  alt=""
                />
                <div className="img-text-overlay">
                  <h4>3D Data Visualisation</h4>
                </div>
              </Link>
            </div>
          </div>

          <div className="row orangeText text-center mb-5">
            <div className="col-6">
              <Link className="link-image" to="/portfolio/sleepData">
                <img
                  data-aos="fade-up"
                  className="img-fluid rounded"
                  src="sleepData.jpg"
                  alt=""
                />
                <div className="img-text-overlay">
                  <h4>Sleep Visualisation</h4>
                </div>
              </Link>
            </div>
            <div className="col-6">
              <Link className="link-image" to="/portfolio/neon">
                <img
                  data-aos="fade-up"
                  className="img-fluid rounded-lg"
                  src="NEON.png"
                  alt=""
                />
                <div className="img-text-overlay">
                  <h4>Clinical Trials</h4>
                </div>
              </Link>
            </div>
          </div>

          <div className="row orangeText text-center mb-5">
            <div className="col-6">
              <Link className="link-image" to="/portfolio/neon">
                <img
                  data-aos="fade-up"
                  className="img-fluid rounded-lg"
                  src="dnaVisualisation.jpg"
                  alt=""
                />
                <div className="img-text-overlay">
                  <h4>Scientific Visualisation</h4>
                </div>
              </Link>
            </div>
            <div className="col-6">
              <Link className="link-image" to="/portfolio/safety">
                <img
                  data-aos="fade-up"
                  className="img-fluid rounded-lg"
                  src="fireSafety.jpg"
                  alt=""
                />
                <div className="img-text-overlay">
                  <h4>Safety Simulation</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <hr className="mt-5 h-line" />
        <Info />
        <hr className="mt-5 h-line" />
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
