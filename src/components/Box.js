import React from "react";

const Box = ({ position }) => {
  return (
    <mesh position={position}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={"hotpink"} />
    </mesh>
  );
};

export default Box;
