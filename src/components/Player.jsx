import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

const SPEED = 0.3;
const ROTATE = 0.1;
const NONEVECTOR = new THREE.Vector2(0, 0);

const forwardMap = {
  true: new THREE.Vector2(0, -1),
  false: NONEVECTOR,
};

const rightMap = {
  true: new THREE.Vector2(1, 0),
  false: NONEVECTOR,
};

const backwardMap = {
  true: new THREE.Vector2(0, 1),
  false: NONEVECTOR,
};

const leftMap = {
  true: new THREE.Vector2(-1, 0),
  false: NONEVECTOR,
};

export default function Player({ walls }) {
  const body = useRef();
  const [subscribeKeys, getKeys] = useKeyboardControls();
  const [smoothedCameraPosition] = useState(() => new THREE.Vector3());
  const [smoothedCameraTarget] = useState(() => new THREE.Vector3());

  useFrame((state, delta) => {
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
      0.65,
      bodyPosition.z + 2.8
    );
    let cameraTarget = new THREE.Vector3(
      bodyPosition.x,
      bodyPosition.y + 0.25,
      bodyPosition.z
    );

    // switch camera angle when near a display section
    body.current.setLinearDamping(0.5);
    for (let wall of walls) {
      if (Math.abs(bodyPosition.z - wall) < 1.5) {
        cameraPosition = new THREE.Vector3(3, 0.85, wall);
        cameraTarget = new THREE.Vector3(-1, 1, wall);
        body.current.setLinearDamping(5); // slow down the ball
        break;
      }
    }

    smoothedCameraPosition.lerp(cameraPosition, 5 * delta);
    smoothedCameraTarget.lerp(cameraTarget, 5 * delta);

    state.camera.position.copy(smoothedCameraPosition);
    state.camera.lookAt(smoothedCameraTarget);
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
      linearDamping={0.5}
      angularDamping={0.5}
      friction={1}
      restitution={0.2}
      ref={body}
      position={[0, 1, -3]}
      colliders="ball"
      canSleep={false}
    >
      <mesh castShadow>
        <icosahedronGeometry args={[0.2, 1]} />
        <meshStandardMaterial flatShading color="#DDDDDD" />
        {/* <meshStandardMaterial flatShading color="white" /> */}
      </mesh>
    </RigidBody>
  );
}
