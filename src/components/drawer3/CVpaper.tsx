import { useTexture } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function CVPaper({ isVisible }: { isVisible: boolean }) {
  const texture = useTexture("/textures/cv.png");
  texture.anisotropy = 18;
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipMapLinearFilter;
  const paperRef = useRef<THREE.Mesh>(null);
  const [isClicked, setIsClicked] = useState(false);

  // Handle auto-close when isVisible becomes false
  useEffect(() => {
    if (!isVisible) {
      setIsClicked(false); // Start reverse animation
    }
  }, [isVisible]);

  useFrame(() => {
    if (!paperRef.current) return;

    // Target positions and rotations
    const targetPosition = isClicked
      ? new THREE.Vector3(0.5, 2.5, 1.5)
      : new THREE.Vector3(0.5, 0.1, 0);

    const targetRotation = isClicked
      ? new THREE.Euler(0, 0, 0)
      : new THREE.Euler(-Math.PI / 2, 0, 0);

    const targetScale = isClicked
      ? new THREE.Vector3(1.5, 2.0, 1)
      : new THREE.Vector3(1, 1, 1);

    // Smooth transitions
    paperRef.current.position.lerp(targetPosition, 0.05);
    paperRef.current.rotation.x +=
      (targetRotation.x - paperRef.current.rotation.x) * 0.05;
    paperRef.current.rotation.y +=
      (targetRotation.y - paperRef.current.rotation.y) * 0.05;
    paperRef.current.rotation.z +=
      (targetRotation.z - paperRef.current.rotation.z) * 0.05;
    paperRef.current.scale.lerp(targetScale, 0.05);
  });

  // Always render if it should be visible
  if (!isVisible && !isClicked) return null;

  return (
    <mesh
      ref={paperRef}
      position={[0.5, 0.1, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={() => setIsClicked((prev) => !prev)}
    >
      <planeGeometry args={[1.3, 1.3]} />
      <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
}
