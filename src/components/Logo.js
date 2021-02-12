import React from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Logo = () => {
  const logo = useLoader(GLTFLoader, "barrel.gltf");
  // DEBUG
  console.log("Model loaded = ", logo);

  return <primitive object={logo.scene} />;
};

export default Logo;
