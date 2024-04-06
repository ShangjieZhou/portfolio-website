import { Float, Text } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

const wallMaterial = new THREE.MeshStandardMaterial({
  color: "white",
  emissive: "white",
  emissiveIntensity: 0.1,
});
const groundMaterial = new THREE.MeshStandardMaterial({
  color: "white",
  emissive: "white",
  emissiveIntensity: 0.6,
});

function IntroText({ position, text, color = "white", size = 10 }) {
  return (
    <group position={position}>
      <Float speed={2} floatIntensity={0.4} rotationIntensity={0.25}>
        <Text
          fontSize={size}
          font="/bebas-neue-v9-latin-regular.woff"
          scale={[0.5, 0.4, 1]}
          maxWidth={2}
          lineHeight={0.75}
          textAlign="right"
          position={[0, 0.65, 0]}
          rotation-y={-0.25}
        >
          {text}
          <meshBasicMaterial color={color} toneMapped={false} />
        </Text>
      </Float>
    </group>
  );
}

export default function Playground({ length, width }) {
  return (
    <group position={[0, 0, -length / 2]}>
      <RigidBody type="kinematicPosition">
        <mesh material={wallMaterial} receiveShadow>
          <boxGeometry args={[width, 0.1, length]} />
        </mesh>
        <mesh
          material={wallMaterial}
          receiveShadow
          position-y={1}
          position-x={width / 2}
          rotation-x={-Math.PI * 0.5}
          rotation-y={-Math.PI * 0.5}
        >
          <planeGeometry args={[2, length]} />
        </mesh>
        <mesh
          material={wallMaterial}
          receiveShadow
          position-y={1}
          position-x={width / -2}
          rotation-x={-Math.PI * 0.5}
          rotation-y={Math.PI * 0.5}
        >
          <planeGeometry args={[2, length]} />
        </mesh>
        <mesh position={[0, 1, length / 2 - 3.8]} rotation-x={Math.PI}>
          <planeGeometry args={[width, 2]} />
        </mesh>
        <mesh material={wallMaterial} position={[0, 1, length / -2]}>
          <planeGeometry args={[width, 2]} />
        </mesh>
      </RigidBody>
      <mesh
        material={groundMaterial}
        rotation-x={Math.PI * 0.5}
        position={[0, 2, 0]}
      >
        <planeGeometry args={[width, length]} />
      </mesh>
      <IntroText
        size={1}
        position={[0.6, 0, length / 2 - 4.3]}
        text={"Shangjie Zhou"}
      />
    </group>
  );
}
