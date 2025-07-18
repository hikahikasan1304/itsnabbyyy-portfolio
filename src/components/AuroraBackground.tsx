import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AuroraParticles() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    
    return positions;
  }, []);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
    }
  });
  
  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00ffff"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function AuroraWaves() {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });
  
  return (
    <mesh ref={ref} position={[0, 0, -5]} scale={[2, 2, 1]}>
      <planeGeometry args={[20, 20, 32, 32]} />
      <meshBasicMaterial
        transparent
        opacity={0.3}
        color="#ff00ff"
        wireframe
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

export const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <AuroraParticles />
        <AuroraWaves />
      </Canvas>
      
      {/* Additional CSS gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/10 via-transparent to-blue-900/10" />
    </div>
  );
};