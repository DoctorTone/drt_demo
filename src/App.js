import ReactDOM from "react-dom";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CameraControls from "./camera/CameraControls";
import Cubes from "./components/Cubes";
import Model from "./components/DRT-Text";
import Box from "./components/Box";
import Plane from "./components/Plane";
import Button from "@material-ui/core/Button";

const lightPosition = [15, 50, 7];

function App() {
  return (
    <>
      <Button variant="contained" color="primary">
        Hello
      </Button>
      <Canvas
        shadows
        className="w-100 h-100"
        camera={{ position: [11, 32, 40] }}
      >
        <CameraControls />
        <spotLight
          position={lightPosition}
          distance={100}
          angle={0.45}
          intensity={2.0}
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
