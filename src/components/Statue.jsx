import { Float } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { CylinderGeometry } from "three";

export default function Statue({ color, x, z }) {
  return (
    <group position={[x, 0.8, z]} scale={0.1}>
      <RigidBody>
        <mesh castShadow>
          <cylinderGeometry args={[1, 1, 8, 8]}/>
          <meshStandardMaterial flatShading color={"white"} />
        </mesh>
      </RigidBody>
      <Float position={[0, 1.6, 0]}>
        <mesh>
          <tetrahedronGeometry args={[1, 2]} />
          <meshStandardMaterial flatShading color={color} />
        </mesh>
      </Float>
    </group>
  );
}
