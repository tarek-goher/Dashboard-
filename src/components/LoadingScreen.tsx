import { useRef, useState, Component, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot } from '@react-three/drei';
import type * as THREE from 'three';

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

class CanvasErrorBoundary extends Component<{ fallback: ReactNode; children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

function RotatingShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.8;
    }
  });
  return (
    <TorusKnot ref={meshRef} args={[1, 0.3, 128, 16]}>
      <meshStandardMaterial color="#06b6d4" wireframe />
    </TorusKnot>
  );
}

function CSSShape() {
  return (
    <div className="relative flex items-center justify-center w-64 h-64">
      <div className="w-40 h-40 rounded-full border-2 border-cyan-400/60 animate-spin" style={{ animationDuration: '3s' }} />
      <div className="absolute w-28 h-28 rounded-full border-2 border-violet-400/50 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
      <div className="absolute w-16 h-16 rounded-full border-2 border-cyan-300/80 animate-spin" style={{ animationDuration: '1.5s' }} />
      <div className="absolute w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_20px_#06b6d4]" />
    </div>
  );
}

export function LoadingScreen() {
  const [webgl] = useState(isWebGLAvailable);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-64 h-64">
        {webgl ? (
          <CanvasErrorBoundary fallback={<CSSShape />}>
            <Canvas camera={{ position: [0, 0, 4] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <RotatingShape />
            </Canvas>
          </CanvasErrorBoundary>
        ) : (
          <CSSShape />
        )}
      </div>
      <div className="mt-8 text-cyan-400 font-mono tracking-widest text-sm uppercase animate-pulse">
        INITIALIZING MISSION CONTROL
      </div>
      <div className="mt-4 flex gap-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-cyan-400/60"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    </motion.div>
  );
}
