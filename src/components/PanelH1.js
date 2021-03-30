import React from "react";

const PanelH1 = ({ displayText, x, y }) => {
  const panelStyle = {
    left: `${x}%`,
    top: `${y}%`,
  };

  return (
    <h1 className="position-absolute" style={panelStyle}>
      {displayText}
    </h1>
  );
};

export default PanelH1;
