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

  const setLightPos = useStore((state) => state.setLightPos);

  return (
    <div style={panelStyle}>
      <p>Position</p>
      <input
        type="range"
        onChange={(event) => setLightPos(event.target.value)}
        defaultValue={0}
        min={-50}
        max={50}
      />
    </div>
  );
};

export default ControlPanel;
