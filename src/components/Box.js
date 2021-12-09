import React from "react";

const Box = ({ position }) => {
  return (
    <mesh position={position}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
};

export default Box;
