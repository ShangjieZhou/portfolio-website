import { Text3D } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useState } from "react";
import { MeshStandardMaterial } from "three";

export default function SectionText({ text, size, colour, depth }) {
  const [chars, setChars] = useState([]);
  let space = 0;

  useEffect(() => {
    const letters = text.split("");
    setChars(letters);
  }, []);

  return (
    <>
      {chars.map((c, i) => {
        const offset = (i - chars.length / 2) * size * 1.2 + space;
        if (c === "I") space -= 0.4 * size;

        return (
          <RigidBody key={text + i.toString()} position={[offset, 0.5, depth]}>
            <Text3D
              material={
                new MeshStandardMaterial({
                  color: colour,
                  emissive: colour,
                  emissiveIntensity: 0.5,
                  flatShading: true,
                })
              }
              
              castShadow
              height={size * 0.5}
              size={size}
              font="./helvetiker_regular.typeface.json"
            >
              {c}
            </Text3D>
          </RigidBody>
        );
      })}
    </>
  );
}
