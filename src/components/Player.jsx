import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { useDispatch, useSelector } from "react-redux";
import {
  updatePlayerSection,
  subSection,
  sideMap,
} from "../features/gallery/gallerySlice";

const SPEED = 0.3;
const BUFFER = 1;

export default function Player({}) {
  const body = useRef();
  const [subscribeKeys, getKeys] = useKeyboardControls();
  const [smoothedCameraPosition] = useState(() => new THREE.Vector3());
  const [smoothedCameraTarget] = useState(() => new THREE.Vector3());
  const playerPos = useSelector((state) => state.gallery.playerPosition);
  const dispatch = useDispatch();

  useFrame((state, delta) => {
    if (body.current === null) {
      return;
    }

    // controls
    const { forward, backward, leftward, rightward } = getKeys();
    const tar = new THREE.Vector3();
    state.camera.getWorldDirection(tar);
    const impluse = calcMovement(
      forward,
      backward,
      leftward,
      rightward,
      tar,
      delta
    );
    body.current.applyImpulse(impluse);

    // camera movement
    const bodyPosition = body.current.translation();
    let cameraPosition = new THREE.Vector3(
      bodyPosition.x,
      0.6,
      bodyPosition.z + 2.8
    );
    let cameraTarget = new THREE.Vector3(
      bodyPosition.x,
      bodyPosition.y + 0.3,
      bodyPosition.z
    );

    // switch camera angle when near a display section
    body.current.setLinearDamping(0.8);

    for (const [key, value] of Object.entries(subSection)) {
      const start = value[0] + BUFFER - bodyPosition.z;
      const end = bodyPosition.z - value.at(-1) + BUFFER;
      if (
        start > 0 &&
        end > 0 &&
        ((sideMap[key] === 1 && bodyPosition.x > 0) ||
          (sideMap[key] === -1 && bodyPosition.x < 0))
      ) {
        const camPosX = sideMap[key] * -2.8;
        const camTargetX = sideMap[key] * 1.5;
        const camZ = Math.max(value.at(-1), Math.min(bodyPosition.z, value[0]));
        cameraPosition = new THREE.Vector3(camPosX, 0.85, camZ);
        cameraTarget = new THREE.Vector3(camTargetX, 1, camZ);
        body.current.setLinearDamping(6); // slow down the ball
        break;
      }
    }

    smoothedCameraPosition.lerp(cameraPosition, 5 * delta);
    smoothedCameraTarget.lerp(cameraTarget, 5 * delta);

    state.camera.position.copy(smoothedCameraPosition);
    state.camera.lookAt(smoothedCameraTarget);

    dispatch(updatePlayerSection(bodyPosition.z));
  });

  const calcMovement = (
    forward,
    backward,
    leftward,
    rightward,
    worldDirection,
    delta
  ) => {
    const zDirection = new THREE.Vector2(0, -1);
    const lookAtDirection = new THREE.Vector2(
      worldDirection.x,
      worldDirection.z
    );
    const angle = zDirection.angle() - lookAtDirection.angle();

    const impulse = { x: 0, y: 0, z: 0 };
    const impulseStrength = SPEED * delta;

    if (forward) {
      impulse.z -= impulseStrength * Math.cos(angle);
      impulse.x -= impulseStrength * Math.sin(angle);
    } else if (backward) {
      impulse.z += impulseStrength * Math.cos(angle);
      impulse.x += impulseStrength * Math.sin(angle);
    }

    if (rightward) {
      impulse.z -= impulseStrength * Math.sin(angle);
      impulse.x += impulseStrength * Math.cos(angle);
    } else if (leftward) {
      impulse.z += impulseStrength * Math.sin(angle);
      impulse.x -= impulseStrength * Math.cos(angle);
    }

    return impulse;
  };

  return (
    <RigidBody
      linearDamping={0.8}
      angularDamping={4}
      friction={1}
      restitution={0.2}
      ref={body}
      position={playerPos}
      colliders="ball"
      canSleep={false}
    >
      <mesh castShadow>
        <icosahedronGeometry args={[0.18, 1]} />
        <meshStandardMaterial flatShading color="#DDDDDD" />
      </mesh>
    </RigidBody>
  );
}
