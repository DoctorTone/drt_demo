import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ activeLink }) => {
  let linkStatePortfolio = "nav-link";
  let linkStateExperiments = "nav-link";
  let linkStateContact = "nav-link";
  let linkStateAbout = "nav-link";

  switch (activeLink) {
    case "Portfolio":
      linkStatePortfolio += " active";
      break;

    case "Experiments":
      linkStateExperiments += " active";
      break;

    case "Contact":
      linkStateContact += " active";
      break;

    case "About":
      linkStateAbout += " active";
      break;

    default:
      break;
  }

  const activePortfolio = "nav-link active";
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" aria-current="page" to="/">
              Home
            </Link>
            <Link className={`${linkStatePortfolio}`} to="/portfolio">
              Portfolio
            </Link>
            <Link className={`${linkStateExperiments}`} to="/experiments">
              Experiments
            </Link>
            <Link className={`${linkStateContact}`} to="/contact">
              Contact
            </Link>
            <Link className={`${linkStateAbout}`} to="/about">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
