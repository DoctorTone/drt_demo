import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { Points, Point } from "@react-three/drei/core/Points";
import useStore from "../state/store";

const Snow = () => {
  const snowFlake = useTexture("./snowFlake.png");
  const points = useRef();
  const { SNOWFLAKES, snowHeight } = useStore();

  const flakePositions = new Array(SNOWFLAKES)
    .fill(undefined)
    .map((elem, i) => {
      const flakePos = new THREE.Vector3();
      flakePos.x = Math.random() * 20 - 10;
      flakePos.y = Math.random() * snowHeight;
      flakePos.z = Math.random() * 50 - 10;

      return flakePos;
    });

  useFrame((state) => {
    points.current.children.forEach((point) => {
      point.position.y -= 0.1;
      if (point.position.y < 0) {
        point.position.y = snowHeight;
      }
    });
  });

  return (
    <Points ref={points}>
      <pointsMaterial
        size={2}
        map={snowFlake}
        blending={THREE.AdditiveBlending}
        depthTest={false}
        transparent={true}
      />
      {flakePositions.map((pos) => (
        <Point position={pos} />
      ))}
    </Points>
  );
};

export default Snow;
