import Wall from "../Wall";
import hills from "../../assets/hills.png";
import group from "../../assets/hills-group.jpeg";
import {
  subSection,
  SECNAME,
  sideMap,
} from "../../features/gallery/gallerySlice";
import Bench from "../Bench";
import { PINK } from "../../Gallery";
import MyImage from "../MyImage";
import MyText, { FONT } from "../MyText";

export default function Education2({ width }) {
  return (
    <>
      <Bench
        depth={
          (subSection[SECNAME.HIGHSCHOOL][0] +
            subSection[SECNAME.HIGHSCHOOL][1]) /
          2
        }
        length={
          subSection[SECNAME.HIGHSCHOOL][0] -
          subSection[SECNAME.HIGHSCHOOL][1] +
          1.8
        }
      />
      <Wall
        galleryWidth={width}
        onLeft={true}
        depth={subSection[SECNAME.HIGHSCHOOL][0]}
        colour={PINK}
      >
        <MyImage scale={[0.7, 0.7]} src={hills} position={[0, 0.24]} />
        <MyText
          width={1.2}
          size={0.09}
          font={FONT.Cute}
          position={[-0.58, -0.22]}
        >
          High School (Year 10-12)
        </MyText>
        <MyText
          url={"https://www.linkedin.com/company/hills-adventist-college/"}
          size={0.1}
          font={FONT.Reg}
          position={[-0.58, -0.32]}
        >
          @Hills Adventist College
        </MyText>
        <MyText size={0.09} font={FONT.Story} position={[-0.58, -0.43]}>
          Oct 2015 - Nov 2017
        </MyText>
      </Wall>
      <Wall
        galleryWidth={width}
        onLeft={true}
        depth={subSection[SECNAME.HIGHSCHOOL][1]}
        colour={PINK}
      >
        <MyImage scale={[1, 0.64]} src={group} position={[0, 0.24]} />
        <MyText size={0.09} font={FONT.Cute} position={[-0.55, -0.2]}>
          - HSC ATAR of 96.5
        </MyText>
        <MyText
          width={1.2}
          size={0.09}
          font={FONT.Cute}
          position={[-0.55, -0.4]}
        >
          - Studied Math Extension 1 & 2, English General, Physics and Chemistry
        </MyText>
        <MyText width={1.2} size={0.09} font={FONT.Cute} position={[-0.55, -0.6]}>
          - Met a lot of lovely people
        </MyText>
      </Wall>
    </>
  );
}
