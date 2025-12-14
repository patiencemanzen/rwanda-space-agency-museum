import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Augment the JSX namespace to include Three.js elements used by @react-three/fiber
// This fixes TypeScript errors complaining about missing properties on JSX.IntrinsicElements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      pointLight: any;
      group: any;
      mesh: any;
      sphereGeometry: any;
      meshStandardMaterial: any;
      ringGeometry: any;
      meshBasicMaterial: any;
    }
  }
}

const Planet = ({ position, size, color, speed, orbitRadius }: { position: [number, number, number], size: number, color: string, speed: number, orbitRadius: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
    if (orbitRef.current) {
      orbitRef.current.rotation.y += speed * 0.01;
    }
  });

  return (
    <group ref={orbitRef}>
      <mesh position={[orbitRadius, 0, 0]} ref={meshRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
      </mesh>
      {/* Orbit Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[orbitRadius - 0.05, orbitRadius + 0.05, 64]} />
        <meshBasicMaterial color="#ffffff" opacity={0.1} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

const Sun = () => {
    return (
        <mesh>
            <sphereGeometry args={[2.5, 32, 32]} />
            <meshStandardMaterial color="#FAD201" emissive="#FAD201" emissiveIntensity={2} />
            <pointLight distance={100} intensity={2} color="#ffffff" />
        </mesh>
    )
}

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Sun />
      
      {/* Abstract Representation of Planets - Scaled for aesthetics not accuracy */}
      <Planet position={[4, 0, 0]} size={0.4} color="#A57C1B" speed={0.8} orbitRadius={4} /> {/* Mercury */}
      <Planet position={[6, 0, 0]} size={0.7} color="#E3BB76" speed={0.6} orbitRadius={6} /> {/* Venus */}
      <Planet position={[8, 0, 0]} size={0.75} color="#00A3E0" speed={0.4} orbitRadius={8} /> {/* Earth (Rwanda Blue) */}
      <Planet position={[10, 0, 0]} size={0.6} color="#C1440E" speed={0.3} orbitRadius={10} /> {/* Mars */}
      <Planet position={[14, 0, 0]} size={1.8} color="#D8CA9D" speed={0.1} orbitRadius={14} /> {/* Jupiter */}
      <Planet position={[18, 0, 0]} size={1.5} color="#F4A587" speed={0.08} orbitRadius={18} /> {/* Saturn */}
      <Planet position={[22, 0, 0]} size={1.2} color="#D1E7E7" speed={0.05} orbitRadius={22} /> {/* Uranus */}
    </>
  );
};

export const SolarSystem: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[500px] relative bg-space-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
      <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-md p-3 rounded-lg border border-white/10">
        <h3 className="text-rwanda-yellow font-display font-bold text-lg">Solar System Sim</h3>
        <p className="text-xs text-gray-400">Drag to rotate • Scroll to zoom</p>
      </div>
      <Canvas camera={{ position: [0, 20, 25], fov: 45 }}>
        <Scene />
        <OrbitControls enablePan={false} maxDistance={50} minDistance={10} />
      </Canvas>
    </div>
  );
};