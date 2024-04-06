import React from "react";
import { useGLTF } from "@react-three/drei";
import { CylinderGeometry, MeshStandardMaterial } from "three";
import { RigidBody } from "@react-three/rapier";

export default function David({ position }) {
  const { nodes } = useGLTF("/12sculptures.gltf");
  return (
    <RigidBody>
      <group rotation-y={0.4} dispose={null} position={position}>
        <mesh
          position={[0.03, 0, 0]}
          scale={0.05}
          geometry={new CylinderGeometry(6, 6, 2, 10, 1)}
          material={new MeshStandardMaterial({ color: "#C8B8E5", flatShading: true })}
        />
        <mesh
          position-y={0.04}
          scale={0.02}
          castShadow
          receiveShadow
          geometry={nodes.David.geometry}
          material={
            new MeshStandardMaterial({ color: "#C8B8E5", flatShading: true })
          }
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/12sculptures.gltf");
