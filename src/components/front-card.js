import React from "react";
import ReactDOM from "react-dom";

export default function FrontCard() {
  return (
    <div className="front-card-container">
      <div className="description">
        <h1>Oxford Giving Day</h1>
        <div className="title-subtext">For Oxford Giving Day</div>
        <div className="text">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in "
        </div>
      </div>

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
    </div>
  );
}
