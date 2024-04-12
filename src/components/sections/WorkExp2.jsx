import Wall from "../Wall";
import navbit from "../../assets/navbit.png";
import react from "../../assets/react.png";
import mui from "../../assets/mui.png";
import svg from "../../assets/svg.png";
import scss from "../../assets/scss.png";
import { subSection, SECNAME } from "../../features/gallery/gallerySlice";
import Bench from "../Bench";
import { PURPLE } from "../../Gallery";
import MyImage from "../MyImage";
import MyText, { FONT } from "../MyText";

export default function WorkExp2({ width }) {
  return (
    <>
      <Bench
        depth={
          (subSection[SECNAME.NAVBIT][0] + subSection[SECNAME.NAVBIT][1]) / 2
        }
        length={
          subSection[SECNAME.NAVBIT][0] - subSection[SECNAME.NAVBIT][1] + 1.8
        }
      />
      <Wall
        galleryWidth={width}
        onLeft={true}
        depth={subSection[SECNAME.NAVBIT][0]}
        colour={PURPLE}
      >
        <MyImage scale={[0.8, 0.8]} src={navbit} position={[0, 0.2]} />
        <MyText size={0.11} font={FONT.Cute} position={[-0.58, -0.3]}>
          Frontend Developer
        </MyText>
        <MyText url={"https://www.linkedin.com/company/navbit-surgical/"} size={0.1} font={FONT.Reg} position={[-0.58, -0.4]}>
          @Navbit
        </MyText>
        <MyText size={0.09} font={FONT.Story} position={[-0.58, -0.51]}>
          Oct 2022 - Apr 2023
        </MyText>
      </Wall>
      <Wall
        galleryWidth={width}
        onLeft={true}
        depth={subSection[SECNAME.NAVBIT][1]}
        colour={PURPLE}
      >
        <MyImage src={mui} scale={[0.45, 0.36]} position={[-0.26, 0.32]} />
        <MyImage src={svg} scale={[0.28, 0.32]} position={[0.3, 0.32]} />
        <MyImage src={react} scale={[0.54, 0.37]} position={[-0.24, 0]} />
        <MyImage src={scss} scale={[0.3, 0.23]} position={[0.3, -0.02]} />
        <MyText
          width={1.2}
          size={0.09}
          font={FONT.Cute}
          position={[-0.55, -0.38]}
        >
          In charge of developing the frontend of a Web App that supports SVG
          annotations on images
        </MyText>
      </Wall>
    </>
  );
}
