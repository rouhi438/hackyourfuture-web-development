import { useContext } from "react";
import { ImageSizeContext } from "./Context";

export default function PlaceImage({ place }) {
  const imageSize = useContext(ImageSizeContext);

  return (
    <img
      src={place.image}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
