import ReactDOM from "react-dom";
import React, { Suspense, useRef } from "react";
import { Canvas } from "react-three-fiber";
import CameraControls from "./camera/CameraControls";
import Cubes from "./components/Cubes";
import Logo from "./components/Logo";

function App() {
  const renderStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
  };

  const light = useRef();

  return (
    <div style={renderStyle}>
      <Canvas className="w-100 h-100" camera={{ position: [11, 32, 35] }}>
        <CameraControls />
        <spotLight ref={light} position={[50, 50, 7]} />
        <spotLightHelper args={[light]} />
        <Cubes color={"grey"} />
        <Suspense fallback={null}>
          <Logo />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
