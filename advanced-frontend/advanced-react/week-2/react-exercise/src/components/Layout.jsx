export function Layout({ children }) {
  return (
    <>
      <header>
        <nav className="menu-bar">
          <a href="#">home</a>
          <a href="#">product</a>
          <a href="#">About</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p> all rights reserved</p>
      </footer>
    </>
  );
}
