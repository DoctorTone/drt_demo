import ReactDOM from "react-dom";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CameraControls from "./camera/CameraControls";
import Cubes from "./components/Cubes";
import Model from "./components/DRT-Text";
import Box from "./components/Box";
import Plane from "./components/Plane";

function App() {
  return (
    <>
      <Canvas
        shadows
        className="w-100 h-100"
        camera={{ position: [11, 32, 35] }}
      >
        <CameraControls />
        <spotLight
          position={[0, 30, 0]}
          distance={200}
          angle={0.95}
          intensity={2.0}
          penumbra={0.49}
          decay={1}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
          shadow-camera-near={1}
          shadow-camera-far={100}
        />
        <Cubes receiveShadow />
        <Box position={[0, 30, 0]} />
        <Suspense fallback={null}>
          <Model castShadow />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
