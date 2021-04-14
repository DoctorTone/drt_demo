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
    //console.log("Value = ", newValue);
    setLightPosition([newValue, lightPosition[1], lightPosition[2]]);
  };

  const updateLightPosY = (event, newValue) => {
    //console.log("Value = ", newValue);
    setLightPosition([lightPosition[0], newValue, lightPosition[2]]);
  };

  const updateLightPosZ = (event, newValue) => {
    //console.log("Value = ", newValue);
    setLightPosition([lightPosition[0], lightPosition[1], newValue]);
  };

  return (
    <div style={panelStyle}>
      <p>Position</p>
      <Slider
        onChange={updateLightPosX}
        defaultValue={lightPosition[0]}
        min={-50}
        max={50}
      />
      <Slider
        onChange={updateLightPosY}
        defaultValue={lightPosition[1]}
        min={0}
        max={50}
      />
      <Slider
        onChange={updateLightPosZ}
        defaultValue={lightPosition[2]}
        min={-50}
        max={50}
      />
    </div>
  );
};

export default ControlPanel;
