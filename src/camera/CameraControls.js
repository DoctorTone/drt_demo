import React, { useRef } from "react";
import { useThree, useFrame, extend } from "react-three-fiber";

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controls = useRef();
  useFrame(() => {
    // DEBUG
    //console.log("Cam = ", controls.current.target);
    return controls.current.update();
  });

  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={true}
      target={[-45, 5, -5]}
    />
  );
};

export default CameraControls;
