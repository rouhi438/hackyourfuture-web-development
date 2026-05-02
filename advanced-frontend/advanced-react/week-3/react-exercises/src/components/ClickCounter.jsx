// Create a new component called ClickCounter

// Use the useState hook to manage a count state variable

// Implement an onClick event handler function that increments the count

// Render a button and display the current value of count

import { useState } from "react";

export function ClickCounter() {
  const [count, setCount] = useState(0);

  const handlerClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h3>Click counter</h3>
      <p>Count : {count}</p>
      <button onClick={handlerClick}>Click Here...</button>
    </>
  );
}
