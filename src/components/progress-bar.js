import React from "react";
import ReactDOM from "react-dom";

export default function ProgressBar() {
  return (
    <div className="progress-bar-container">
      <div className="top-stats">
        <div>75%</div>
        <div>471 donors</div>
      </div>
      <div className="progress-bar">
        <div className="bar-consumed" />
        <div className="bar-remaining" />
      </div>
      <div className="bottom-stats">
        <div>Online</div>
        <div>$19,096 donated</div>
      </div>
    </div>
  );
}
