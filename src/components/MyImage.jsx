import { Image } from "@react-three/drei";

export default function MyImage({ scale, position, src }) {
  return (
    <Image
      toneMapped={false}
      transparent={true}
      scale={scale}
      position={[...position, 0.07]}
      url={src}
    />
  );
}
