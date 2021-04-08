import React from "react";

const Info = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-4">
          <p className="orangeText">Location</p>
          <p>
            1 Highfield Drive
            <br />
            Nuthall
            <br />
            Nottingham
            <br />
            NG16 1AD
          </p>
        </div>
        <div className="col-4">
          <p className="orangeText">Contact</p>
          <p>
            <a href="mailto:enquiries@drt-software.com?subject=Project enquiry">
              enquiries@drt-software.com
            </a>
          </p>
          <p>0115 8440840</p>
        </div>
        <div className="col-3">
          <p className="orangeText">Social</p>
          <p>
            <a
              href="https://www.linkedin.com/in/tony-glover-4081694/"
              target="_blank"
            >
              <i className="fab fa-linkedin fa-2x mr-3"></i>
            </a>
            <a href="https://twitter.com/DrtSoftware" target="_blank">
              <i className="fab fa-twitter fa-2x mr-3"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCNYHLpd8oKLoE2xw49ZX1nQ?"
              target="_blank"
            >
              <i className="fab fa-youtube fa-2x"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
