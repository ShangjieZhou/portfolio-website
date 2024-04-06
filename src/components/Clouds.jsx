import { Cloud, Clouds } from "@react-three/drei";
import * as THREE from "three";

export default function MyClouds() {
  return (
    <Clouds position={[0, 0.8, -5]} material={THREE.MeshBasicMaterial}>
      <Cloud
        scale={0.1}
        position-x={-0.7}
        position-y={0.1}
        segments={60}
        bounds={[10, 5, 1]}
        volume={12}
        color="#EA4D82"
      />
      <Cloud
        scale={0.1}
        position-x={0}
        position-y={0.3}
        segments={80}
        bounds={[7, 6, 1]}
        volume={12}
        color="#ff9258"
      />
      <Cloud
        scale={0.1}
        position-x={0.7}
        position-y={0.1}
        segments={60}
        bounds={[11, 4, 2]}
        volume={14}
        color="mediumpurple"
      />
    </Clouds>
  );
}
