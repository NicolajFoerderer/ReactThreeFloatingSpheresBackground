import { Canvas } from "@react-three/fiber";
import Spheres from "../spheres/spheres";

const Background = () => {
  return (
    <Canvas
      style={{
        width: "100%",
        height: "100vh",
        background: "#1e1e1e",
        position: "absolute",
        zIndex: "-1",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
      }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[1, 1, 1]} intensity={2} />
      <Spheres numSpheres={20} />
    </Canvas>
  );
};

export default Background;
