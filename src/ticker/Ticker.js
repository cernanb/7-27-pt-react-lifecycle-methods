import React, { Component } from "react";

export default class Ticker extends Component {
  state = {
    color: "black",
    interval: null,
    value: 0,
  };

  componentDidMount() {
    console.log("start interval");
    const interval = setInterval(() => {
      console.log("running interval");
      this.setState({ value: Math.floor(Math.random() * 100) });
    }, 1000);
    this.setState({ interval });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value > prevState.value) {
      this.setState({ color: "green" });
    } else if (this.state.value < prevState.value) {
      this.setState({ color: "red" });
    }
  }

  componentWillUnmount() {
    console.log("unmounting the ticker component");
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div
        className="box"
        style={{ color: this.state.color, fontSize: "20px" }}
      >
        {this.state.value}
      </div>
    );
  }
}
