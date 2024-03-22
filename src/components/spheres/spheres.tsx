import { Sphere } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

type SphereRef = React.MutableRefObject<THREE.Mesh>;

const TOPBOUND = 5;

const Spheres = ({ numSpheres }: { numSpheres: number }) => {
  const spheres = useRef<SphereRef[]>([]);

  useFrame(() => {
    spheres.current.forEach((sphere: SphereRef, index: number) => {
      const speed = 0.0003 + index * 0.0001; // Calculate speed based on index
      if (sphere.current.position.y > TOPBOUND) {
        sphere.current.position.y = -TOPBOUND; // Reset position if sphere is out of bounds
      }
      sphere.current.position.y += speed; // Move sphere upwards with different speed
    });
  });

  return (
    <>
      {Array.from({ length: numSpheres }).map((_, index) => {
        const position = new THREE.Vector3(
          Math.random() * 10 - 5,
          Math.random() * 10 - 5,
          Math.random() * 10 - 5
        );
        const size = Math.random();
        const color = new THREE.Color(Math.random() * 0xffffff);

        const sphereRef = useRef() as SphereRef;
        spheres.current[index] = sphereRef;

        return (
          <Sphere key={index} args={[size]} position={position} ref={sphereRef}>
            <meshPhongMaterial
              color={color}
              transparent
              opacity={0.6}
              reflectivity={1}
            />
          </Sphere>
        );
      })}
    </>
  );
};

export default Spheres;
