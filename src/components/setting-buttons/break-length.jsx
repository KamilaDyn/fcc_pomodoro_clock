import React from "react";

const BreakLength = props => {
  return (
    <div id="break-label" className="break">
      <button
        id="break-increment"
        disabled={props.isPlay === true ? "disabled" : ""}
        onClick={props.onClick1}
      >
        +
      </button>
      <span id="break-length">{props.breakValue}</span>
      <button
        id="break-decrement"
        disabled={props.isPlay === true ? "disabled" : ""}
        onClick={props.onClick2}
      >
        -
      </button>
    </div>
  );
};

export default BreakLength;
