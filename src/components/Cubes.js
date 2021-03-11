import React from "react";
import * as THREE from "three";
import { SCENE } from "../config/sceneAttributes";

const Cubes = (props) => {
  const boxGeometries = [];
  const boxPositions = [];

  for (let j = 0; j < SCENE.NUM_ROWS_Z; ++j) {
    for (let i = 0; i < SCENE.NUM_ROWS_X; ++i) {
      boxGeometries.push(
        new THREE.BoxBufferGeometry(
          SCENE.BOX_SIZE,
          SCENE.BOX_SIZE,
          SCENE.BOX_SIZE
        )
      );
      boxPositions.push(
        new THREE.Vector3(
          SCENE.X_START + i * SCENE.ROW_INC_X,
          0,
          SCENE.Z_START + j * SCENE.ROW_INC_Z
        )
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
