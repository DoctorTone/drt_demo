import React from "react";
import Navbar from "../components/Navbar";

const MedicalViz = () => {
  return (
    <div>
      <Navbar activeLink="Portfolio" />
      <hr className="mt-5 h-line" />
      <h2 className="indent orangeText display-4">
        Portfolio - <span className="display-6">Medical Viz</span>
      </h2>
      <hr className="h-line mb-5" />
      <div className="container">
        <div className="row">
          <div className="col-4 offset-4">
            <img
              className="img-fluid rounded-lg"
              src="../volumeRender.jpg"
              alt=""
            />
          </div>
          <p>
            This application takes a number of medical images and creates a
            volume that can then be manipulated more easily (often referred to
            as volume rendering).
          </p>
        </div>
      </div>
    </div>
  );
};

export default MedicalViz;
