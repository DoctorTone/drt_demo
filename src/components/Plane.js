import React, { useRef } from "react";

const Plane = (props) => {
  return (
    <mesh {...props} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry args={[1000, 1000]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
};

export default Plane;
