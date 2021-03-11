import React from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Text from "./Text";

const Logo = () => {
  return (
    <group>
      <Text position={[0, 5, 0]} scale={[0.1, 0.1, 0.1]} children="DRT" />
    </group>
  );
};

export default Logo;
