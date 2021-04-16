import React, { Component, useEffect, useState, useRef } from "react";

const Ticker = () => {
  const [color, setColor] = useState("black");
  const [value, setValue] = useState(0);

  const prevValue = usePrevious(value);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("running interval");
      setValue(Math.floor(Math.random() * 100));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (value > prevValue) {
      setColor("green");
    } else if (value < prevValue) {
      setColor("red");
    }
  }, [value]);

  return (
    <div className="box" style={{ color: color, fontSize: "20px" }}>
      {value}
    </div>
  );
};

// Hook
function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

export default Ticker;
