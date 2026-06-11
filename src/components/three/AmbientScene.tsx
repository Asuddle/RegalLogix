import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "../ThemeProvider";

function Cloud({ color, count = 1400 }: { color: string; count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.02;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.08;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color={color} size={0.015} sizeAttenuation depthWrite={false} opacity={0.6} />
    </Points>
  );
}

// Bronze Editorial palette
const DARK: Record<string, string> = {
  "#a78bfa": "#d4a857", // map legacy violet → bronze
  "#22d3ee": "#0e7490", // legacy cyan → deep teal
  "#d4a857": "#d4a857",
  "#7c5db8": "#7c5db8",
};
const LIGHT: Record<string, string> = {
  "#a78bfa": "#a07a30",
  "#22d3ee": "#0a6470",
  "#d4a857": "#a07a30",
  "#7c5db8": "#5b3aa3",
};

export default function AmbientScene({
  colorA = "#d4a857",
  colorB = "#0e7490",
}: {
  colorA?: string;
  colorB?: string;
}) {
  const { theme } = useTheme();
  const palette = theme === "dark" ? DARK : LIGHT;
  const a = palette[colorA] || colorA;
  const b = palette[colorB] || colorB;
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 1.6]} gl={{ alpha: true }}>
      <Suspense fallback={null}>
        <Cloud color={a} />
        <Cloud color={b} count={900} />
      </Suspense>
    </Canvas>
  );
}
