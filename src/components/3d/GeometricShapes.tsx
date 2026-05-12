"use client";

import { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface ShapeProps {
  position: [number, number, number];
  geometry: "box" | "sphere" | "torus" | "octahedron";
  color: string;
  speed?: number;
  distort?: number;
}

function GeometricShape({ position, geometry, color, speed = 1, distort = 0 }: ShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  const renderGeometry = () => {
    switch (geometry) {
      case "box":
        return <boxGeometry args={[1, 1, 1]} />;
      case "sphere":
        return <sphereGeometry args={[0.7, 32, 32]} />;
      case "torus":
        return <torusGeometry args={[0.6, 0.2, 16, 32]} />;
      case "octahedron":
        return <octahedronGeometry args={[0.8]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        {renderGeometry()}
        {distort > 0 ? (
          <MeshDistortMaterial
            color={color}
            attach="material"
            distort={distort}
            speed={2}
            transparent
            opacity={0.7}
          />
        ) : (
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.7}
            metalness={0.8}
            roughness={0.2}
          />
        )}
      </mesh>
    </Float>
  );
}

interface GridLine {
  start: [number, number, number];
  end: [number, number, number];
}

function GridFloor() {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.elapsedTime * 0.5) % 1 - 5;
    }
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[30, 30, "#B80000", "#1A1A1A"]}
      position={[0, -4, -5]}
      rotation={[0, 0, 0]}
    />
  );
}

export default function GeometricBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const shapes = useMemo<ShapeProps[]>(
    () => [
      { position: [3, 2, -2], geometry: "box", color: "#B80000", speed: 0.8 },
      { position: [-3, 1, -3], geometry: "sphere", color: "#C9A84C", speed: 1.2 },
      { position: [2, -2, -4], geometry: "torus", color: "#B80000", speed: 0.6 },
      { position: [-2, -1, -2], geometry: "octahedron", color: "#C9A84C", speed: 1 },
      { position: [4, 0, -5], geometry: "box", color: "#C9A84C", speed: 0.7, distort: 0.3 },
      { position: [-4, 2, -4], geometry: "sphere", color: "#B80000", speed: 0.9, distort: 0.2 },
      { position: [0, 3, -3], geometry: "torus", color: "#C9A84C", speed: 1.1 },
    ],
    []
  );

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-5, -5, 5]} intensity={0.8} color="#B80000" />
        <pointLight position={[5, -5, 5]} intensity={0.5} color="#C9A84C" />

        <Suspense fallback={null}>
          {shapes.map((props, i) => (
            <GeometricShape key={i} {...props} />
          ))}
          <GridFloor />
        </Suspense>
      </Canvas>
    </div>
  );
}

