import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  constructor() {
    super();
    this.state = {
      buttonText: "Parent",
    };
    console.log("%c Parent CONSTRUCTOR", "color: red");
  }
  componentDidMount() {
    console.log("%c Parent COMPDIDMOUNT", "color: red");
  }
  render() {
    console.log("%c Parent RENDER", "color: red");

    return (
      <div className="box">
        <button
          onClick={() => {
            this.setState((prevState) => ({
              buttonText: prevState.buttonText + ".",
            }));
          }}
        >
          {this.state.buttonText}
        </button>
        <Child />
      </div>
    );
  }
}
