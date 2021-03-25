import React from "react";
import { Canvas } from "react-three-fiber";
import CameraControls from "../camera/CameraControls";
import Cubes from "../components/Cubes";
import Logo from "../components/Logo";
import Panel from "../components/Panel";
import FloatBar from "../components/Floatbar";
import { Suspense } from "react";

const Home = () => {
  return (
    <div className="w-100 h-100">
      <FloatBar />
      <Panel displayText="Welcome to DRT Software." x={5} y={25} />
      <Canvas camera={{ position: [11, 32, 35] }}>
        <CameraControls />
        <ambientLight intensity={1} />
        <pointLight position={[50, 50, 50]} />
        <Cubes color={"goldenrod"} />
        <Suspense fallback={null}>
          <Logo />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;
