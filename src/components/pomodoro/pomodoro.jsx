import React, { Component } from "react";
import Timer from "../time-session/timer";
import BreakLength from "../setting-buttons/break-length";
import SessionLength from "../setting-buttons/session-length";

class Pomodoro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      session: 25,
      timeMin: 25,
      timerType: "session",
      running: false,
      isSession: true,
      isPlay: false
    };
  }

  // decrement break Time
  decrementBreakTime = () => {
    let downButton = document.getElementById("break-decrement");
    if (this.state.break > 1 && this.state.break <= 30) {
      downButton.disable = false;
      this.setState(prevState => {
        return { break: prevState.break - 1 };
      });
    }
  };

  /// longer break - increment
  incrementBreakTime = () => {
    let upButton = document.getElementById("break-increment");
    if (this.state.break < 60) {
      console.log(this.state.break);
      upButton.disable = false;
      this.setState(prevState => {
        return { break: prevState.break + 1 };
      });
    } else {
      upButton.disable = true;
    }
  };

  // shorter session
  decrementSessionTime = () => {
    let downButton = document.getElementById("session-decrement");
    if (this.state.session > 1 && this.state.session <= 60) {
      downButton.disable = false;
      this.setState(prevState => {
        return {
          session: prevState.session - 1,
          timeMin: prevState.session - 1
        };
      });
    }
  };

  //longer session
  incrementSessionTime = () => {
    let upButton = document.getElementById("session-increment");
    if (this.state.session < 60) {
      upButton.disable = true;
      this.setState(prevState => {
        return {
          session: prevState.session + 1,
          timeMin: prevState.session + 1
        };
      });
    } else {
      upButton.disable = false;
    }
  };

  onToggleInterval = isSession => {
    if (isSession) {
      this.setState({ timeMin: this.state.session });
    } else {
      this.setState({ timeMin: this.state.break });
    }
  };

  updateMinute = () => {
    this.setState(prevState => {
      return { timeMin: prevState.timeMin - 1 };
    });
  };

  onReset = () => {
    this.setState({
      break: 5,
      session: 25,
      timeMin: 25,
      running: false,
      isPlay: false,
      isSession: false
    });
  };

  disableSitting = isPlay => {
    this.setState({ isPlay: isPlay });
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="title">Pomodoro Clock</h1>
        <div className="setting-length">
          <BreakLength
            isPlay={this.state.isPlay}
            breakValue={this.state.break}
            onClick1={this.incrementBreakTime}
            onClick2={this.decrementBreakTime}
          />
          <SessionLength
            isPlay={this.state.isPlay}
            sessionValue={this.state.session}
            incrementSession={e => this.incrementSessionTime(e)}
            decrementSession={e => this.decrementSessionTime(e)}
          />
        </div>
        <Timer
          {...this.state}
          timeMinute={this.state.timeMin}
          reset={this.onReset}
          updateMinute={this.updateMinute}
          toggleInterval={this.onToggleInterval}
          disableSitting={this.disableSitting}
        />
      </React.Fragment>
    );
  }
}

export default Pomodoro;
