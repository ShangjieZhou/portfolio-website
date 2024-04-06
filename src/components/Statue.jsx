import React from "react";
import { CylinderGeometry, MeshStandardMaterial } from "three";
import { RigidBody } from "@react-three/rapier";

export default function Statue({
  position,
  geometry,
  rotation,
  scale,
  baseX,
  baseZ = 0,
  color,
  lightRef,
}) {
  return (
    <RigidBody>
      <group rotation-y={rotation} dispose={null} position={position}>
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
