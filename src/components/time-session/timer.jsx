import React, { Component } from "react";

class Timer extends Component {
  state = {
    timerSecond: 0,
    intervalId: 0,
    isSession: true,
    running: false,
    play: false
  };

  playTimer = () => {
    const buttonPlay = document.querySelector(".play");
    console.log(this.state.intervalId);
    if (this.state.running === false) {
      buttonPlay.style.backgroundImage =
        "url('https://img.icons8.com/ios/100/000000/stop-circled--v1.png')";
      let intervalId = setInterval(this.countDown, 1000);
      this.props.disableSitting(true);
      this.setState({ running: true, intervalId: intervalId });
    } else {
      this.setState({ running: false });
      this.props.disableSitting(false);
      buttonPlay.style.backgroundImage =
        "url('https://img.icons8.com/ios/100/000000/circled-play.png')";
      clearInterval(this.state.intervalId);
    }
  };

  countDown = () => {
    console.log(this.state.play);
    const { timerSecond } = this.state;
    switch (timerSecond) {
      case 0:
        if (this.props.timeMinute === 0 && timerSecond === 0) {
          this.setState({ play: true });
          if (this.state.isSession) {
            this.setState({ isSession: false });
            this.props.toggleInterval(this.state.isSession);
          } else {
            this.setState({ isSession: true });
            this.props.toggleInterval(this.state.isSession);
          }
          this.audioPlay();
        }
        this.props.updateMinute();
        this.setState({ timerSecond: 59 });
        break;
      default:
        this.setState(prevState => {
          return {
            timerSecond: prevState.timerSecond - 1
          };
        });
        break;
    }
  };

  audioPlay = () => {
    if (this.state.play === true) {
      this.audioBeep.play();
    }
  };

  resetTimer = () => {
    this.props.reset();
    this.setState({
      timerSecond: 0,
      running: false,
      play: false
    });
    this.audioBeep.pause();
    document.querySelector(".play").style.backgroundImage =
      "url('https://img.icons8.com/ios/100/000000/circled-play.png')";
    clearInterval(this.state.intervalId);
  };

  render() {
    let minutes =
      this.props.timeMinute === 0
        ? "00"
        : this.props.timeMinute < 10
        ? `0${this.props.timeMinute}`
        : this.props.timeMinute;
    let seconds =
      this.state.timerSecond === 0
        ? "00"
        : this.state.timerSecond < 10
        ? `0${this.state.timerSecond}`
        : this.state.timerSecond;

    return (
      <div className="timer-clock">
        <div id="time-left" className="time">
          <h2 id="timer-label" className="session-name">
            {this.state.isSession === true ? "Session" : "Break"}
          </h2>
          <h1 id="time-left" className="time-left">
            {minutes}:{seconds}
          </h1>
          <div className="controlers">
            <button id="start_stop" className="play" onClick={this.playTimer} />
            <button id="reset" className="refresh" onClick={this.resetTimer} />
          </div>
        </div>
        <audio
          id="beep"
          preload="auto"
          src="http://www.accesscontrolsales.com/Ingram_Products/mp3/s7-c3tone.mp3"
          ref={audio => {
            this.audioBeep = audio;
          }}
          type="audio/mp3"
        />
      </div>
    );
  }
}

export default Timer;
