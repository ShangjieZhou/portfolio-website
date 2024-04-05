import "../../style.scss";
import Wall from "../Wall";
import hills from "../../assets/hills.png";
import group from "../../assets/hills-group.jpeg";
import { subSection, SECNAME } from "../../features/gallery/gallerySlice";
import "./Education.scss";
import Bench from "../Bench";

export default function Education2({ width }) {
  return (
    <>
      <Bench
        depth={(subSection[SECNAME.HIGHSCHOOL][0] + subSection[SECNAME.HIGHSCHOOL][1]) / 2}
        length={subSection[SECNAME.HIGHSCHOOL][0] - subSection[SECNAME.HIGHSCHOOL][1] + 1.8}
      />
      <Wall
        galleryWidth={width}
        onLeft={false}
        depth={subSection[SECNAME.HIGHSCHOOL][0]}
        colour="#EA4D82"
      >
        <div className="section-detail education-section">
          <img src={hills} alt="" />
          <div className="school-title">
            <div id="high-school" className="school-subtitle">
              <h1>High School (Year 10-12)</h1>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/hills-adventist-college/"
              >
                @Hills Adventist College
              </a>
              <h4>Oct 2015 - Nov 2017</h4>
            </div>
          </div>
        </div>
      </Wall>
      <Wall
        galleryWidth={width}
        onLeft={false}
        depth={subSection[SECNAME.HIGHSCHOOL][1]}
        colour="#EA4D82"
      >
        <div className="section-detail education-section">
          <img id="hills-group" src={group} alt="" />
          <div className="pic-desc">
            <ul>
              <li>HSC ATAR of 96.5</li>
              <li>
                Subjects included Math Extension 1 & 2, English General, Physics
                and Chemistry
              </li>
              <li>Met a lot of lovely people</li>
            </ul>
          </div>
        </div>
      </Wall>
    </>
  );
}
