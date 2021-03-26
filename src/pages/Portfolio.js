import React from "react";
import Navbar from "../components/Navbar";

const Portfolio = () => {
  return (
    <div>
      <Navbar activeLink="Portfolio" />
      <hr className="mt-5 h-line" />
      <h2 className="indent">Portfolio</h2>
      <hr className="h-line" />
    </div>
  );
};

export default Portfolio;
