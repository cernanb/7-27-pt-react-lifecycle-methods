import React, { Component } from "react";
import GrandChild from "./GrandChild";

export default class Child extends Component {
  constructor() {
    super();
    this.state = {
      buttonText: "Child",
    };
    console.log("%c Child CONSTRUCTOR", "color: green");
  }
  componentDidMount() {
    console.log("%c Child COMPDIDMOUNT", "color: green");
  }
  render() {
    console.log("%c Child RENDER", "color: green");

    return (
      <div className="box">
        <button
          onClick={() => {
            this.setState((prevState) => ({
              buttonText: prevState.buttonText + "?",
            }));
          }}
        >
          {this.state.buttonText}
        </button>
        <GrandChild />
      </div>
    );
  }
}

// Parent Constructor
// Parent Render
// Child Constructor
// Child Render
// GrandChild Constructor
// GrandChild Render
// Parent CDM
// Child CDM
// GrandChild CDM
