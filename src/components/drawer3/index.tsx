"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useState, useRef } from "react";
import InsideBox from "./drawerBox";
import LargeInsideBox from "./largeDrawerBox";

// Animated drawer + handle component
function AnimatedDrawer({
  isOpen,
  positionY,
  drawerWidth,
  drawerHeight,
  handleOffset = 0.07,
  map,
  children, // <-- Accept children
}: {
  isOpen: boolean;
  positionY: number;
  drawerWidth: number;
  drawerHeight: number;
  handleOffset?: number;
  map: THREE.Texture;
  children?: React.ReactNode;
}) {
  const drawerRef = useRef<THREE.Mesh>(null);
  const handleRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    const targetZ = isOpen ? 1.8 : 1.01;
    const handleTargetZ = targetZ + handleOffset;

    if (drawerRef.current) {
      drawerRef.current.position.z +=
        (targetZ - drawerRef.current.position.z) * 0.1;
    }
    if (handleRef.current) {
      handleRef.current.position.z +=
        (handleTargetZ - handleRef.current.position.z) * 0.1;
    }
  });

  return (
    <>
      {/* Drawer box */}
      <mesh ref={drawerRef} position={[0, positionY, 1.01]}>
        <boxGeometry args={[drawerWidth, drawerHeight, 0.05]} />
        <meshStandardMaterial map={map} />
      </mesh>

      {/* Handle */}
      <mesh ref={handleRef} position={[0, positionY, 1.08]}>
        <boxGeometry args={[0.8, 0.05, 0.1]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Contents */}
      {children && (
        <group position={[0, positionY, 1.5]} scale={isOpen ? 1 : 0}>
          {children}
        </group>
      )}
    </>
  );
}

function DrawerCabinet() {
  const woodTexture = useTexture("/textures/wood.jpeg");

  const totalHeight = 3;
  const smallDrawerCount = 2;
  const gap = 0.05;
  const gapCount = smallDrawerCount + 2;
  const largeDrawerHeight = 1.3;
  const smallDrawerHeight =
    (totalHeight - largeDrawerHeight - gap * gapCount) / smallDrawerCount;

  const newSmallDrawerWidth = 3;
  const newLargeDrawerWidth = 3.2;

  const [openSmallDrawers, setOpenSmallDrawers] = useState<boolean[]>(
    new Array(smallDrawerCount).fill(false)
  );
  const [openLargeDrawer, setOpenLargeDrawer] = useState(false);

  const toggleSmallDrawer = (index: number) => {
    setOpenSmallDrawers((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const toggleLargeDrawer = () => {
    setOpenLargeDrawer((prev) => !prev);
  };

  const smallDrawers = Array.from({ length: smallDrawerCount }, (_, i) => {
    const y =
      totalHeight - gap - smallDrawerHeight / 2 - i * (smallDrawerHeight + gap);
    return (
      <group key={i} onClick={() => toggleSmallDrawer(i)}>
        <AnimatedDrawer
          isOpen={openSmallDrawers[i]}
          positionY={y}
          drawerWidth={newSmallDrawerWidth}
          drawerHeight={smallDrawerHeight}
          map={woodTexture}
        >
          <InsideBox isOpen={openSmallDrawers[i]} />
        </AnimatedDrawer>
      </group>
    );
  });

  const bottomDrawerY = gap + largeDrawerHeight / 2;

  return (
    <group position={[0, 0.1, 0]}>
      {" "}
      {/* Cabinet Frame */}
      <group position={[0, 0, 0]}>
        {/* Left side */}
        <mesh position={[-newLargeDrawerWidth / 2, totalHeight / 2, 0]}>
          <boxGeometry args={[0.1, totalHeight, 2]} />
          <meshStandardMaterial color="#4C4C4C" />
        </mesh>

        {/* Right side */}
        <mesh position={[newLargeDrawerWidth / 2, totalHeight / 2, 0]}>
          <boxGeometry args={[0.1, totalHeight, 2]} />
          <meshStandardMaterial color="#4C4C4C" />
        </mesh>

        {/* Back */}
        <mesh position={[0, totalHeight / 2, -1]}>
          <boxGeometry args={[newLargeDrawerWidth, totalHeight, 0.1]} />
          <meshStandardMaterial color="#4C4C4C" />
        </mesh>

        {/* Bottom */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[newLargeDrawerWidth, 0.1, 2]} />
          <meshStandardMaterial color="#4C4C4C" />
        </mesh>

        {/* Top */}
        <mesh position={[0, totalHeight, 0]}>
          <boxGeometry args={[newLargeDrawerWidth, 0.1, 2]} />
          <meshStandardMaterial color="#4C4C4C" />
        </mesh>

        {/* Optional: Top Slab */}
        <mesh position={[0, totalHeight + 0.1, 0]}>
          <boxGeometry args={[newLargeDrawerWidth + 0.3, 0.2, 2.2]} />
          <meshStandardMaterial map={woodTexture} />
        </mesh>
      </group>
      {/* Small Drawers */}
      {smallDrawers}
      {/* Large Bottom Drawer */}
      <group onClick={toggleLargeDrawer}>
        <AnimatedDrawer
          isOpen={openLargeDrawer}
          positionY={bottomDrawerY}
          drawerWidth={newLargeDrawerWidth - 0.2}
          drawerHeight={largeDrawerHeight}
          map={woodTexture}
        >
          <LargeInsideBox isOpen={openLargeDrawer} />
        </AnimatedDrawer>
      </group>
      {/* Wheels */}
      {[-1, 1].map((x) =>
        [-1, 1].map((z) => (
          <mesh
            key={`wheel-${x}-${z}`}
            position={[
              x * (newLargeDrawerWidth / 2 - 0.2),
              -0.05,
              z * (2 / 2 - 0.2),
            ]}
            rotation={[Math.PI / 2, 0, 0]} // Rotate to lie flat
          >
            <cylinderGeometry args={[0.105, 0.1, 0.1, 32]} />
            <meshStandardMaterial color="black" />
          </mesh>
        ))
      )}
    </group>
  );
}

export default function Drawer() {
  return (
    <Canvas camera={{ position: [4, 4, 6], fov: 60 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls />
      <DrawerCabinet />
    </Canvas>
  );
}
