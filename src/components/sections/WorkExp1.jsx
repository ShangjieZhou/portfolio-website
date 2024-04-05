import "../../style.scss";
import bukaLogo from "../../assets/buka.png";
import bukaPic from "../../assets/buka-intro.jpg";
import kubeLogo from "../../assets/kube.png";
import azure from "../../assets/azure.png";
import mysqlLogo from "../../assets/mysql.png";
import golangText from "../../assets/golang.png";
import golangCat from "../../assets/golang-doll.png";
import kafka from "../../assets/kafka.png";
import terra from "../../assets/terra.png";
import python from "../../assets/python.png";
import Wall from "../Wall";
import { subSection, SECNAME } from "../../features/gallery/gallerySlice";
import "./WorkExp.scss";
import { RigidBody } from "@react-three/rapier";
import Bench from "../Bench";

export default function WorkExp1({ width }) {
  return (
    <>
      <Bench
        depth={(subSection[SECNAME.BUKA][0] + subSection[SECNAME.BUKA][3]) / 2}
        length={subSection[SECNAME.BUKA][0] - subSection[SECNAME.BUKA][3] + 1.8}
      />

      <Wall
        galleryWidth={width}
        onLeft={true}
        depth={subSection[SECNAME.BUKA][0]}
        colour="mediumpurple"
      >
        <div className="section-detail work-section">
          <img src={bukaLogo} alt="" />
          <div className="company-title">
            <div className="company-subtitle">
              <h1>Software Engineer</h1>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/pt-bukalapak-com/"
              >
                @Bukalapak
              </a>
              <h4>Jan 2023 - Present</h4>
            </div>
          </div>
        </div>
      </Wall>
      <Wall
        galleryWidth={width}
        onLeft={true}
        depth={subSection[SECNAME.BUKA][1]}
        colour="mediumpurple"
      >
        <div className="section-detail work-section buka-intro">
          <img src={bukaPic} alt="" />
          <p id="exp-description-lang">
            - Bukalapak is an Indonesian e-commerce tech unicorn with over 100
            million users and 13.5 million MSMES.
          </p>
        </div>
      </Wall>
      <Wall
        galleryWidth={width}
        onLeft={true}
        depth={subSection[SECNAME.BUKA][2]}
        colour="mediumpurple"
      >
        <div className="section-detail work-section collage">
          <img id="mysql" src={mysqlLogo} alt="" />
          <img id="go-text" src={golangText} alt="" />
          <img id="go-cat" src={golangCat} alt="" />
          <img id="kafka" src={kafka} alt="" />
          <img id="python" src={python} alt="" />
          <p id="exp-description-lang">
            - In Trust-and-Safety team, I develope and maintain complex
            Microservices that support the reliability of our e-commerce
            platforms internally.
          </p>
        </div>
      </Wall>
      <Wall
        galleryWidth={width}
        onLeft={true}
        depth={subSection[SECNAME.BUKA][3]}
        colour="mediumpurple"
      >
        <div className="section-detail work-section collage">
          <img id="azure" src={azure} alt="" />
          <img id="kube" src={kubeLogo} alt="" />
          <img id="terra" src={terra} alt="" />
          <p id="exp-description-infra">
            - Using modern technologies, we build infrastructure that can
            flexibly handle millions of requests every day.
          </p>
        </div>
      </Wall>
    </>
  );
}
