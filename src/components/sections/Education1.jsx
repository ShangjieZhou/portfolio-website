import Wall from "../Wall";
import unsw from "../../assets/unsw.png";
import grad from "../../assets/grad.jpeg";
import { subSection, SECNAME } from "../../features/gallery/gallerySlice";
import Bench from "../Bench";
import { PINK } from "../../Gallery";
import MyImage from "../MyImage";
import MyText, { FONT } from "../MyText";

export default function Education1({ width }) {
  return (
    <>
      <Bench
        depth={(subSection[SECNAME.UNI][0] + subSection[SECNAME.UNI][1]) / 2}
        length={subSection[SECNAME.UNI][0] - subSection[SECNAME.UNI][1] + 1.8}
      />
      <Wall
        galleryWidth={width}
        onLeft={false}
        depth={subSection[SECNAME.UNI][0]}
        colour={PINK}
      >
        <MyImage scale={[0.8, 0.8]} src={unsw} position={[0, 0.24]} />
        <MyText
          width={1.2}
          size={0.1}
          font={FONT.Cute}
          position={[-0.58, -0.25]}
        >
          Software Engineering (Honours)
        </MyText>
        <MyText
          url={"https://www.linkedin.com/school/unsw/"}
          size={0.1}
          font={FONT.Reg}
          position={[-0.58, -0.4]}
        >
          @University of New South Wales
        </MyText>
        <MyText size={0.09} font={FONT.Story} position={[-0.58, -0.51]}>
          Feb 2018 - Feb 2023
        </MyText>
      </Wall>
      <Wall
        galleryWidth={width}
        onLeft={false}
        depth={subSection[SECNAME.UNI][1]}
        colour={PINK}
      >
        <MyImage scale={[0.84, 0.84]} src={grad} position={[0, 0.16]} />
        <MyText size={0.09} font={FONT.Cute} position={[-0.6, -0.36]}>
          First Class Honours
        </MyText>
        <MyText size={0.09} font={FONT.Cute} position={[-0.6, -0.46]}>
          Dean's Honours List of 2021
        </MyText>
        <MyText size={0.09} font={FONT.Cute} position={[-0.6, -0.56]}>
          Dean's Honours List of 2022
        </MyText>
      </Wall>
    </>
  );
}
