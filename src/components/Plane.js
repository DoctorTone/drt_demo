import React, { useRef } from "react";

const Plane = (props) => {
  return (
    <mesh {...props} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry args={[500, 500]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
};

export default Plane;
