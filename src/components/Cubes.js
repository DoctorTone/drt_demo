import React from "react";
import * as THREE from "three";

const NUM_CUBES_X = 2;
const NUM_CUBES_Z = 2;

const Cubes = (props) => {
  const boxGeometries = [];
  for (
    let box = 0, numBoxes = NUM_CUBES_X * NUM_CUBES_Z;
    box < numBoxes;
    ++box
  ) {
    boxGeometries.push(new THREE.BoxBufferGeometry(20, 10, 10));
  }

  return (
    <group {...props}>
      {boxGeometries.map((geom) => (
        <mesh key={geom.uuid} geometry={geom} position={[0, 0, 0]}>
          <meshLambertMaterial color={"yellow"} />
        </mesh>
      ))}
    </group>
  );
};

export default Cubes;
