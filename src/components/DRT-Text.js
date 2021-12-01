import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const revSpeed = (2 * Math.PI) / 3;

const Model = (props) => {
  const group = useRef();
  const animationTime = useRef(0);
  const [animating, setAnimating] = useState(true);
  const { nodes, materials } = useGLTF("./DRT-Text.gltf");

  useFrame((state, delta) => {
    if (animating) {
      group.current.position.y += 10 * delta;
      if (group.current.position.y < 0) {
        group.current.position.y = 0;
        group.current.rotation.y = 0;
      }
      animationTime.current += delta;
      if (animationTime.current < 0) {
        animationTime.current = 0;
        group.current.position.y = 0;
        group.current.rotation.y = 0;
      }
      group.current.rotation.y += revSpeed * delta;
      setAnimating(animationTime.current < 3);
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        {...props}
        geometry={nodes.DRT001.geometry}
        material={materials.Orange}
        position={[-10, -17, 0]}
        scale={[10, 10, 10]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

useGLTF.preload("/DRT-Text.gltf");

export default Model;
