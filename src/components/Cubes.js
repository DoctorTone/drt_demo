import React from "react";
import * as THREE from "three";

const NUM_CUBES_X = 2;
const NUM_CUBES_Z = 2;
const ROW_INC = 15;

const Cubes = (props) => {
  const boxGeometries = [];
  const boxPositions = [];
  for (let i = 0, numRows = NUM_CUBES_X; i < numRows; ++i) {
    boxGeometries.push(new THREE.BoxBufferGeometry(10, 10, 10));
    boxPositions.push(new THREE.Vector3(i * ROW_INC, 0, 0));
  }

  return (
    <group {...props}>
      {boxGeometries.map((geom, index) => (
        <mesh key={geom.uuid} geometry={geom} position={boxPositions[index]}>
          <meshLambertMaterial color={"yellow"} />
        </mesh>
      ))}
    </group>
  );
};

export default Cubes;
