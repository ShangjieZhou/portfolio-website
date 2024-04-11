import { SpotLight } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import MyImage from "../MyImage";
import git from "../../assets/github.svg";
import pdf from "../../assets/pdf.svg";
import linkedin from "../../assets/linkedin.svg";
import { CylinderGeometry, Vector3, MeshStandardMaterial } from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import FloorLamp from "../FloorLamp";
import { statuePurple } from "../../Gallery";
import { useSelector } from "react-redux";
import { SECNAME } from "../../features/gallery/gallerySlice";

const FOCUSANGLE = 0.12;
const WIDEANGLE = 0.5;
const center = new Vector3(0, 0.9, -57.6);
const bottom = new CylinderGeometry(0.5, 0.8, 2, 16, 1);
const top = new CylinderGeometry(1.2, 0.5, 2.8, 32, 1);
const mat = new MeshStandardMaterial({ color: "white", flatShading: true });

export default function Info({ depth }) {
  const spotlight = useRef();
  const lightBody = useRef();
  const [focusPoint, setFocusPoint] = useState(center);
  const [angle, setAngle] = useState(WIDEANGLE);
  const currSection = useSelector((state) => state.gallery.playerSection);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    mouseOut();
  }, [currSection]);

  useEffect(() => {
    document.body.style.cursor = hover ? "pointer" : "auto";
  }, [hover]);

  useFrame((_, delta) => {
    spotlight.current.target.position.lerp(focusPoint, 0.1);
    if (angle === WIDEANGLE && spotlight.current.angle < angle) {
      spotlight.current.angle = Math.min(
        WIDEANGLE,
        spotlight.current.angle + delta * 2
      );
    } else if (angle === FOCUSANGLE && spotlight.current.angle > angle) {
      spotlight.current.angle = Math.max(
        FOCUSANGLE,
        spotlight.current.angle - delta * 2
      );
    }
    spotlight.current.target.updateMatrixWorld();
  });

  const unsetSpotlight = () => {
    setAngle(WIDEANGLE);
    setFocusPoint(center);
  };

  const setSpotlight = (vec) => {
    if (currSection === SECNAME.END) {
      setHover(true);
      setAngle(FOCUSANGLE);
      setFocusPoint(vec);
    }
  };

  const goto = (url) => {
    if (currSection === SECNAME.END) {
      window.open(url, "_blank");
    }
  };

  const mouseOut = () => {
    unsetSpotlight();
    setHover(false);
  };

  return (
    <group position={[0, 0.1, 2 - depth]}>
      <SpotLight
        castShadow
        ref={spotlight}
        position={[0, 1.9, 1.9]}
        penumbra={0.1}
        distance={10}
        angle={WIDEANGLE}
        anglePower={10}
        intensity={10}
        opacity={0.1}
      />
      <RigidBody type="kinematicPosition">
        <mesh receiveShadow>
          <cylinderGeometry args={[1, 1, 0.4, 16, 1]} />
          <meshStandardMaterial flatShading color={"#e2e2e2"} />
        </mesh>
        <group></group>
        <mesh
          onClick={() => goto("https://github.com/ShangjieZhou")}
          onPointerMove={() =>
            setSpotlight(new Vector3(-0.5, 0.4, 2.3 - depth))
          }
          onPointerOut={mouseOut}
          rotation-y={-0.3}
          position={[-0.4, 0.45, 0.2]}
          castShadow
        >
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial flatShading color="mediumpurple" />
          <MyImage src={git} scale={[0.3, 0.3]} position={[0, 0, 0.26]} />
        </mesh>
        <mesh
          onClick={() => goto("https://shangjie-zhou-resume.tiiny.site/")}
          onPointerOut={mouseOut}
          onPointerMove={() =>
            setSpotlight(new Vector3(-0.3, 0.98, 2.2 - depth))
          }
          position={[-0.3, 0.88, 0.1]}
          castShadow
        >
          <boxGeometry args={[0.36, 0.36, 0.36]} />
          <meshStandardMaterial flatShading color="#ff9258" />
          <MyImage src={pdf} scale={[0.24, 0.24]} position={[0, 0, 0.2]} />
        </mesh>
        <mesh
          onClick={() =>
            goto("https://www.linkedin.com/in/shangjie-jay-zhou-3439a0199/")
          }
          onPointerOut={mouseOut}
          onPointerMove={() => setSpotlight(new Vector3(0.42, 0.4, 2 - depth))}
          rotation-y={0.2}
          position={[0.3, 0.55, 0]}
          castShadow
        >
          <boxGeometry args={[0.7, 0.7, 0.7]} />
          <meshStandardMaterial flatShading color="#EA4D82" />
          <MyImage src={linkedin} scale={[0.5, 0.5]} position={[0, 0, 0.37]} />
        </mesh>
      </RigidBody>
      <group
        scale={0.06}
        rotation-y={Math.PI * 0.5}
        rotation-x={Math.PI}
        position={[0, 1.9, 1.9]}
      >
        <mesh position-y={1} geometry={bottom} material={mat} />
        <group ref={lightBody} rotation-z={1.1} position={[0, 2.6, 0]}>
          <mesh geometry={top} material={mat} />
        </group>
      </group>
      {/* <group position={[0, 1.9, 1.9]} rotation-x={Math.PI}>
        <FloorLamp
          color={statuePurple}
          rotation={Math.PI * 0.5}
          position={[0, 0, 0]}
          lookupAngle={1.1}
        />
      </group> */}
    </group>
  );
}
