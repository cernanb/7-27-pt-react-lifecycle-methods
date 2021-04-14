import React, { Component } from "react";

export default class GrandChild extends Component {
  constructor() {
    super();
    this.state = {
      buttonText: "GrandChild",
    };
    console.log("%c GrandChild CONSTRUCTOR", "color: blue");
  }

  componentDidMount() {
    console.log("%c GrandChild COMPDIDMOUNT", "color: blue");
  }
  render() {
    console.log("%c GrandChild RENDER", "color: blue");
    return (
      <div className="box">
        <button
          onClick={() => {
            this.setState((prevState) => ({
              buttonText: prevState.buttonText + "!",
            }));
          }}
        >
          {this.state.buttonText}
        </button>
      </div>
    );
  }
}
