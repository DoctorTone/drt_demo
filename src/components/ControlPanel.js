import React from "react";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";
import useStore from "../state/store";

const ControlPanel = () => {
  const panelStyle = {
    position: "absolute",
    top: "5%",
    left: "5%",
    width: "25%",
    zIndex: "1",
  };

  const { setLightPosition } = useStore();
  const { lightPosition } = useStore();

  const updateLightPosX = (event, newValue) => {
    console.log("Value = ", newValue);
    setLightPosition([newValue, lightPosition[1], lightPosition[2]]);
  };

  return (
    <div style={panelStyle}>
      <p>Position</p>
      <Slider onChange={updateLightPosX} defaultValue={15} min={-50} max={50} />
    </div>
  );
};

export default ControlPanel;
