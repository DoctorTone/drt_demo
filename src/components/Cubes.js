import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";
import { BoxBufferGeometry } from "three";
import { SCENE } from "../config/sceneAttributes";

const Cubes = ({ color }) => {
  const boxGeometries = [];
  const boxPositions = [];
  const count = SCENE.NUM_ROWS_Z * SCENE.NUM_ROWS_Z;

  const [dummy] = useState(() => new THREE.Object3D());

  const group = useRef();
  const mesh = useRef();

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

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Set positions of instanced meshes
    let index;
    for (let i = 0; i < SCENE.NUM_ROWS_Z; ++i) {
      for (let j = 0; j < SCENE.NUM_ROWS_X; ++j) {
        index = j + i * SCENE.NUM_ROWS_X;
        boxPositions[index].y = SCENE.WAVE_AMP * Math.sin(2 * time + i / 3);
        dummy.position.copy(boxPositions[index]);
        dummy.updateMatrix();
        mesh.current.setMatrixAt(index, dummy.matrix);
      }
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group ref={group} rotation={[0, Math.PI / 2, 0]}>
      <instancedMesh ref={mesh} args={[null, null, count]} receiveShadow>
        <cylinderBufferGeometry
          args={[SCENE.RADIUS, SCENE.RADIUS, SCENE.HEIGHT, SCENE.SEGMENTS]}
        />
        <meshLambertMaterial color={color} />
      </instancedMesh>
    </group>
  );
};

export default Cubes;
