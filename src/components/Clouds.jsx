import { Cloud, Clouds } from "@react-three/drei";
import * as THREE from "three";

export default function MyClouds() {
  return (
    <Clouds position={[0, 0.8, -6]} material={THREE.MeshBasicMaterial}>
      <Cloud
        scale={0.1}
        position-x={0.5}
        segments={60}
        bounds={[12, 5, 2]}
        volume={10}
        color="mediumpurple"
      />
      <Cloud
        scale={0.1}
        position-x={-0.5}
        segments={60}
        bounds={[12, 5, 1]}
        volume={10}
        color="#EA4D82"
      />
    </Clouds>
  );
}
