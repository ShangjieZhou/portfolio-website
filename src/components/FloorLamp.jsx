import { RigidBody } from "@react-three/rapier";
import { CircleGeometry, CylinderGeometry, MeshStandardMaterial } from "three";

const bottom = new CylinderGeometry(0.5, 0.8, 2, 16, 1);
const top = new CylinderGeometry(1.2, 0.5, 2.8, 32, 1);
const lightGeo = new CircleGeometry(1, 16);
const lightMat = new MeshStandardMaterial({
  color: "white",
  emissive: "white",
  emissiveIntensity: 10,
});

export default function FloorLamp({ position, rotation, color }) {
  const mat = new MeshStandardMaterial({ color: color, flatShading: true });

  return (
    <RigidBody type="kinematicPosition">
      <group scale={0.06} rotation-y={rotation} position={position}>
        <mesh position-y={1} geometry={bottom} material={mat} />
        <group rotation-z={0.9} position={[0, 2.6, 0]}>
          <mesh geometry={top} material={mat} />
          <mesh
            position-y={1.42}
            rotation-x={-Math.PI * 0.5}
            // rotation={[Math.PI, 0, 0]}
            geometry={lightGeo}
            material={lightMat}
          />
        </group>
      </group>
    </RigidBody>
  );
}
