import React from "react";
import Navbar from "../components/Navbar";

const Experiments = () => {
  const renderStyle = {
    position: "absolute",
    height: "100vh",
    width: "100%",
    background: "rgb(38, 38, 38)",
  };

  return (
    <div style={renderStyle}>
      <Navbar activeLink="Experiments" />
      <hr className="mt-5 h-line" />
      <h2 className="indent orangeText">Experiments</h2>
      <hr className="h-line mb-5" />
    </div>
  );
};

export default Experiments;
