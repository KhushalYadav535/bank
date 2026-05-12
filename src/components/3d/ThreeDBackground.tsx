"use client";

import { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingOrbs() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 3 + Math.random() * 2;
        const y = (Math.random() - 0.5) * 4;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius - 5;

        return (
          <Float key={i} speed={1.5 + Math.random()} rotationIntensity={0.5} floatIntensity={2}>
            <mesh position={[x, y, z]}>
              <sphereGeometry args={[0.15 + Math.random() * 0.2, 32, 32]} />
              <MeshDistortMaterial
                color={i % 2 === 0 ? "#B80000" : "#C9A84C"}
                attach="material"
                distort={0.3 + Math.random() * 0.3}
                speed={2}
                transparent
                opacity={0.6}
              />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
}

function ParticleStream() {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#ffffff" transparent opacity={0.5} />
    </points>
  );
}

function DNAHelix() {
  const groupRef = useRef<THREE.Group>(null);

  const { points1, points2, bars } = useMemo(() => {
    const p1: [number, number, number][] = [];
    const p2: [number, number, number][] = [];
    const b: { start: [number, number, number]; end: [number, number, number] }[] = [];

    for (let i = 0; i < 40; i++) {
      const t = i / 40;
      const angle = t * Math.PI * 6;
      const y = (t - 0.5) * 12;
      const radius = 0.8;

      p1.push([Math.cos(angle) * radius, y, Math.sin(angle) * radius]);
      p2.push([Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * radius]);

      if (i % 4 === 0) {
        b.push({
          start: [Math.cos(angle) * radius, y, Math.sin(angle) * radius],
          end: [Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * radius],
        });
      }
    }

    return { points1: p1, points2: p2, bars: b };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array(points1.flatMap(p => p)), 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#B80000" transparent opacity={0.6} />
      </line>
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array(points2.flatMap(p => p)), 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#C9A84C" transparent opacity={0.6} />
      </line>
      {bars.map((bar, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array([...bar.start, ...bar.end]), 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#ffffff" transparent opacity={0.3} />
        </line>
      ))}
    </group>
  );
}

function GridFloor() {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.elapsedTime * 0.3) % 2 - 10;
    }
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[50, 50, "#B80000", "#1A1A1A"]}
      position={[0, -6, -10]}
    />
  );
}

interface SceneProps {
  type?: "default" | "minimal" | "hero";
}

function DefaultScene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#B80000" />
      <FloatingOrbs />
      <ParticleStream />
      <GridFloor />
    </>
  );
}

function MinimalScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[2, 2, 2]} intensity={0.6} />
      <ParticleStream />
    </>
  );
}

function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#B80000" />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#C9A84C" />
      <FloatingOrbs />
      <DNAHelix />
      <ParticleStream />
    </>
  );
}

export default function ThreeDBackground({ type = "default" }: SceneProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <color attach="background" args={["transparent" as any]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          {type === "minimal" ? <MinimalScene /> : type === "hero" ? <HeroScene /> : <DefaultScene />}
        </Suspense>
      </Canvas>
    </div>
  );
}