import React from "react";

const Panel = ({ displayText, x, y }) => {
  const panelStyle = {
    left: `${x}%`,
    top: `${y}%`,
    background: "goldenrod",
    borderRadius: "7px",
  };

  return (
    <p className="position-absolute p-2" style={panelStyle}>
      {displayText}
    </p>
  );
};

export default Panel;
