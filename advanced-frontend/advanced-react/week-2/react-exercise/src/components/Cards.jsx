export function Card({ title, description, imageUrl }) {
  return (
    <div className="card">
      <img src={imageUrl} alt="" />
      <p>
        <strong>Title : </strong>
        {title}
      </p>
      <p>
        <strong>Description :</strong>
        {description}
      </p>
    </div>
  );
}
