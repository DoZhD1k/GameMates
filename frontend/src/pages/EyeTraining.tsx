import React, { useEffect, useRef } from "react";
import "./CSS/other.css";
import eyeTraining from "../assets/DataJs/Eye/eye";

const EyeTraining: React.FC = () => {
  const movingTextRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (movingTextRef.current && toggleBtnRef.current) {
      eyeTraining(movingTextRef.current, toggleBtnRef.current);
    }
  }, []);

  return (
    <div className="ball">
      <div className="fullscreen-text" id="movingText" ref={movingTextRef}>
        <span role="img" aria-label="circle">
          ⭕️
        </span>
      </div>
      <button id="toggleBtn" ref={toggleBtnRef}>
        Pause
      </button>
    </div>
  );
};

export default EyeTraining;
