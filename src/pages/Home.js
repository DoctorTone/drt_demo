import React from "react";
import { Canvas } from "react-three-fiber";
import CameraControls from "../camera/CameraControls";
import Cubes from "../components/Cubes";
import Logo from "../components/Logo";
import PanelH1 from "../components/PanelH1";
import Panel from "../components/Panel";
import FloatBar from "../components/Floatbar";
import { Suspense } from "react";

const Home = () => {
  return (
    <div className="w-100 h-100">
      <FloatBar />
      <PanelH1 displayText="Welcome to DRT Software." x={5} y={20} />
      <Panel
        displayText="Hi, I'm Tony Glover, a full-stack developer and founder of DRT."
        x={7.5}
        y={35}
      />
      <Panel
        displayText="I'd love to help you with your next project."
        x={7.5}
        y={40}
      />
      <Canvas camera={{ position: [11, 32, 35] }}>
        <CameraControls />
        <spotLight position={[50, 50, 7]} />
        <Cubes color={"grey"} />
        <Suspense fallback={null}>
          <Logo />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;
