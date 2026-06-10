import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "../ThemeProvider";

function Particles({ count = 2200, color }: { count?: number; color: string }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 6;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(p) * Math.cos(t);
      arr[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      arr[i * 3 + 2] = r * Math.cos(p);
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.04;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color={color}
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.85}
      />
    </Points>
  );
}

function Orb({ color, emissive }: { color: string; emissive: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * 0.15;
    ref.current.rotation.y = t * 0.2;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} scale={1.6}>
        <icosahedronGeometry args={[1.6, 6]} />
        <MeshDistortMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={0.35}
          metalness={0.9}
          roughness={0.18}
          distort={0.42}
          speed={1.6}
        />
      </mesh>
    </Float>
  );
}

function Ring({ color }: { color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.z = t * 0.08;
    ref.current.rotation.x = Math.PI / 2.4 + Math.sin(t * 0.3) * 0.15;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[3.2, 0.008, 12, 240]} />
      <meshBasicMaterial color={color} transparent opacity={0.45} />
    </mesh>
  );
}

function MouseLight({ color }: { color: string }) {
  const ref = useRef<THREE.PointLight>(null);
  useFrame(({ pointer, viewport }) => {
    if (!ref.current) return;
    ref.current.position.x = (pointer.x * viewport.width) / 2;
    ref.current.position.y = (pointer.y * viewport.height) / 2;
  });
  return <pointLight ref={ref} color={color} intensity={1.8} distance={10} />;
}

export default function HeroScene() {
  const { theme } = useTheme();
  const dark = theme === "dark";

  const fogColor = dark ? "#050507" : "#f7f5ef";
  const particle = dark ? "#a78bfa" : "#5b3aa3";
  const orbColor = dark ? "#1a1030" : "#0b0b14";
  const orbEmissive = dark ? "#3a1f7a" : "#5b3aa3";
  const ringColor = dark ? "#22d3ee" : "#0e7490";
  const lightColor = "#d4a857";
  const ambient = dark ? 0.25 : 0.55;
  const dirA = dark ? 1.1 : 0.7;
  const dirB = dark ? 0.6 : 0.5;

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <fog attach="fog" args={[fogColor, 7, 14]} />
      <ambientLight intensity={ambient} />
      <directionalLight position={[5, 5, 5]} intensity={dirA} color={particle} />
      <directionalLight position={[-5, -3, -2]} intensity={dirB} color={ringColor} />
      <Suspense fallback={null}>
        <MouseLight color={lightColor} />
        <Orb color={orbColor} emissive={orbEmissive} />
        <Ring color={ringColor} />
        <Particles color={particle} />
      </Suspense>
    </Canvas>
  );
}
