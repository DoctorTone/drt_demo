import React, { useRef, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useStore from "../state/store";

const Santa = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("./santa.glb");
  const santaTex = useTexture("./SantaTex.png");
  santaTex.flipY = false;
  const [animating, setAnimating] = useState(true);
  const { santaHeight, santaSpeed, animationDelay } = useStore();

  useFrame((state) => {
    if (animating && state.clock.elapsedTime >= animationDelay) {
      group.current.position.y -= santaSpeed;
      if (group.current.position.y <= santaHeight) {
        setAnimating(false);
      }
    }
  });

  return (
    <group ref={group} {...props} dispose={null} position={[10, 50, 0]}>
      <mesh geometry={nodes.Cube_Cube002.geometry}>
        <meshStandardMaterial map={santaTex} />
      </mesh>
    </group>
  );
};

export default Santa;
