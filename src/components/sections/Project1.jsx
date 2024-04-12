import Wall from "../Wall";
import { subSection, SECNAME } from "../../features/gallery/gallerySlice";
import npm from "../../assets/npm.png";
import annotate from "../../assets/annotate.png";
import Bench from "../Bench";
import { ORANGE } from "../../Gallery";
import MyImage from "../MyImage";
import MyText, { FONT } from "../MyText";

export default function Project1({ width }) {
  return (
    <>
      <Bench
        depth={(subSection[SECNAME.NPM][0] + subSection[SECNAME.NPM][1]) / 2}
        length={subSection[SECNAME.NPM][0] - subSection[SECNAME.NPM][1] + 1.5}
      />
      <Wall
        galleryWidth={width}
        onLeft={false}
        depth={subSection[SECNAME.NPM][0]}
        colour={ORANGE}
      >
        <MyImage scale={[1, 0.39]} src={npm} position={[-0.08, 0.2]} />
        <MyText
          url={"https://www.npmjs.com/package/simple-annotate-zsj"}
          width={1.2}
          size={0.1}
          font={FONT.Gin}
          position={[-0.58, -0.12]}
        >
          Simple Annotator
        </MyText>
        <MyText
          url={"https://www.npmjs.com/package/simple-annotate-zsj"}
          size={0.1}
          font={FONT.Reg}
          position={[-0.58, -0.24]}
        >
          @npmjs.com
        </MyText>
        <MyText
          width={1.22}
          size={0.09}
          font={FONT.Story}
          position={[-0.58, -0.44]}
        >
          - A react component library that enables you to annotate and measure
          images with svg lines
        </MyText>
      </Wall>
      <Wall
        galleryWidth={width}
        onLeft={false}
        depth={subSection[SECNAME.NPM][1]}
        colour={ORANGE}
      >
        <MyImage scale={[1.2, 0.64]} src={annotate} position={[0, 0.24]} />
        <MyText
          width={1.2}
          size={0.09}
          font={FONT.Cute}
          position={[-0.55, -0.24]}
        >
          - Line annotation with number of pixels as unit
        </MyText>
        <MyText
          width={1.2}
          size={0.09}
          font={FONT.Cute}
          position={[-0.55, -0.44]}
        >
          - Image zooming, scaling and panning
        </MyText>
      </Wall>
    </>
  );
}
