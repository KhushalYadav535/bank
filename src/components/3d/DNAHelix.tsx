"use client";

import { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Sphere } from "@react-three/drei";
import * as THREE from "three";

function DNABackground() {
  const groupRef = useRef<THREE.Group>(null);
  const particleRef = useRef<THREE.Points>(null);

  const points = useMemo(() => {
    const pts: [number, number, number][] = [];
    const pts2: [number, number, number][] = [];

    for (let i = 0; i < 50; i++) {
      const t = i / 50;
      const angle = t * Math.PI * 4;
      const y = (t - 0.5) * 10;
      const radius = 1;

      pts.push([Math.cos(angle) * radius, y, Math.sin(angle) * radius]);
      pts2.push([Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * radius]);
    }

    return { strand1: pts, strand2: pts2 };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
    }
    if (particleRef.current) {
      particleRef.current.rotation.y = -state.clock.elapsedTime * 0.1;
    }
  });

  const particlePositions = useMemo(() => {
    const pos = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  return (
    <>
      <group ref={groupRef}>
        <Line
          points={points.strand1}
          color="#B80000"
          lineWidth={2}
          transparent
          opacity={0.8}
        />
        <Line
          points={points.strand2}
          color="#C9A84C"
          lineWidth={2}
          transparent
          opacity={0.8}
        />

        {points.strand1.map((point, i) => (
          <Sphere key={i} args={[0.08, 16, 16]} position={point}>
            <meshStandardMaterial color="#B80000" emissive="#B80000" emissiveIntensity={0.5} />
          </Sphere>
        ))}
        {points.strand2.map((point, i) => (
          <Sphere key={i} args={[0.08, 16, 16]} position={point}>
            <meshStandardMaterial color="#C9A84C" emissive="#C9A84C" emissiveIntensity={0.5} />
          </Sphere>
        ))}
      </group>

      <points ref={particleRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#ffffff" transparent opacity={0.4} />
      </points>
    </>
  );
}

export default function DNABackgroundScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#B80000" />
        <Suspense fallback={null}>
          <DNABackground />
        </Suspense>
      </Canvas>
    </div>
  );
}

