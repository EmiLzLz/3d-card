import "./App.css";
import { Canvas } from "@react-three/fiber";
import Card from "./components/Card";
import { OrbitControls } from "@react-three/drei";
import Plane from "./components/Plane";

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#000000",
      }}
    >
      <Canvas camera={{ fov: 25, near: 2, position: [0, 2.8, 10] }} shadows>
        <OrbitControls enableRotate={false} enablePan={false} />
        <pointLight
        position={[0,4,0.5]}
          intensity={20}
          distance={10}
          decay={1}
          castShadow
        />
        <Card />
        <Plane />
      </Canvas>
    </div>
  );
}

export default App;
