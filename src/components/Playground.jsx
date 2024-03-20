import { RigidBody } from "@react-three/rapier";

export default function Playground({ length }) {
  return (
    <group position={[0, 0, -length / 2]}>
      <RigidBody type="kinematicPosition">
        <mesh receiveShadow>
          <boxGeometry args={[4, 0.1, length]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh
          receiveShadow
          position-y={1}
          position-x={2}
          rotation-x={-Math.PI * 0.5}
          rotation-y={-Math.PI * 0.5}
        >
          <planeGeometry args={[2, length]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh
          receiveShadow
          position-y={1}
          position-x={-2}
          rotation-x={-Math.PI * 0.5}
          rotation-y={Math.PI * 0.5}
        >
          <planeGeometry args={[2, length]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[0, 1, length / 2 - 2]} rotation-x={Math.PI}>
          <planeGeometry args={[4, 2]} />
        </mesh>
      </RigidBody>
      <mesh rotation-x={Math.PI * 0.5} position={[0, 2, 0]}>
        <planeGeometry args={[4, length]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}
