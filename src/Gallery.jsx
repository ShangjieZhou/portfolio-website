import Lights from "./Lights.jsx";
import Playground from "./components/Playground.jsx";
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
import { useGLTF } from "@react-three/drei";
import Statue from "./components/Statue.jsx";
import FloorLamp from "./components/FloorLamp.jsx";

const GALLERYWIDTH = 4;
const GALLERYLENGTH = 57;
export const PURPLE = "#a080ff";
export const PINK = "#ff629c";
export const ORANGE = "#fca36b";

export const statuePurple = "#e1d0ff";
export const statuePink = "#ffd4f3";
export const statueOrange = "#ffe0d4";

export default function Gallery() {
  const { nodes } = useGLTF("/12sculptures.gltf");

  return (
    <>
      {/* <OrbitControls /> */}
      <Physics debug={false}>
        <Player />
        <MyClouds />
        <Lights />
        <Playground width={GALLERYWIDTH} length={GALLERYLENGTH} />
        <Statue
          position={[-0.5, 0, -3.4]}
          color={"#f0f0f0"}
          rotation={0.8}
          baseX={0.03}
          scale={0.012}
          geometry={nodes.The_Thinker.geometry}
        />
        {/* EXPERIENCE */}
        <Statue
          position={[-1.4, 0, subSection[SECNAME.BUKA][0] + 2.4]}
          color={statuePurple}
          rotation={0.5}
          baseX={0.03}
          scale={0.02}
          geometry={nodes.NIKE_OF_SAMOTHRACE.geometry}
        />
        <SectionText
          depth={subSection[SECNAME.BUKA][0] + 1.5}
          text={"EXPERIENCE"}
          size={0.2}
          colour={PURPLE}
        />
        <FloorLamp
          color={statuePurple}
          rotation={-1.8}
          position={[1.85, 0.04, -14.1]}
        />
        <WorkExp1 width={GALLERYWIDTH} />
        <Statue
          position={[1.5, 0, subSection[SECNAME.NAVBIT][0] + 2]}
          color={statuePurple}
          rotation={-1.4}
          baseX={0.04}
          baseZ={-0.1}
          scale={0.015}
          geometry={nodes.The_Thinker.geometry}
        />
        <FloorLamp
          color={statuePurple}
          rotation={-1.35}
          position={[-1.85, 0.04, -24.1]}
        />
        <WorkExp2 width={GALLERYWIDTH} />

        {/* EDUCATION ----- */}
        <Statue
          position={[-1.4, 0, subSection[SECNAME.UNI][0] + 2.4]}
          color={statuePink}
          rotation={0.4}
          baseX={0.03}
          scale={0.02}
          geometry={nodes.David.geometry}
        />
        <SectionText
          depth={subSection[SECNAME.UNI][0] + 1.5}
          text={"EDUCATION"}
          size={0.2}
          colour={PINK}
        />
        <FloorLamp
          color={statuePink}
          rotation={-1.8}
          position={[1.85, 0.04, -34.1]}
        />
        <Education1 width={GALLERYWIDTH} />
        <FloorLamp
          color={statuePink}
          rotation={-1.35}
          position={[-1.85, 0.04, -41.1]}
        />
        <Statue
          position={[1.4, 0, subSection[SECNAME.HIGHSCHOOL][0] + 2.4]}
          color={statuePink}
          rotation={-0.4}
          baseX={-0.02}
          scale={0.02}
          geometry={nodes.Venus_Di_Milo.geometry}
        />
        <Education2 width={GALLERYWIDTH} />

        {/* PROJECTS ----- */}
        <Statue
          position={[-1.4, 0, subSection[SECNAME.NPM][0] + 2.4]}
          color={statueOrange}
          rotation={-0.1}
          baseX={-0.02}
          scale={0.02}
          geometry={nodes.The_Discus_Thrower.geometry}
        />
        <SectionText
          depth={subSection[SECNAME.NPM][0] + 1.5}
          text={"PROJECTS"}
          size={0.2}
          colour={"#ff9258"}
        />
        <FloorLamp
          color={statueOrange}
          rotation={-1.8}
          position={[1.85, 0.04, -50.1]}
        />
        <Project1 width={GALLERYWIDTH} />

        {/* Last Wall Section */}
        <Info depth={GALLERYLENGTH} />
      </Physics>
    </>
  );
}

useGLTF.preload("/12sculptures.gltf");
