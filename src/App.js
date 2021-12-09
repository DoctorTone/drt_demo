import ReactDOM from "react-dom";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Cubes from "./components/Cubes";
import Model from "./components/DRT-Text";
import Santa from "./components/Santa";
import Snow from "./components/Snow";
import Box from "./components/Box";
import { OrbitControls } from "@react-three/drei";
import ControlPanel from "./components/ControlPanel";
import useStore from "./state/store";

function App() {
  const { lightPosition, lightAngle, lightIntensity, shadowsEnabled } =
    useStore();

  return (
    <>
      <ControlPanel />
      <Canvas
        shadows
        className="w-100 h-100"
        camera={{ position: [11, 32, 40] }}>
        <spotLight
          position={lightPosition}
          distance={100}
          angle={lightAngle}
          intensity={lightIntensity}
          penumbra={1}
          decay={1}
          castShadow={shadowsEnabled}
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
          shadow-camera-near={1}
          shadow-camera-far={100}
        />
        <Cubes receiveShadow />
        <Box position={lightPosition} />
        <Suspense fallback={null}>
          <Model castShadow />
          <Santa />
          <Snow />
        </Suspense>
        <OrbitControls target={[-45, 5, -5]} />
      </Canvas>
    </>
  );
}

export default App;
