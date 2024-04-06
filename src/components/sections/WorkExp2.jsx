import "../../style.scss";
import Wall from "../Wall";
import navbit from "../../assets/navbit.png";
import react from "../../assets/react.png";
import mui from "../../assets/mui.png";
import scss from "../../assets/scss.png";
import { subSection, SECNAME } from "../../features/gallery/gallerySlice";
import "./WorkExp.scss";
import Bench from "../Bench";
import { PURPLE } from "../../Gallery";

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
        <div className="section-detail work-section">
          <img src={navbit} alt="" />
          <div className="company-title">
            <div className="company-subtitle">
              <h1>Frontend Developer</h1>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/navbit-surgical/"
              >
                @Navbit
              </a>
              <h4>Oct 2022 - Apr 2023</h4>
            </div>
          </div>
        </div>
      </Wall>
      <Wall
        galleryWidth={width}
        onLeft={true}
        depth={subSection[SECNAME.NAVBIT][1]}
        colour={PURPLE}
      >
        <div className="section-detail work-section collage">
          <img id="react" src={react} alt="" />
          <img id="mui" src={mui} alt="" />
          <img id="scss" src={scss} alt="" />
          <p id="exp-description-lang">
            - In charge of developing the frontend of a Web App that supports
            SVG annotations on images.
          </p>
        </div>
      </Wall>
    </>
  );
}
