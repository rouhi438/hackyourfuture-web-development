export function ToggleContent({ show, content }) {
  if (!show) {
    return <p>There is nothing to display </p>;
  }
  return <p>{content}</p>;
}
