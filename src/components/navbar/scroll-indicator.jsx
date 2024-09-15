import React, { useRef } from "react";
import { useGlobalState } from "../../context";

const ScrollIndicator = () => {
  const circleRef = useRef(null);
  const { scrolledPercentage } = useGlobalState();

  const radius = 45; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const offset = circumference - (scrolledPercentage / 100) * circumference;
  return (
    <span
      style={{ right: "calc(5vw - 4.8px)" }}
      className="absolute mt-[0.5px] "
    >
      <svg className="rotate-[-90deg]" width="50" height="50">
        <circle
          ref={circleRef}
          cx="25"
          cy="25"
          r={radius / 2 || 20}
          stroke=""
          strokeWidth="3"
          fill="transparent"
          className={`stroke-indigo-600/50`}
        />
        <circle
          cx="25"
          cy="25"
          r={radius / 2 || 20}
          stroke=""
          strokeWidth="3"
          fill="transparent"
          strokeDasharray={circumference / 2 || 125.66}
          strokeDashoffset={offset / 2 || 0}
          className={`transition-all duration-75 stroke-indigo-600`}
        />
      </svg>
    </span>
  );
};

export default ScrollIndicator;
