import React from "react";

const Panel = ({ displayText, position }) => {
  const panelStyle = {
    left: `${position[0]}%`,
    top: `${position[1]}%`,
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
