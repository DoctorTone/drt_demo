import React from "react";
import * as THREE from "three";

const NUM_CUBES_X = 2;
const NUM_CUBES_Z = 2;

const Cubes = () => {
  const boxGeometries = [];
  for (
    let box = 0, numBoxes = NUM_CUBES_X * NUM_CUBES_Z;
    box < numBoxes;
    ++box
  ) {
    boxGeometries.push(new THREE.BoxBufferGeometry(10, 10, 10));
  }

  return (
    <group>
      {boxGeometries.map((geom) => {
        <mesh key={geom.uuid} position={[10, 1, 0]}>
          <meshStandardMaterial color={"yellow"} />
        </mesh>;
      })}
    </group>
  );
};

export default Cubes;
