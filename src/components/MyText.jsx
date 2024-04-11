import { Text } from "@react-three/drei";
import { useEffect, useState } from "react";

export const FONT = {
  Gin: "/gingerCat.otf",
  Story: "/lightStories.otf",
  Reg: "/bebas-neue-v9-latin-regular.woff",
  Times: "/newyork.ttf",
};

export default function MyText({
  font,
  size,
  position,
  children,
  width,
  url = null,
}) {
  const [hover, setHover] = useState(false);
  useEffect(() => {
    document.body.style.cursor = hover ? "pointer" : "auto";
  }, [hover]);

  return (
    <Text
      onClick={() => {
        url !== null && window.open(url, "_blank").focus();
      }}
      maxWidth={width}
      onPointerOver={() => {
        url !== null && setHover(true);
      }}
      onPointerOut={() => {
        (url !== null) & setHover(false);
      }}
      fontSize={size}
      font={font}
      anchorX={"left"}
      position={[...position, 0.07]}
    >
      {children}
      <meshBasicMaterial color="white" toneMapped={false} />
    </Text>
  );
}
