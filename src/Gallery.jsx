import Lights from "./Lights.jsx";
import Playground from "./components/Playground.jsx";
import Wall from "./components/Wall.jsx";
import SectionText from "./components/SectionText.jsx";
import Player from "./components/Player.jsx";
import { Physics } from "@react-three/rapier";
import WorkExp1 from "./components/sections/WorkExp1.jsx";
import { SUBSECTION } from "./features/gallery/gallerySlice.js";
import MyClouds from "./components/Clouds.jsx";
import WorkExp2 from "./components/sections/WorkExp2.jsx";
import { OrbitControls } from "@react-three/drei";
import Education1 from "./components/sections/Education1.jsx";

const GALLERYWIDTH = 4;
const GALLERYLENGTH = 50;

export default function Gallery() {
  const calcTextPosition = (sec1, sec2) => (sec1 + sec2) / 2;

  return (
    <>
      {/* <OrbitControls /> */}
      <Physics debug={false}>
        {/* <MyClouds /> */}
        <Lights />
        <Playground width={GALLERYWIDTH} length={GALLERYLENGTH} />
        {/* WORK EXPERIENCE ----- */}
        <SectionText
          depth={-15}
          text={"EXPERIENCE"}
          size={0.2}
          colour={"mediumpurple"}
        />
        <WorkExp1 width={GALLERYWIDTH} />
        <WorkExp2 width={GALLERYWIDTH} />
        <Education1 width={GALLERYWIDTH} />
        {/* <Wall
          galleryWidth={GALLERYWIDTH}
          onLeft={false}
          depth={SUBSECTION.NAVBIT}
          colour="mediumpurple"
        >
          <WorkExp1 />
        </Wall> */}
        {/* <SectionText
          depth={calcTextPosition(SUBSECTION.NAVBIT, SUBSECTION.UNI)}
          text={"PROJECTS"}
          size={0.2}
          colour={"#EA4D82"}
        /> */}
        {/* <Wall
          galleryWidth={GALLERYWIDTH}
          onLeft={true}
          depth={SUBSECTION.UNI}
          colour="#EA4D82"
        >
          <WorkExp1 />
        </Wall>
        <Wall
          galleryWidth={GALLERYWIDTH}
          onLeft={false}
          depth={SUBSECTION.HIGHSCHOOL}
          colour="#EA4D82"
        >
          <WorkExp1 />
        </Wall> */}
        <Player walls={[-26]} />
      </Physics>

      {/* <axesHelper args={[1]} /> */}
    </>
  );
}
