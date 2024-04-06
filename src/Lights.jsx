import { SpotLight } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

const INTENSITY = 2;
const spotLightHeight = 1;
const zShift = 0.72;
const yShift = 0.28;
import { SECNAME, subSection } from "./features/gallery/gallerySlice.js";

export default function Lights() {
  const lightFromLeft = useRef();
  const lightFromRight = useRef();

  const lightOne = useRef();
  const lightTwo = useRef();
  const lightThree = useRef();
  const lightFour = useRef();
  const lightFive = useRef();

  useEffect(() => {
    lightOne.current.target.position.set(
      2,
      spotLightHeight,
      subSection[SECNAME.BUKA][0]
    );
    lightTwo.current.target.position.set(
      -2,
      spotLightHeight,
      subSection[SECNAME.NAVBIT][0]
    );
    lightThree.current.target.position.set(
      2,
      spotLightHeight,
      subSection[SECNAME.UNI][0]
    );
    lightFour.current.target.position.set(
      -2,
      spotLightHeight,
      subSection[SECNAME.HIGHSCHOOL][0]
    );
    lightFive.current.target.position.set(
      2,
      spotLightHeight,
      subSection[SECNAME.NPM][0]
    );
  }, []);

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
      <SpotLight
        ref={lightOne}
        position={[1.8, yShift, subSection[SECNAME.BUKA][0] + zShift]}
        penumbra={0.5}
        distance={1}
        angle={0.8}
        anglePower={8}
        intensity={1}
        opacity={0.2}
      />
      <SpotLight
        ref={lightTwo}
        position={[-1.8, yShift, subSection[SECNAME.NAVBIT][0] + zShift]}
        penumbra={0.5}
        distance={1}
        angle={0.8}
        anglePower={8}
        intensity={1}
        opacity={0.2}
      />
      <SpotLight
        ref={lightThree}
        position={[1.8, yShift, subSection[SECNAME.UNI][0] + zShift]}
        penumbra={0.5}
        distance={1}
        angle={0.8}
        anglePower={8}
        intensity={1}
        opacity={0.2}
      />
      <SpotLight
        ref={lightFour}
        position={[-1.8, yShift, subSection[SECNAME.HIGHSCHOOL][0] + zShift]}
        penumbra={0.5}
        distance={1}
        angle={0.8}
        anglePower={8}
        intensity={1}
        opacity={0.2}
      />
      <SpotLight
        ref={lightFive}
        position={[1.8, yShift, subSection[SECNAME.NPM][0] + zShift]}
        penumbra={0.5}
        distance={1}
        angle={0.8}
        anglePower={8}
        intensity={1}
        opacity={0.2}
      />
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
      <ambientLight intensity={1} />
    </>
  );
}
