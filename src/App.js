import ReactDOM from "react-dom";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import CameraControls from "./camera/CameraControls";
import Cubes from "./components/Cubes";
import Logo from "./components/Logo";
import Box from "./components/Box";

function App() {
  return (
    <Canvas className="w-100 h-100" camera={{ position: [11, 32, 35] }}>
      <CameraControls />
      <spotLight
        position={[15, 50, 7]}
        distance={200}
        angle={0.45}
        intensity={2.0}
        penumbra={0.49}
        decay={1}
      />
      <Cubes color={"grey"} />
      <Box position={[50, 50, 7]} />
      <Suspense fallback={null}>
        <Logo />
      </Suspense>
    </Canvas>
  );
}

export default App;
