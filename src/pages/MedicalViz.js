import React from "react";
import Navbar from "../components/Navbar";
import Info from "../components/Info";
import Footer from "../components/Footer";

const MedicalViz = () => {
  return (
    <div>
      <Navbar activeLink="Portfolio" />
      <hr className="mt-5 h-line" />
      <h2 className="indent orangeText display-4">
        Portfolio - <span className="display-6">Medical Visualisation</span>
      </h2>
      <hr className="h-line mb-5" />
      <div className="container">
        <div className="row">
          <div className="col-4 offset-4 mb-3">
            <img
              className="img-fluid rounded-lg"
              src="../volumeRender.jpg"
              alt=""
            />
          </div>
          <div>
            <p className="display-6 text-center">Description</p>
            <p>
              This application takes a number of medical images and creates a
              volume that can then be manipulated more easily (often referred to
              as volume rendering).
            </p>
          </div>
          <div className="mx-auto">
            <a
              href="https://www.drt-software.com/MedicalViz/medicalViz.html"
              className="btn btn-primary mr-3"
              target="_blank"
            >
              Launch demo
            </a>
            <a
              href="https://www.youtube.com/watch?v=MoKVrdJoqAM"
              className="btn btn-warning"
              target="_blank"
            >
              Watch video
            </a>
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

export default MedicalViz;
