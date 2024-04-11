import { Html, Image, SpotLight, Text } from "@react-three/drei";
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
  const getOrientation = () => (onLeft ? Math.PI * 0.5 : -Math.PI * 0.5);
  const getDepth = () => (onLeft ? -1 * THICKNESS + 0.04 : THICKNESS - 0.04);

  return (
    <RigidBody type="kinematicPosition">
      <mesh
        rotation-y={getOrientation()}
        position={[getX(), 1, depth]}
        castShadow
      >
        <boxGeometry args={[WIDTH, HEIGHT, THICKNESS]}></boxGeometry>
        <meshStandardMaterial emissive={colour} emissiveIntensity={0.5} color={colour} />

        {children}
        {/* <Html
          occlude
          rotation-y={getOrientation()}
          // scale={0.36}
          position={[0, 0, getDepth()]}
          transform
          distanceFactor={3.6}
        >
          {children}
        </Html> */}
      </mesh>
    </RigidBody>
  );
}
