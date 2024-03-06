import { Sphere } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Spheres = ({ numSpheres }: { numSpheres: number }) => {
    const spheres = useRef([]);

    useFrame(() => {
        spheres.current.forEach((sphere, index) => {
            if (sphere.current) {
                const speed = 0.0003 + index * 0.0001; // Calculate speed based on index
                sphere.current.position.y += speed; // Move sphere upwards with different speed
            }
        });
    });

    return (
        <>
            {Array.from({ length: numSpheres }).map((_, index) => {
                const position = new THREE.Vector3(
                    Math.random() * 8 - 5,
                    Math.random() * 8 - 5,
                    Math.random() * 8 - 5
                );
                const size = Math.random() * 0.5 + 0.1;

                const sphereRef = useRef();

                spheres.current[index] = sphereRef;

                return (
                    <Sphere
                        key={index}
                        args={[size]}
                        position={position}
                        ref={sphereRef}
                    >
                        <meshPhongMaterial
                            transparent
                            opacity={0.1}
                            vertexColors={true}
                            side={THREE.DoubleSide}
                            emissive="#ffffff" // Add glow effect by setting emissive color
                            emissiveIntensity={0.5} // Adjust the intensity of the glow effect
                            reflectivity={1} // Add reflections to the sphere
                        />
                    </Sphere>
                );
            })}
        </>
    );
};

export default Spheres;
