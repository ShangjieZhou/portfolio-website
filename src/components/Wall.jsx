import { Html } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const THICKNESS = 0.1;
const WIDTH = 1.5;
const HEIGHT = 1.5;

export default function Wall({
  galleryWidth,
  onLeft,
  depth,
  colour,
  children,
}) {
  const getX = () => (onLeft ? galleryWidth / -2 : galleryWidth / 2);
  const getOrientation = () => (onLeft ? Math.PI : 0);
  const getDepth = () => (onLeft ? -1 * THICKNESS + 0.01 : THICKNESS - 0.01);

  return (
    <RigidBody type="kinematicPosition">
      <mesh
        rotation-y={-Math.PI * 0.5}
        position={[getX(), 1, depth]}
        castShadow
      >
        <boxGeometry args={[WIDTH, HEIGHT, THICKNESS]}></boxGeometry>
        <meshStandardMaterial color={colour} />
        <Html
          rotation-y={getOrientation()}
          scale={0.36}
          position={[0, 0, getDepth()]}
          transform
        >
          {children}
        </Html>
      </mesh>
      <mesh position={[0, 0, depth]}>
        <boxGeometry args={[0.6, 0.5, 3]}></boxGeometry>
        <meshStandardMaterial color="white" />
      </mesh>
    </RigidBody>
  );
}
