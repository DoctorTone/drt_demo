import ReactDOM from "react-dom";
import React from "react-dom";
import { Canvas } from "react-three-fiber";
import Plane from "./components/Plane";

function App() {
  return (
    <Canvas camera={{ position: [0, 150, 150] }}>
      <ambientLight intensity={2} />
      <pointLight position={[50, 50, 50]} />
      <Plane position={[0, -3, 0]} />
    </Canvas>
  );
}

export default App;
