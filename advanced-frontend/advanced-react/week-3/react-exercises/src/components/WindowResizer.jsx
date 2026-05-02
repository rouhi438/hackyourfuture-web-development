import { useState, useEffect } from "react";

export function WindowResizer() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <h3>Window Resizer</h3>
      <p>Current Window Size</p>
      <ul>
        <li>Width:{windowSize.width}px</li>
        <li>Height:{windowSize.height}px</li>
      </ul>
      <p>Try to resize your browser window!!</p>
    </div>
  );
}
