import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { BoxBufferGeometry } from "three";
import { SCENE } from "../config/sceneAttributes";

const Cubes = ({ color, ...props }) => {
  const count = SCENE.NUM_ROWS_X * SCENE.NUM_ROWS_Z;

  const dummy = new THREE.Object3D();

  const group = useRef();
  const mesh = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Set positions of instanced meshes
    for (let i = 0; i < SCENE.NUM_ROWS_Z; ++i) {
      for (let j = 0; j < SCENE.NUM_ROWS_X; ++j) {
        dummy.position.set(
          SCENE.X_START + i * SCENE.ROW_INC_X,
          SCENE.WAVE_AMP * Math.sin(2 * time + i / 3),
          SCENE.Z_START + j * SCENE.ROW_INC_Z
        );
        dummy.updateMatrix();
        mesh.current.setMatrixAt(i + j * SCENE.NUM_ROWS_X, dummy.matrix);
      }
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group ref={group} {...props}>
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
