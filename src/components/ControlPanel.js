import React from "react";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import useStore from "../state/store";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const ControlPanel = () => {
  const panelStyle = {
    position: "absolute",
    top: "1%",
    left: "3%",
    width: "25%",
    zIndex: "1",
  };

  const { setLightPosition, lightPosition } = useStore();
  const { setLightAngle, lightAngle } = useStore();
  const { setLightIntensity, lightIntensity } = useStore();
  const { setShadows, shadowsEnabled } = useStore();

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

  const updateLightAngle = (event, newValue) => {
    setLightAngle(newValue);
  };

  const updateLightIntensity = (event, newValue) => {
    setLightIntensity(newValue);
  };

  const toggleShadows = (event) => {
    //console.log("Shadows = ", event.target.checked);
    setShadows(event.target.checked);
  };

  const PurpleSwitch = withStyles({
    switchBase: {
      color: orange[300],
      "&$checked": {
        color: orange[500],
      },
      "&$checked + $track": {
        backgroundColor: orange[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  return (
    <div style={panelStyle}>
      <p className="noBottom">Light Position</p>
      <span>X</span>
      <Slider
        onChange={updateLightPosX}
        defaultValue={lightPosition[0]}
        min={-50}
        max={50}
        valueLabelDisplay="auto"
      />
      <span>Y</span>
      <Slider
        onChange={updateLightPosY}
        defaultValue={lightPosition[1]}
        min={0}
        max={50}
        valueLabelDisplay="auto"
      />
      <span>Z</span>
      <Slider
        onChange={updateLightPosZ}
        defaultValue={lightPosition[2]}
        min={-50}
        max={50}
        valueLabelDisplay="auto"
      />
      <p className="noBottom">Angle</p>
      <Slider
        onChange={updateLightAngle}
        defaultValue={lightAngle}
        min={0}
        max={1}
        step={0.1}
        valueLabelDisplay="auto"
      />
      <p className="noBottom">Intensity</p>
      <Slider
        onChange={updateLightIntensity}
        defaultValue={lightIntensity}
        min={0}
        max={2}
        step={0.1}
        valueLabelDisplay="auto"
      />
      <FormControlLabel
        control={
          <PurpleSwitch checked={shadowsEnabled} onChange={toggleShadows} />
        }
        label="Shadows"
      />
    </div>
  );
};

export default ControlPanel;
