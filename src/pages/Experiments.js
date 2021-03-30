import React from "react";
import Navbar from "../components/Navbar";

const Experiments = () => {
  return (
    <div>
      <Navbar activeLink="Experiments" />
      <hr className="mt-5 h-line" />
      <h2 className="indent">Experiments</h2>
      <hr className="h-line mb-5" />
    </div>
  );
};

export default Experiments;
