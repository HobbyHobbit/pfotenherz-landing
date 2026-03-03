'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Custom Paw-Heart Shape
function PawHeartMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  // Create heart shape from two paws
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();

    // Create a heart shape using bezier curves
    const x = 0;
    const y = 0;

    shape.moveTo(x, y);
    shape.bezierCurveTo(x, y - 0.3, x - 0.6, y - 0.3, x - 0.6, y);
    shape.bezierCurveTo(x - 0.6, y + 0.3, x - 0.3, y + 0.5, x, y + 0.8);
    shape.bezierCurveTo(x + 0.3, y + 0.5, x + 0.6, y + 0.3, x + 0.6, y);
    shape.bezierCurveTo(x + 0.6, y - 0.3, x, y - 0.3, x, y);

    const extrudeSettings = {
      depth: 0.4,
      bevelEnabled: true,
      bevelSegments: 5,
      steps: 2,
      bevelSize: 0.1,
      bevelThickness: 0.1,
    };

    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  // Add paw pad details
  const pawPads = useMemo(() => {
    const pads = [];
    // Left paw pads
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2 - Math.PI / 4;
      const radius = 0.4;
      pads.push({
        position: [
          -0.4 + Math.cos(angle) * radius,
          0.3 + Math.sin(angle) * radius,
          0.3,
        ] as [number, number, number],
        scale: 0.15,
      });
    }
    // Right paw pads
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2 - Math.PI / 4;
      const radius = 0.4;
      pads.push({
        position: [
          0.4 + Math.cos(angle) * radius,
          0.3 + Math.sin(angle) * radius,
          0.3,
        ] as [number, number, number],
        scale: 0.15,
      });
    }
    return pads;
  }, []);

  // Animation
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      // Pulse effect
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      meshRef.current.scale.set(pulse, pulse, pulse);
    }

    // Gradient animation
    if (materialRef.current) {
      const hue = (state.clock.elapsedTime * 0.05) % 1;
      materialRef.current.color.setHSL(0.02 + hue * 0.05, 0.8, 0.5);
    }
  });

  return (
    <group>
      {/* Main Heart */}
      <mesh ref={meshRef} geometry={geometry} castShadow receiveShadow>
        <meshStandardMaterial
          ref={materialRef}
          color="#FF6B4A"
          metalness={0.3}
          roughness={0.4}
          emissive="#FF6B4A"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Paw Pads */}
      {pawPads.map((pad, i) => (
        <mesh key={i} position={pad.position} castShadow>
          <sphereGeometry args={[pad.scale, 16, 16]} />
          <meshStandardMaterial
            color="#2B2D42"
            metalness={0.2}
            roughness={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

// Scene component
function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4ECDC4" />

      <Float
        speed={1.5}
        rotationIntensity={0.5}
        floatIntensity={0.5}
        floatingRange={[-0.1, 0.1]}
      >
        <PawHeartMesh />
      </Float>

      <Environment preset="city" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
}

// Main component
export default function Hero3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}