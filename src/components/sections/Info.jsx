import { RigidBody } from "@react-three/rapier";

export default function Info({ depth }) {
  return (
    <>
      <RigidBody type="kinematicPosition">
        <mesh
          //   rotation-y={-Math.PI * 0.5}
          position={[-1, 1, -1 * depth]}
          castShadow
        >
          <boxGeometry args={[0.8, 0.8, 0.4]} />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
        <mesh
          //   rotation-y={-Math.PI * 0.5}
          position={[0, 1, -1 * depth]}
          castShadow
        >
          <boxGeometry args={[0.8, 0.8, 0.4]} />
          <meshStandardMaterial color="#EA4D82" />
        </mesh>
        <mesh
          //   rotation-y={-Math.PI * 0.5}
          position={[1, 1, -1 * depth]}
          castShadow
        >
          <boxGeometry args={[0.8, 0.8, 0.4]} />
          <meshStandardMaterial color="#ff9258" />
        </mesh>
      </RigidBody>
    </>
  );
}
