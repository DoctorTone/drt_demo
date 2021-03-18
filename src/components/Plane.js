import React, { useRef } from "react";
import { SCENE } from "../config/sceneAttributes";

const Plane = (props) => {
  return (
    <mesh {...props} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry args={[SCENE.PLANE_SIZE_X, SCENE.PLANE_SIZE_Y]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
};

export default Plane;
