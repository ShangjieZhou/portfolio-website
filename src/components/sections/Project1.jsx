import "../../style.scss";
import Wall from "../Wall";
import { subSection, SECNAME } from "../../features/gallery/gallerySlice";
import "./Project.scss";
import npm from "../../assets/npm.png";
import annotate from "../../assets/annotate.png";
import Bench from "../Bench";

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
        colour="#f38042"
      >
        <div className="section-detail project-section">
          <div className="project-title">
            <div className="project-subtitle">
              <img src={npm} alt="" />
              <h1>Simple Annotate</h1>
              <a
                target="_blank"
                href="https://www.npmjs.com/package/simple-annotate-zsj"
              >
                @www.npmjs.com
              </a>
              <h4>
                - A react component library that allows people to annotate and
                measure images with svg lines
              </h4>
            </div>
          </div>
        </div>
      </Wall>
      <Wall
        galleryWidth={width}
        onLeft={false}
        depth={subSection[SECNAME.NPM][1]}
        colour="#f38042"
      >
        <div className="section-detail project-section">
          <img id="annotate" src={annotate} alt="" />
          <div className="pic-desc">
            <ul>
              <li>Supports line annotation with number of pixels as unit</li>
              <li>Supports image zooming, scaling and panning</li>
            </ul>
          </div>
        </div>
      </Wall>
    </>
  );
}
