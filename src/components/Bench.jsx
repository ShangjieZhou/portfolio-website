import { RigidBody } from "@react-three/rapier";

export default function Bench({ length, depth }) {
  return (
    <RigidBody type="kinematicPosition">
      <mesh castShadow position={[0, 0.24, depth]}>
        <boxGeometry args={[0.5, 0.2, length]}></boxGeometry>
        <meshStandardMaterial emissive={"white"} emissiveIntensity={0.1} color={"#e2e2e2"} />
      </mesh>
    </RigidBody>
  );
}
