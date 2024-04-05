import { Cloud, Clouds } from "@react-three/drei";
import * as THREE from "three";

export default function MyClouds() {
  return (
    <Clouds position={[0, 0.8, -5]} material={THREE.MeshBasicMaterial}>
      <Cloud
        scale={0.1}
        position-x={0.6}
        position-y={0.5}
        segments={60}
        bounds={[12, 4, 2]}
        volume={12}
        color="mediumpurple"
      />
      <Cloud
        scale={0.1}
        position-x={-0.7}
        position-y={0.4}
        segments={60}
        bounds={[10, 5, 1]}
        volume={12}
        color="#EA4D82"
      />
      <Cloud
        scale={0.1}
        position-x={0}
        segments={80}
        bounds={[16, 3, 1]}
        volume={12}
        color="#ff9258"
      />
    </Clouds>
  );
}
