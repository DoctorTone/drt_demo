import ReactDOM from "react-dom";
import React from "react-dom";
import { Canvas } from "react-three-fiber";
import CameraControls from "./camera/CameraControls";
import Plane from "./components/Plane";
import Cubes from "./components/Cubes";
import Logo from "./components/Logo";
import Sky from "./components/Sky";
import { Suspense } from "react";

function App() {
  const SCALE = 1;

  return (
    <Canvas camera={{ position: [11, 32, 35] }}>
      <CameraControls />
      <ambientLight intensity={1} />
      <pointLight position={[50, 50, 50]} />
      <Cubes color={"goldenrod"} />
      <Suspense fallback={null}>
        <Logo />
      </Suspense>
    </Canvas>
  );
}

export default App;
