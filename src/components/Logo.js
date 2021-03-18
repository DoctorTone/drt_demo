import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Logo = (props) => {
  const logo = useLoader(GLTFLoader, "DRT-Text.glb");
  const group = useRef();
  const [animating, setAnimating] = useState(true);

  useFrame((state) => {
    if (animating) {
      group.current.position.y += 0.1;
      group.current.rotation.y += 0.05;
      setAnimating(group.current.position.y < 20);
    }
  });

  return (
    <group ref={group} position={[0, 0, 30]}>
      <primitive object={logo.scene} />
    </group>
  );
};

export default Logo;
