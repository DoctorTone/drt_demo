import ReactDOM from "react-dom";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CameraControls from "./camera/CameraControls";
import Cubes from "./components/Cubes";
import Model from "./components/DRT-Text";
import Box from "./components/Box";
import Plane from "./components/Plane";
import ControlPanel from "./components/ControlPanel";
import useStore from "./state/store";

function App() {
  const { lightPosition, lightAngle, lightIntensity } = useStore();

  return (
    <>
      <ControlPanel />
      <Canvas
        shadows
        className="w-100 h-100"
        camera={{ position: [11, 32, 40] }}
      >
        <CameraControls />
        <spotLight
          position={lightPosition}
          distance={100}
          angle={lightAngle}
          intensity={lightIntensity}
          penumbra={1}
          decay={1}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
          shadow-camera-near={1}
          shadow-camera-far={100}
        />
        <Cubes receiveShadow />
        <Box position={lightPosition} />
        <Suspense fallback={null}>
          <Model castShadow />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
