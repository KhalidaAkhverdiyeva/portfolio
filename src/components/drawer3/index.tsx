"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useState, useRef } from "react";

// Animated drawer + handle component
function AnimatedDrawer({
  isOpen,
  positionY,
  drawerWidth,
  drawerHeight,
  handleOffset = 0.07,
  map,
}: {
  isOpen: boolean;
  positionY: number;
  drawerWidth: number;
  drawerHeight: number;
  handleOffset?: number;
  map: THREE.Texture;
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
      <mesh ref={drawerRef} position={[0, positionY, 1.01]}>
        <boxGeometry args={[drawerWidth, drawerHeight, 0.05]} />
        <meshStandardMaterial map={map} />
      </mesh>
      <mesh ref={handleRef} position={[0, positionY, 1.08]}>
        <boxGeometry args={[0.8, 0.05, 0.1]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </>
  );
}

function DrawerCabinet() {
  const woodTexture = useTexture("/textures/wood.jpeg");

  const cabinetMaterials = [
    new THREE.MeshStandardMaterial({ color: "#4C4C4C" }),
    new THREE.MeshStandardMaterial({ color: "#4C4C4C" }),
    new THREE.MeshStandardMaterial({ map: woodTexture }), // top
    new THREE.MeshStandardMaterial({ color: "#4C4C4C" }),
    new THREE.MeshStandardMaterial({ color: "#4C4C4C" }),
    new THREE.MeshStandardMaterial({ color: "#4C4C4C" }),
  ];

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
        />
      </group>
    );
  });

  const bottomDrawerY = gap + largeDrawerHeight / 2;

  return (
    <group position={[0, 0.1, 0]}>
      {" "}
      {/* Cabinet Frame */}
      <mesh position={[0, totalHeight / 2, 0]} material={cabinetMaterials}>
        <boxGeometry args={[newLargeDrawerWidth, totalHeight, 2]} />
      </mesh>
      {/* Top Slab */}
      <mesh position={[0, totalHeight + 0.1, 0]}>
        <boxGeometry args={[newLargeDrawerWidth + 0.2, 0.2, 2.1]} />
        <meshStandardMaterial map={woodTexture} />
      </mesh>
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
        />
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
