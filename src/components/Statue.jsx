import React from "react";
import { CylinderGeometry, MeshStandardMaterial } from "three";
import { RigidBody } from "@react-three/rapier";

export default function Statue({
  position,
  geometry,
  rotation,
  scale,
  baseX,
  color,
  lightRef,
}) {
  return (
    <RigidBody>
      <group rotation-y={rotation} dispose={null} position={position}>
        <mesh
          position={[baseX, 0, 0]}
          scale={0.05}
          geometry={new CylinderGeometry(6, 6, 2, 10, 1)}
          material={new MeshStandardMaterial({ color: color })}
        />
        <mesh
          ref={lightRef}
          position-y={0.04}
          scale={scale}
          castShadow
          receiveShadow
          geometry={geometry}
          material={
            new MeshStandardMaterial({ color: color, flatShading: true })
          }
        />
      </group>
    </RigidBody>
  );
}
