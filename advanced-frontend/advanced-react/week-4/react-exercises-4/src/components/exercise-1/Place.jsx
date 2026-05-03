import PlaceImage from "./PlaceImage";

export default function Place() {
  const place = {
    name: "Paris",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e6/Paris_Night.jpg",
  };

  return (
    <div>
      <h3>{place.name}</h3>
      <PlaceImage place={place} />
    </div>
  );
}
