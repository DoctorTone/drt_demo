import React from "react";

const Panel = ({ displayText, x, y }) => {
  const panelStyle = {
    left: `${x}%`,
    top: `${y}%`,
  };
  return (
    <p className="position-absolute" style={panelStyle}>
      {displayText}
    </p>
  );
};

export default Panel;
