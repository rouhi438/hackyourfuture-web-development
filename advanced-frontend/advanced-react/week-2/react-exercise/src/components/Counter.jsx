import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  function plus() {
    setCount(count + 1);
  }

  function minus() {
    setCount(count - 1);
  }

  return (
    <div className="counter-holder">
      <h2>Count: {count}</h2>

      <button onClick={plus}>plus plus</button>
      <button onClick={minus}>minus minus</button>
    </div>
  );
}
