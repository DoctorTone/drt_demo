import React from "react";
import { useLoader } from "react-three-fiber";
import { CubeTextureLoader } from "three";

const Sky = () => {
  const path = "textures/pisa/";
  const format = ".png";
  const urls = [
    path + "px" + format,
    path + "nx" + format,
    path + "py" + format,
    path + "ny" + format,
    path + "pz" + format,
    path + "nz" + format,
  ];
  const skyTexture = useLoader(CubeTextureLoader, urls);
  return <div></div>;
};

export default Sky;
