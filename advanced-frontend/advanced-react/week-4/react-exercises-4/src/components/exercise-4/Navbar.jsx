import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "15px" }}>
      <Link to="/">Home</Link>
      <Link to="/about">About us</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
