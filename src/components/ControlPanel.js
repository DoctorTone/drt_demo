import React from "react";
import Slider from "@material-ui/core/Slider";

const ControlPanel = () => {
  const panelStyle = {
    position: "absolute",
    top: "1%",
    left: "5%",
    width: "50%",
    zIndex: "1",
  };

  return (
    <div style={panelStyle}>
      <Slider />
    </div>
  );
};

export default ControlPanel;
