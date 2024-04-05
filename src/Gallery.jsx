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
import { OrbitControls } from "@react-three/drei";
import Education1 from "./components/sections/Education1.jsx";
import Education2 from "./components/sections/Education2.jsx";
import Project1 from "./components/sections/Project1.jsx";
import Info from "./components/sections/Info.jsx";

const GALLERYWIDTH = 4;
const GALLERYLENGTH = 57;

export default function Gallery() {
  return (
    <>
      {/* <OrbitControls /> */}
      <Physics debug={false}>
        <Player />
        <MyClouds />
        <Lights />
        <Playground width={GALLERYWIDTH} length={GALLERYLENGTH} />

        {/* EXPERIENCE ----- */}
        <SectionText
          depth={subSection[SECNAME.BUKA][0] + 1.5}
          text={"EXPERIENCE"}
          size={0.2}
          colour={"mediumpurple"}
        />
        <WorkExp1 width={GALLERYWIDTH} />
        <WorkExp2 width={GALLERYWIDTH} />

        {/* EDUCATION ----- */}
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
