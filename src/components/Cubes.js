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

  return <div></div>;
};

export default Cubes;
