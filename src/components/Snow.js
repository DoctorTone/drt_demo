import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { Points, Point } from "@react-three/drei/core/Points";

const Snow = () => {
  const snowFlake = useTexture("./snowFlake.png");
  const points = useRef();
  const flakePositions = [];
  flakePositions.push([0, 30, 0]);
  flakePositions.push([10, 30, 0]);
  flakePositions.push([0, 30, 10]);
  flakePositions.push([10, 30, 10]);
  flakePositions.push([0, 30, 20]);
  flakePositions.push([10, 30, 20]);
  flakePositions.push([0, 30, 30]);
  flakePositions.push([10, 30, 30]);
  flakePositions.push([0, 30, 40]);
  flakePositions.push([10, 30, 40]);

  useFrame((state) => {
    points.current.children.forEach((point) => {
      point.position.y -= 0.1;
      if (point.position.y < 0) {
        point.position.y = 30;
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
