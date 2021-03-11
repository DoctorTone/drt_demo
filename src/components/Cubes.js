import React from "react";
import * as THREE from "three";
import { SCENE } from "../config/sceneAttributes";

const NUM_ROWS_X = 5;
const NUM_ROWS_Z = 5;
const ROW_INC_X = 15;
const ROW_INC_Z = 15;
const X_START = -30;
const Z_START = -30;

const Cubes = (props) => {
  const boxGeometries = [];
  const boxPositions = [];

  for (let j = 0; j < NUM_ROWS_Z; ++j) {
    for (let i = 0; i < SCENE.NUM_ROWS_X; ++i) {
      boxGeometries.push(new THREE.BoxBufferGeometry(10, 10, 10));
      boxPositions.push(
        new THREE.Vector3(X_START + i * ROW_INC_X, 0, Z_START + j * ROW_INC_Z)
      );
    }
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
