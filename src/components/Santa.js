import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Santa = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("./SantaModel.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube_Cube002.geometry}
        material={materials["Material.001"]}
        position={[10, 23, 0]}
        scale={2}
      />
    </group>
  );
};

export default Santa;
