import React from "react";
import { Button } from "@material-ui/core";

const ControlPanel = () => {
  const panelStyle = {
    position: "absolute",
    top: "0",
    left: "5%",
    width: "50%",
  };

  return (
    <div style={panelStyle}>
      <Button color="primary">Hello</Button>
    </div>
  );
};

export default ControlPanel;
