import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

let delta;
let elapsed;
let lastElapsed = 0;
const revSpeed = (2 * Math.PI) / 3;

const Logo = (props) => {
  const logo = useLoader(GLTFLoader, "DRT-Text.gltf");
  const group = useRef();
  const [animating, setAnimating] = useState(true);
  const [animationTime, setAnimationTime] = useState(0);
  let delta;
  let elapsed;
  //let lastElapsed = 0;

  useFrame((state) => {
    elapsed = state.clock.getElapsedTime();
    delta = elapsed - lastElapsed;
    // DEBUG
    //console.log(`delta top = ${delta}`);
    lastElapsed = elapsed;

    if (animating) {
      group.current.position.y += 10 * delta;
      if (group.current.position.y < 0) {
        group.current.position.y = 0;
        group.current.rotation.y = 0;
      }
      // DEBUG
      //console.log(`time = ${animationTime}`);
      setAnimationTime(animationTime + delta);
      if (animationTime < 0) {
        setAnimationTime(0);
        group.current.position.y = 0;
        group.current.rotation.y = 0;
      }
      // DEBUG
      //console.log(`animation time = ${animationTime}`);
      group.current.rotation.y += revSpeed * delta;
      setAnimating(animationTime < 3);
    }
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      <primitive
        object={logo.scene}
        position={[0, -15, 0]}
        scale={[10, 10, 10]}
      />
    </group>
  );
};

export default Logo;
