import React from "react";
import Navbar from "../components/Navbar";

const MedicalViz = () => {
  return (
    <div>
      <Navbar activeLink="Portfolio" />
      <hr className="mt-5 h-line" />
      <h2 className="indent orangeText">Portfolio - Medical Visualisation</h2>
      <hr className="h-line mb-5" />
      <div className="container">
        <p>Medical Viz</p>
      </div>
    </div>
  );
};

export default MedicalViz;
