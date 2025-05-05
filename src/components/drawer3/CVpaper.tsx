import { useTexture } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function CVPaper({ isVisible }: { isVisible: boolean }) {
  const texture = useTexture("/textures/cv.png");
  const paperRef = useRef<THREE.Mesh>(null);
  const [isClicked, setIsClicked] = useState(false);

  useFrame(() => {
    if (paperRef.current && isClicked) {
      // Smoothly move paper to readable position
      paperRef.current.position.y += (2.5 - paperRef.current.position.y) * 0.05;
      paperRef.current.position.z += (1.5 - paperRef.current.position.z) * 0.05;

      // Gently rotate to be readable (standing up facing camera)
      const targetRotationX = 0; // slight tilt
      const targetRotationY = 0; // face the user

      paperRef.current.rotation.x +=
        (targetRotationX - paperRef.current.rotation.x) * 0.05;
      paperRef.current.rotation.y +=
        (targetRotationY - paperRef.current.rotation.y) * 0.05;
    }
  });

  if (!isVisible && !isClicked) return null;

  return (
    <mesh
      ref={paperRef}
      position={[0.5, 0.1, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={() => setIsClicked(true)}
    >
      <planeGeometry args={[1.2, 1.6]} />
      <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
}
