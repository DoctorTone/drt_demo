import React from "react";

const Info = () => {
  return (
    <div className="container">
      <div className="row">
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
          <p>Contact</p>
        </div>
        <div className="col-4">
          <p>Social</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
