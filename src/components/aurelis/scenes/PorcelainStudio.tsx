import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { StudioEnv } from "./StudioEnv";

function ScanLight() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.55;
  });
  return (
    <group ref={ref}>
      <spotLight color="#c4b08a" intensity={8} distance={6} angle={0.5} penumbra={1} />
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.2, 2.2]} />
        <meshBasicMaterial color="#c4b08a" transparent opacity={0.07} depthWrite={false} />
      </mesh>
    </group>
  );
}

function PorcelainPlate({ formStudy }: { formStudy: boolean }) {
  const tex = useLoader(THREE.TextureLoader, "/images/hero-porcelain.jpg");
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;

  const geo = useMemo(() => {
    const g = new THREE.PlaneGeometry(1.28, 1.7, 28, 36);
    const pos = g.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      pos.setZ(i, -(x * x * 0.16 + y * y * 0.05));
    }
    g.computeVertexNormals();
    return g;
  }, []);

  return (
    <mesh geometry={geo} castShadow>
      {formStudy ? (
        <meshBasicMaterial color="#c4b08a" wireframe />
      ) : (
        <meshPhysicalMaterial
          map={tex}
          roughness={0.22}
          metalness={0}
          clearcoat={0.7}
          clearcoatRoughness={0.18}
          envMapIntensity={0.9}
        />
      )}
    </mesh>
  );
}

export default function PorcelainStudio({
  formStudy,
  active = true,
}: {
  formStudy: boolean;
  active?: boolean;
}) {
  const [dragging, setDragging] = useState(false);
  const [touch, setTouch] = useState(false);

  return (
    <Canvas
      frameloop={active ? "always" : "never"}
      camera={{ position: [0, 0.05, 2.35], fov: 32 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      onCreated={() => {
        setTouch(window.matchMedia("(pointer: coarse)").matches);
      }}
      onPointerDown={() => setDragging(true)}
      onPointerUp={() => setDragging(false)}
      onPointerLeave={() => setDragging(false)}
    >
      <color attach="background" args={["#0c0b09"]} />
      <StudioEnv intensity={0.7} />
      <ambientLight intensity={0.28} color="#c4b08a" />
      <spotLight position={[2.4, 2.8, 2.2]} intensity={16} color="#fff6e8" angle={0.4} penumbra={1} />
      <spotLight position={[-2.2, 0.8, 1.8]} intensity={5} color="#8ea0b3" angle={0.55} penumbra={1} />
      <PorcelainPlate formStudy={formStudy} />
      <ScanLight />
      <ContactShadows position={[0, -0.95, 0]} opacity={0.4} scale={6} blur={2.6} far={2.8} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={!touch}
        enableDamping
        dampingFactor={0.08}
        autoRotate={!dragging}
        autoRotateSpeed={0.4}
        minPolarAngle={Math.PI * 0.38}
        maxPolarAngle={Math.PI * 0.62}
        minAzimuthAngle={-0.55}
        maxAzimuthAngle={0.55}
      />
    </Canvas>
  );
}
