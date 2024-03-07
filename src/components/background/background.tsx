import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Spheres from "../spheres/spheres";

const Background = () => {
    return (
        <Canvas style={{ width: '100%', height: '100vh', background: '#1e1e1e' }}>
            <ambientLight intensity={1}/>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <OrbitControls />
            <Spheres numSpheres={20} />
        </Canvas>
    );
};

export default Background;
