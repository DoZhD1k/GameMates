import React, { useEffect } from "react";
import "./CSS/other.css";
import eyeTraining from "../assets/DataJs/Eye/eye";

const EyeTraining = () => {
  useEffect(() => {
    eyeTraining(); 
  }, []);

  return (
    <div className="ball">
      <div className="fullscreen-text" id="movingText">
        <span role="img" aria-label="circle">
          ⭕️
        </span>
      </div>
      <button id="toggleBtn">Pause</button>
    </div>

  );
};

export default EyeTraining;
