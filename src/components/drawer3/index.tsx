"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import { Box } from "@react-three/drei";

function DrawerHandle({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.4, 0.1, 0.1]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
}

function DrawerCabinet() {
  return (
    <group>
      {/* Cabinet Frame */}
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[2, 3, 2]} />
        <meshStandardMaterial color="#dddddd" />
      </mesh>

      {/* Drawers (Front Panels Only) */}
      {/* Top 3 small drawers */}
      {[2.6, 2.1, 1.6].map((y, i) => (
        <group key={i}>
          <mesh position={[0, y, 1.01]}>
            <boxGeometry args={[1.8, 0.4, 0.05]} />
            <meshStandardMaterial color="#bbbbbb" />
          </mesh>
          <DrawerHandle position={[0, y, 1.08]} />
        </group>
      ))}

      {/* Bottom large drawer */}
      <group>
        <mesh position={[0, 0.7, 1.01]}>
          <boxGeometry args={[1.8, 1.2, 0.05]} />
          <meshStandardMaterial color="#bbbbbb" />
        </mesh>
        <DrawerHandle position={[0, 0.7, 1.08]} />
      </group>
    </group>
  );
}

export default function Drawer() {
  return (
    <Canvas camera={{ position: [4, 4, 6], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls />
      <DrawerCabinet />
    </Canvas>
  );
}
