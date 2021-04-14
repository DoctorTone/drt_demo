import React from "react";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";

const ControlPanel = () => {
  const panelStyle = {
    position: "absolute",
    top: "5%",
    left: "5%",
    width: "25%",
    zIndex: "1",
  };

  const PosSlider = withStyles({
    root: {
      color: "white",
    },
  })(Slider);

  return (
    <div style={panelStyle}>
      <PosSlider defaultValue={0} min={0} max={100} />
    </div>
  );
};

export default ControlPanel;
