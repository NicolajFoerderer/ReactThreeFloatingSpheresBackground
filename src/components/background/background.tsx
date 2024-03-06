import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Spheres from "../spheres/spheres";

const Background = () => {
    return (
        <Canvas style={{ width: '100%', height: '100vh' }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls />
            <Spheres numSpheres={20} />
        </Canvas>
    );
};

export default Background;
