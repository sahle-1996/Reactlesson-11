import React, { useState, useEffect } from "react";
import "./Counter.css";

const Counter = () => {
  // State for count and whether the counter is running
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Effect to handle the timer logic
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(timer); // Cleanup when the counter stops
  }, [isRunning]);

  // Start/Stop the counter
  const toggleCounter = () => {
    setIsRunning(!isRunning);
  };

  // Reset the counter
  const resetCounter = () => {
    setCount(0);
    setIsRunning(false);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-title">React Counter</h1>
      <div className="counter-display">Current Count: {count}</div>
      <div className="counter-controls">
        <button onClick={toggleCounter} className="counter-btn">
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={resetCounter} className="counter-btn reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;