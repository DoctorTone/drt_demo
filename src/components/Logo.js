import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import Text from "./Text";

const Logo = (props) => {
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
    <group ref={group}>
      <Text
        position={[0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        color="purple"
        children="DRT"
      />
    </group>
  );
};

export default Logo;
