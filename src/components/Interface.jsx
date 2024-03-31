import { useEffect, useRef, useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { movePlayerTo, SUBSECTION } from "../features/gallery/gallerySlice";
import keyboard from "../assets/arrowkeys.png";
import { useKeyboardControls } from "@react-three/drei";

const titleMap = {
  [SUBSECTION.START]: "Experience",
  [SUBSECTION.BUKA]: "Experience",
  [SUBSECTION.NAVBIT]: "Experience",
  [SUBSECTION.UNI]: "Education",
  [SUBSECTION.HIGHSCHOOL]: "Education",
};

export default function Interface() {
  const [collapsed, setCollapsed] = useState(true);
  const dispatch = useDispatch();
  const [subscribeKeys, _] = useKeyboardControls();
  const currSection = useSelector(
    (state) => state.gallery.playerCurrentSection
  );
  const [showHint, setShowHint] = useState(true);
  const timerRef = useRef();

  useEffect(() => {
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
      <div id="content-table">
        <div className={collapsed ? "foldable fold" : "foldable"}>
          {collapsed && <h1>{titleMap[currSection]}</h1>}
          {!collapsed && (
            <>
              <div className="experience section">
                <h1>Experience</h1>
                <p
                  className={highlight(SUBSECTION.BUKA)}
                  onClick={() => moveTo(SUBSECTION.BUKA)}
                >
                  Bukalapak
                </p>
                <p
                  className={highlight(SUBSECTION.NAVBIT)}
                  onClick={() => moveTo(SUBSECTION.NAVBIT)}
                >
                  Navbit
                </p>
              </div>
              <div className="education section">
                <h1>Education</h1>
                <p
                  className={highlight(SUBSECTION.UNI)}
                  onClick={() => moveTo(SUBSECTION.UNI)}
                >
                  University of New South Wales
                </p>
                <p
                  className={highlight(SUBSECTION.HIGHSCHOOL)}
                  onClick={() => moveTo(SUBSECTION.HIGHSCHOOL)}
                >
                  Hills Adventist College
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
