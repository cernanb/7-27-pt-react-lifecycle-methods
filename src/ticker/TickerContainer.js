import React, { Component } from "react";
import Ticker from "./Ticker";

export default class TickerContainer extends Component {
  state = { showTicker: true };
  render() {
    const { showTicker } = this.state;
    return (
      <div className="box">
        <button onClick={() => this.setState({ showTicker: !showTicker })}>
          {showTicker ? "Stop Ticker" : "Start Ticker"}
        </button>
        {showTicker && <Ticker />}
      </div>
    );
  }
}
