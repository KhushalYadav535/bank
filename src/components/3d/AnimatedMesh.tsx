"use client";

import { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function AnimatedBlob({ color = "#B80000", position = [0, 0, 0] }: { color?: string; position?: number[] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position as [number, number, number]}>
      <icosahedronGeometry args={[2, 64]} />
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

function FloatingRings({ count = 5 }: { count?: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  const rings = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      scale: 1 + i * 0.5,
      rotation: (i * Math.PI) / count,
      speed: 0.5 + i * 0.1,
    }));
  }, [count]);

  return (
    <group ref={groupRef}>
      {rings.map((ring, i) => (
        <mesh key={i} scale={ring.scale}>
          <torusGeometry args={[1.5, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#C9A84C"
            emissive="#C9A84C"
            emissiveIntensity={0.3}
            transparent
            opacity={0.6 - i * 0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function AnimatedMeshBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#B80000" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#C9A84C" />
        <Suspense fallback={null}>
          <AnimatedBlob position={[3, 1, -2]} />
          <AnimatedBlob position={[-3, -1, -3]} color="#C9A84C" />
          <FloatingRings count={4} />
        </Suspense>
      </Canvas>
    </div>
  );
}

