import { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { movePlayerTo, SECNAME } from "../features/gallery/gallerySlice";
import keyboard from "../assets/arrowkeys.png";
import { useKeyboardControls } from "@react-three/drei";
import arrowIcon from "../assets/arrow.svg";

export default function Interface() {
  const [collapsed, setCollapsed] = useState(true);
  const dispatch = useDispatch();
  const [subscribeKeys, _] = useKeyboardControls();
  const currSection = useSelector((state) => state.gallery.playerSection);
  const [showHint, setShowHint] = useState(false);
  const timerRef = useRef();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (currSection !== SECNAME.START && showHint === false) {
      setShowMenu(true);
    }
  }, [currSection]);

  useEffect(() => {
    prepareHint(2000);
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
      (_) => prepareHint(10000)
    );
  }, []);

  const prepareHint = (interval) => {
    clearTimeout(timerRef.current);
    setShowHint(false);
    timerRef.current = setTimeout(() => {
      setShowHint(true);
    }, interval);
  };

  const moveTo = (subSection) => {
    dispatch(movePlayerTo(subSection));
  };

  const highlight = (sec) => {
    if (sec === currSection) {
      return "highlight";
    }
    return "";
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

      {showMenu && (
        <div id="content-table" className={collapsed ? "hide" : ""}>
          <div className="foldable">
            <div className="start section">
              <h1>Gallery Entrance</h1>
              <p
                className={highlight(SECNAME.START)}
                onClick={() => moveTo(SECNAME.START)}
              >
                Shangjie The Thinker
              </p>
            </div>
            <div className="experience section">
              <h1>My Experience</h1>
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
              <h1>My Education</h1>
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
                Simple Annotator
              </p>
            </div>
            <div className="end section">
              <h1>Gallery Back Wall</h1>
              <p
                className={highlight(SECNAME.END)}
                onClick={() => moveTo(SECNAME.END)}
              >
                The Boxes
              </p>
            </div>
          </div>
          <button id="fold-btn" onClick={() => setCollapsed(!collapsed)}>
            <img
              className={collapsed ? "arrow-btn" : "arrow-btn flipped"}
              src={arrowIcon}
              alt=""
            />
          </button>
        </div>
      )}
    </div>
  );
}
