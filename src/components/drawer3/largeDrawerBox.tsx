import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function LargeInsideBox({ isOpen }: { isOpen: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const zPosition = useRef(-1.5); // Start position is off-screen, hidden
  const [delayTriggered, setDelayTriggered] = useState(false);

  const width = 2.9;
  const height = 1.2;
  const depth = 1.6;
  const thickness = 0.05;

  // Introduce a delay before the animation starts
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelayTriggered(true);
    }, 1000); // Delay of 1000ms before starting the animation (you can change this)

    return () => clearTimeout(timeout); // Clean up the timeout if the component is unmounted
  }, []);

  useFrame(() => {
    if (!delayTriggered) return; // Wait for the delay to finish before animating

    const targetZ = isOpen ? -0.51 : -1.5; // Open position is at 0.8, closed position is off-screen at -1.5

    // Slow down the movement by adjusting this factor (smaller = slower)
    const slownessFactor = 0.09; // Adjust this value to make the movement smoother or faster

    // Smoothly update the position towards the target position
    zPosition.current += (targetZ - zPosition.current) * slownessFactor;

    if (groupRef.current) {
      groupRef.current.position.z = zPosition.current;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -1.5]}> {/* Set initial position to off-screen */}
      {/* Bottom */}
      <mesh position={[0, -height / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[width, thickness, depth]} />
        <meshStandardMaterial color="#595959" />
      </mesh>

      {/* Back */}
      <mesh position={[0, 0, -depth / 2]} castShadow receiveShadow>
        <boxGeometry args={[width, height, thickness]} />
        <meshStandardMaterial color="#7f7f7f" />
      </mesh>

      {/* Front */}
      <mesh position={[0, 0, depth / 2]} castShadow receiveShadow>
        <boxGeometry args={[width, height, thickness]} />
        <meshStandardMaterial color="#a5a5a5" />
      </mesh>

      {/* Left */}
      <mesh position={[-width / 2, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[thickness, height, depth]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>

      {/* Right */}
      <mesh position={[width / 2, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[thickness, height, depth]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>
    </group>
  );
}
