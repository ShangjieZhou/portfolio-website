import bukaLogo from "../../assets/buka.png";
import bukaPic from "../../assets/buka-intro.jpg";
import kubeLogo from "../../assets/kube.png";
import azure from "../../assets/azure.png";
import mysqlLogo from "../../assets/mysql.svg";
import golangText from "../../assets/golang.png";
import golangCat from "../../assets/golang-doll.png";
import kafka from "../../assets/kafka.png";
import terra from "../../assets/terra.png";
import python from "../../assets/python.png";
import Wall from "../Wall";
import { subSection, SECNAME } from "../../features/gallery/gallerySlice";
import { RigidBody } from "@react-three/rapier";
import Bench from "../Bench";
import { PURPLE } from "../../Gallery";
import { Image, Text } from "@react-three/drei";
import MyText, { FONT } from "../MyText";
import MyImage from "../MyImage";

export default function WorkExp1({ width }) {
  return (
    <>
      <Bench
        depth={(subSection[SECNAME.BUKA][0] + subSection[SECNAME.BUKA][3]) / 2}
        length={subSection[SECNAME.BUKA][0] - subSection[SECNAME.BUKA][3] + 1.8}
      />

      <Wall
        galleryWidth={width}
        onLeft={false}
        depth={subSection[SECNAME.BUKA][0]}
        colour={PURPLE}
      >
        <MyImage scale={[0.6, 0.6]} position={[0, 0.1, 0.06]} src={bukaLogo} />
        <MyText size={0.11} font={FONT.Cute} position={[-0.55, -0.3]}>
          Software Engineer
        </MyText>
        <MyText
          url={"https://www.linkedin.com/company/pt-bukalapak-com/"}
          size={0.1}
          font={FONT.Reg}
          position={[-0.55, -0.4]}
        >
          @Bukalapak
        </MyText>
        <MyText size={0.09} font={FONT.Story} position={[-0.55, -0.51]}>
          Jan 2023 - Present
        </MyText>
      </Wall>
      <Wall
        galleryWidth={width}
        onLeft={false}
        depth={subSection[SECNAME.BUKA][1]}
        colour={PURPLE}
      >
        <MyImage src={bukaPic} scale={[1.1, 0.62]} position={[0, 0.2, 0.06]} />
        <MyText
          width={1.2}
          size={0.09}
          font={FONT.Cute}
          position={[-0.6, -0.4]}
        >
          Bukalapak is an Indonesian e-commerce tech unicorn with over 100
          million users and 13.5 million MSMES.
        </MyText>
      </Wall>
      <Wall
        galleryWidth={width}
        onLeft={false}
        depth={subSection[SECNAME.BUKA][2]}
        colour={PURPLE}
      >
        <MyImage src={mysqlLogo} scale={[0.6, 0.4]} position={[-0.28, 0.32]} />
        <MyImage src={golangCat} scale={[0.16, 0.21]} position={[0.16, 0.34]} />
        <MyImage src={golangText} scale={[0.45, 0.2]} position={[0.36, 0.34]} />
        <MyImage src={python} scale={[0.6, 0.18]} position={[-0.26, 0.03]} />
        <MyImage src={kafka} scale={[0.46, 0.21]} position={[0.32, 0.05]} />
        <MyText
          width={1.2}
          size={0.09}
          font={FONT.Cute}
          position={[-0.58, -0.36]}
        >
          We developed complex Microservices that support the reliability of our
          e-commerce platforms internally
        </MyText>
      </Wall>
      <Wall
        galleryWidth={width}
        onLeft={false}
        depth={subSection[SECNAME.BUKA][3]}
        colour={PURPLE}
      >
        <MyImage src={kubeLogo} scale={[1.14, 0.19]} position={[0, 0.32]} />
        <MyImage src={terra} scale={[0.52, 0.12]} position={[-0.3, 0]} />
        <MyImage src={azure} scale={[0.54, 0.15]} position={[0.3, 0]} />
        <MyText
          width={1.2}
          size={0.09}
          font={FONT.Cute}
          position={[-0.58, -0.36]}
        >
          We build infrastructure that can flexibly
          handle millions of requests every day.
        </MyText>
      </Wall>
    </>
  );
}
