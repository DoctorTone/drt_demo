import ReactDOM from "react-dom";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import CameraControls from "./camera/CameraControls";
import Cubes from "./components/Cubes";
import Logo from "./components/Logo";
import Box from "./components/Box";

function App() {
  const renderStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
  };

  return (
    <div style={renderStyle}>
      <Canvas className="w-100 h-100" camera={{ position: [11, 32, 35] }}>
        <CameraControls />
        <spotLight position={[50, 50, 7]} angle={0.25} intensity={2.0} />
        <Cubes color={"grey"} />
        <Box position={[50, 50, 7]} />
        <Suspense fallback={null}>
          <Logo />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
