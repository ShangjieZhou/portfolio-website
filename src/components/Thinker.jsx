import React from "react";
import { useGLTF } from "@react-three/drei";
import { CylinderGeometry, MeshStandardMaterial } from "three";
import { RigidBody } from "@react-three/rapier";

export default function Thinker({ position }) {
  const { nodes } = useGLTF("/12sculptures.gltf");
  console.log(nodes);
  return (
    <RigidBody>
      <group rotation-y={0.7} dispose={null} position={position}>
        <mesh
          position={[0.03, 0, 0]}
          scale={0.05}
          geometry={new CylinderGeometry(6, 6, 2, 10, 1)}
          material={new MeshStandardMaterial({ color: "#ffc3d7" })}
        />
        <mesh
          position-y={0.04}
          scale={0.014}
          castShadow
          receiveShadow
          geometry={nodes.The_Thinker.geometry}
          material={
            new MeshStandardMaterial({ color: "#ffd2e0", flatShading: true })
          }
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/12sculptures.gltf");
