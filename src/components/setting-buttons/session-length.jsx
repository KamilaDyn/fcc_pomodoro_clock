import React from "react";
const SessionLength = props => {
  return (
    <div id="session-label" className="session">
      <button
        id="session-increment"
        disabled={props.isPlay === true ? "disabled" : ""}
        onClick={props.incrementSession}
      >
        +
      </button>
      <span id="session-length">{props.sessionValue}</span>
      <button
        id="session-decrement"
        disabled={props.isPlay === true ? "disabled" : ""}
        onClick={props.decrementSession}
      >
        -
      </button>
    </div>
  );
};

export default SessionLength;
