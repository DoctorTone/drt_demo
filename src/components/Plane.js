import React, { useRef } from "react";

const Plane = (props) => {
  return (
    <mesh {...props} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry args={[300, 200]} />
      <meshStandardMaterial color={"grey"} />
    </mesh>
  );
};

export default Plane;
