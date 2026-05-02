//  Create a Clock component
// Create a new component called Clock

// Use the useState hook to manage the current time

// Use the useEffect hook to set up an Interval that updates the time every second

// Implement the cleanup function in useEffect to clear the interval when the component unmounts

// Let the component render the current time
import { useState } from "react";
import { useEffect } from "react";

export function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <h3>Clock</h3>
      <p style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}>
        {formatTime(currentTime)}
      </p>
    </div>
  );
}
