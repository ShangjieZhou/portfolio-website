import Lights from "./Lights.jsx";
import Playground from "./components/Playground.jsx";
import Wall from "./components/Wall.jsx";
import SectionText from "./components/SectionText.jsx";
import Player from "./components/Player.jsx";
import { Physics } from "@react-three/rapier";
import WorkExp1 from "./components/sections/WorkExp1.jsx";
import { SECNAME, subSection } from "./features/gallery/gallerySlice.js";
import MyClouds from "./components/Clouds.jsx";
import WorkExp2 from "./components/sections/WorkExp2.jsx";
import { OrbitControls, SpotLight, useScroll } from "@react-three/drei";
import Education1 from "./components/sections/Education1.jsx";
import Education2 from "./components/sections/Education2.jsx";
import Project1 from "./components/sections/Project1.jsx";
import Info from "./components/sections/Info.jsx";
import Thinker from "./components/Thinker.jsx";
import { useGLTF } from "@react-three/drei";
import Statue from "./components/Statue.jsx";
import { useEffect, useRef, useState } from "react";
import { SpotLightHelper, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";

const GALLERYWIDTH = 4;
const GALLERYLENGTH = 57;
export const PURPLE = "#a080ff";
export const PINK = "#a080ff";
export const ORANGE = "#a080ff";

const pos = [-1.1, 0.1, -11.3]

export default function Gallery() {
  const { nodes } = useGLTF("/12sculptures.gltf");

  const light = useRef();

  useEffect(() => {
    light.current.target.position.set(-1.42, 1, -12);
  }, []);

  return (
    <>
      {/* <OrbitControls /> */}
      <Physics debug={false}>
        <Player />
        <MyClouds />
        <Lights />
        <Playground width={GALLERYWIDTH} length={GALLERYLENGTH} />

        <mesh position={[-1.42, 1, -12]}>
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshMatcapMaterial color={"red"} />
        </mesh>
        <mesh position={pos}>
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshMatcapMaterial color={"red"} />
        </mesh>
        {/* EXPERIENCE ----- */}
        <SpotLight
          ref={light}
          position={pos}
          penumbra={0.5}
          distance={10}
          angle={0.45}
          attenuation={10}
          anglePower={4}
          intensity={5}
          opacity={0.1}
        />
        <Statue
          position={[-1.4, 0, subSection[SECNAME.BUKA][0] + 3]}
          color="#b7a2df"
          rotation={0.4}
          baseX={0.03}
          scale={0.02}
          geometry={nodes.David.geometry}
        />
        <SectionText
          depth={subSection[SECNAME.BUKA][0] + 1.5}
          text={"EXPERIENCE"}
          size={0.2}
          colour={PURPLE}
        />
        <WorkExp1 width={GALLERYWIDTH} />
        <Statue
          position={[1.5, 0, subSection[SECNAME.NAVBIT][0] + 0.8]}
          color="#C8B8E5"
          rotation={-1.4}
          baseX={0.03}
          scale={0.014}
          geometry={nodes.The_Thinker.geometry}
        />
        <WorkExp2 width={GALLERYWIDTH} />

        {/* EDUCATION ----- */}
        <Statue
          position={[-1.4, 0, subSection[SECNAME.UNI][0] + 2.4]}
          color="#ffc3d7"
          rotation={0.5}
          baseX={0.03}
          scale={0.02}
          geometry={nodes.NIKE_OF_SAMOTHRACE.geometry}
        />
        <SectionText
          depth={subSection[SECNAME.UNI][0] + 1.5}
          text={"EDUCATION"}
          size={0.2}
          colour={"#EA4D82"}
        />
        <Education1 width={GALLERYWIDTH} />
        <Education2 width={GALLERYWIDTH} />

        {/* PROJECTS ----- */}
        <SectionText
          depth={subSection[SECNAME.NPM][0] + 1.5}
          text={"PROJECTS"}
          size={0.2}
          colour={"#ff9258"}
        />
        <Project1 width={GALLERYWIDTH} />

        {/* Last Wall Section */}
        <Info depth={GALLERYLENGTH} />
      </Physics>
    </>
  );
}

useGLTF.preload("/12sculptures.gltf");
