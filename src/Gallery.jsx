import Lights from "./Lights.jsx";
import Playground from "./components/Playground.jsx";
import Wall from "./components/Wall.jsx";
import SectionText from "./components/SectionText.jsx";
import Player from "./components/Player.jsx";
import { Physics } from "@react-three/rapier";
import { OrbitControls } from "@react-three/drei";
import WorkExp1 from "./components/sections/WorkExp1.jsx";

const LEFT = Math.PI;
const RIGHT = 0;

const GALLERYWIDTH = 4;

export default function Gallery() {
  return (
    <>
      {/* <OrbitControls /> */}
      <Physics debug={false}>
        <Lights />
        <Playground length={20} />

        {/* WORK EXPERIENCE ----- */}
        <SectionText
          depth={-5}
          text={"EXPERIENCE"}
          size={0.2}
          colour={"mediumpurple"}
        />

        <Wall
          galleryWidth={GALLERYWIDTH}
          onLeft={true}
          depth={-10}
          colour="mediumpurple"
        >
          <WorkExp1 />
        </Wall>
        {/* <Wall rotation={RIGHT} x={-2} z={-8} colour="mediumpurple">
          <SectionDetail
            title={"Bukalapak"}
            dotpoints={[
              "Developed microservices in trust and fraud team",
              "bla bla bla",
            ]}
          />
        </Wall> */}
        <Player walls={[-10, -18]} />
      </Physics>

      {/* <axesHelper args={[1]} /> */}
    </>
  );
}
