import React from "react";
import { useLoader, useThree } from "react-three-fiber";
import { CubeTextureLoader } from "three";

const Sky = () => {
  const path = "textures/pisa/";
  const format = ".png";

  const { scene } = useThree();

  const loader = new CubeTextureLoader();
  const skyTexture = loader.load([
    path + "px" + format,
    path + "nx" + format,
    path + "py" + format,
    path + "ny" + format,
    path + "pz" + format,
    path + "nz" + format,
  ]);

  scene.background = skyTexture;
  return null;
};

export default Sky;
