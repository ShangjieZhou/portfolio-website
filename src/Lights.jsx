import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const INTENSITY = 3;

export default function Lights() {
  const lightFromLeft = useRef();
  const lightFromRight = useRef();

  useFrame((state) => {
    lightFromLeft.current.position.z = state.camera.position.z + 1 - 4;
    lightFromLeft.current.target.position.z = state.camera.position.z - 4;
    lightFromLeft.current.target.updateMatrixWorld();

    lightFromRight.current.position.z = state.camera.position.z + 1 - 4;
    lightFromRight.current.target.position.z = state.camera.position.z - 4;
    lightFromRight.current.target.updateMatrixWorld();
  });

  return (
    <>
      <directionalLight
        ref={lightFromRight}
        castShadow
        position={[1.6, 3, 1]}
        intensity={INTENSITY}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
      />
      <directionalLight
        ref={lightFromLeft}
        castShadow
        position={[-1.6, 3, 1]}
        intensity={INTENSITY}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
      />
      <ambientLight intensity={1.6} />
    </>
  );
}
