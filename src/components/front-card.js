import React from "react";
import ReactDOM from "react-dom";
import Description from "./description";
import ProgressBar from "./progress-bar";

const FrontCard = React.forwardRef(({ navigate }, ref) => {
  return (
    <div ref={ref} className="front-card-container" onClick={navigate("back")}>
      <Description />
      <ProgressBar />
    </div>
  );
});

export default FrontCard;
