import { useEffect, useRef, useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  movePlayerTo,
  SECNAME,
  subSection,
} from "../features/gallery/gallerySlice";
import keyboard from "../assets/arrowkeys.png";
import { useKeyboardControls } from "@react-three/drei";
import { Transition } from "react-transition-group";

const titleMap = {
  [SECNAME.START]: "Content Table",
  [SECNAME.BUKA]: "Experience: Bukalapak",
  [SECNAME.NAVBIT]: "Experience: Navbit",
  [SECNAME.UNI]: "Education: Bachelor",
  [SECNAME.HIGHSCHOOL]: "Education: High School",
  [SECNAME.NPM]: "Project: Simple Annotate",
};

const titleClass = {
  [SECNAME.START]: "experience",
  [SECNAME.BUKA]: "experience",
  [SECNAME.NAVBIT]: "experience",
  [SECNAME.UNI]: "education",
  [SECNAME.HIGHSCHOOL]: "education",
  [SECNAME.NPM]: "project",
};

export default function Interface() {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const [subscribeKeys, _] = useKeyboardControls();
  const currSection = useSelector((state) => state.gallery.playerSection);
  const [showHint, setShowHint] = useState(true);
  const timerRef = useRef();

  useEffect(() => {
    window.addEventListener(
      "keydown",
      (e) => {
        if (
          ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(
            e.code
          ) > -1
        ) {
          e.preventDefault();
        }
      },
      false
    );
    return subscribeKeys(
      (state) =>
        state.forward || state.backward || state.leftward || state.rightward,
      (_) => {
        if (timerRef.current !== null) {
          clearTimeout(timerRef.current);
        }
        setShowHint(false);
        timerRef.current = setTimeout(() => {
          setShowHint(true);
        }, 10000);
      }
    );
  }, []);

  const moveTo = (subSection) => {
    console.log("Clicked");
    dispatch(movePlayerTo(subSection));
  };

  const highlight = (sec) => {
    if (sec === currSection) {
      return "highlight";
    }
    return "";
  };

  const hide = () => {
    return currSection === SECNAME.START ? "hide" : "";
  };

  return (
    <div id="interface">
      {showHint && (
        <div id="entrance-hint">
          <p>Move with</p>
          <img src={keyboard} alt="" />
          <p>to explore</p>
        </div>
      )}

      <div className={hide()} id="content-table">
        <div className={collapsed ? "foldable fold" : "foldable"}>
          {collapsed && (
            <h1 className={titleClass[currSection]}>{titleMap[currSection]}</h1>
          )}
          {!collapsed && (
            <>
              <div className="experience section">
                <h1>Experience</h1>
                <p
                  className={highlight(SECNAME.BUKA)}
                  onClick={() => moveTo(SECNAME.BUKA)}
                >
                  Bukalapak
                </p>
                <p
                  className={highlight(SECNAME.NAVBIT)}
                  onClick={() => moveTo(SECNAME.NAVBIT)}
                >
                  Navbit
                </p>
              </div>
              <div className="education section">
                <h1>Education</h1>
                <p
                  className={highlight(SECNAME.UNI)}
                  onClick={() => moveTo(SECNAME.UNI)}
                >
                  University of New South Wales
                </p>
                <p
                  className={highlight(SECNAME.HIGHSCHOOL)}
                  onClick={() => moveTo(SECNAME.HIGHSCHOOL)}
                >
                  Hills Adventist College
                </p>
              </div>
              <div className="project section">
                <h1>Personal Projects</h1>
                <p
                  className={highlight(SECNAME.NPM)}
                  onClick={() => moveTo(SECNAME.NPM)}
                >
                  Simple Annotate
                </p>
              </div>
            </>
          )}
        </div>
        <button id="fold-btn" onClick={() => setCollapsed(!collapsed)}>
          {collapsed && (
            <MdOutlineKeyboardArrowDown color="white" size={"1.6rem"} />
          )}
          {!collapsed && (
            <MdOutlineKeyboardArrowUp color="white" size={"1.6rem"} />
          )}
        </button>
      </div>
    </div>
  );
}
