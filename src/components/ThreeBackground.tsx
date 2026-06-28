import { useRef, useMemo, useState, Component, type ReactNode } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Object3D } from 'three';
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

class CanvasErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

function Particles() {
  const count = 600;
  const mesh = useRef<THREE.InstancedMesh>(null);
  const { mouse } = useThree();
  const dummy = useMemo(() => new Object3D(), []);

  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      t: Math.random() * 100,
      factor: 20 + Math.random() * 100,
      speed: 0.01 + Math.random() / 200,
      xFactor: -50 + Math.random() * 100,
      yFactor: -50 + Math.random() * 100,
      zFactor: -50 + Math.random() * 100,
      mx: 0,
      my: 0,
    }));
  }, []);

  useFrame(() => {
    particles.forEach((p, i) => {
      p.t += p.speed / 2;
      const a = Math.cos(p.t) + Math.sin(p.t) / 10;
      const b = Math.sin(p.t) + Math.cos(p.t * 2) / 10;
      const s = Math.abs(Math.cos(p.t)) * 0.5 + 0.5;
      p.mx += (mouse.x * 10 - p.mx) * 0.02;
      p.my += (mouse.y * 10 - p.my) * 0.02;
      dummy.position.set(
        p.mx / 10 + a + p.xFactor + Math.cos((p.t / 10) * p.factor) + (Math.sin(p.t) * p.factor) / 10,
        p.my / 10 + b + p.yFactor + Math.sin((p.t / 10) * p.factor) + (Math.cos(p.t * 2) * p.factor) / 10,
        p.my / 10 + b + p.zFactor + Math.cos((p.t / 10) * p.factor) + (Math.sin(p.t * 3) * p.factor) / 10,
      );
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      if (mesh.current) mesh.current.setMatrixAt(i, dummy.matrix);
    });
    if (mesh.current) mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[0.2, 0]} />
      <meshBasicMaterial color="#06b6d4" transparent opacity={0.15} />
    </instancedMesh>
  );
}

export function ThreeBackground() {
  const [webgl] = useState(isWebGLAvailable);
  if (!webgl) return null;

  return (
    <div className="fixed inset-0 z-[-1] opacity-30 pointer-events-none">
      <CanvasErrorBoundary>
        <Canvas camera={{ position: [0, 0, 50], fov: 75 }}>
          <Particles />
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
