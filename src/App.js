import ReactDOM from "react-dom";
import React from "react-dom";
import { Canvas } from "react-three-fiber";
import Plane from "./components/Plane";
import Logo from "./components/Logo";
import { Suspense } from "react";

function App() {
  const SCALE = 1;

  return (
    <Canvas camera={{ position: [0, 50, 150] }}>
      <ambientLight intensity={1} />
      <pointLight position={[50, 50, 50]} />
      <Plane position={[0, -3, 0]} />
      <Suspense fallback={null}>
        <Logo scale={[SCALE, SCALE, SCALE]} />
      </Suspense>
    </Canvas>
  );
}

export default App;
