import "../../style.scss";
import Wall from "../Wall";
import unsw from "../../assets/unsw.png";
import grad from "../../assets/grad.jpeg";
import { SUBSECTION } from "../../features/gallery/gallerySlice";
import "./Education.scss";
import Bench from "../Bench";

export default function Education1({ width }) {
  return (
    <>
      <Bench
        depth={(SUBSECTION.UNI[0] + SUBSECTION.UNI[1]) / 2}
        length={SUBSECTION.UNI[0] - SUBSECTION.UNI[1] + 2.4}
      />
      <Wall
        galleryWidth={width}
        onLeft={true}
        depth={SUBSECTION.UNI[0]}
        colour="#EA4D82"
      >
        <div className="section-detail education-section">
          <img src={unsw} alt="" />
          <div className="school-title">
            <div className="school-subtitle">
              <h1>Bachelor of Software Engineering (Honours)</h1>
              <a target="_blank" href="https://www.linkedin.com/school/unsw/">
                @University of New South Wales
              </a>
              <h4>Feb 2018 - Feb 2023</h4>
            </div>
          </div>
        </div>
      </Wall>
      <Wall
        galleryWidth={width}
        onLeft={true}
        depth={SUBSECTION.UNI[1]}
        colour="#EA4D82"
      >
        <div className="section-detail education-section">
          <img id="grad" src={grad} alt="" />
          <ul>
            <li>First Class Honours</li>
            <li>Dean's Honours List of 2021</li>
            <li>Dean's Honours List of 2022</li>
          </ul>
        </div>
      </Wall>
    </>
  );
}
