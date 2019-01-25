import React from "react";
import ReactDOM from "react-dom";
import Description from "./description";
import ProgressBar from "./progress-bar";

export default function FrontCard() {
  return (
    <div className="front-card-container">
      <Description />
      <ProgressBar />
    </div>
  );
}
