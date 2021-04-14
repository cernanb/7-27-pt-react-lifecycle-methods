import React, { Component } from "react";

export default class GithubContainer extends Component {
  state = {
    people: [],
    page: 1,
    count: 0,
  };

  componentDidMount() {
    fetch(`https://swapi.dev/api/people/`)
      .then((res) => res.json())
      .then((data) => this.setState({ people: data.results }));
  }

  componentDidUpdate(_, prevState) {
    console.log("component did update");
    if (this.state.page !== prevState.page) {
      fetch(`https://swapi.dev/api/people/?page=${this.state.page}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.setState({ people: [...this.state.people, ...data.results] });
        });
    }
  }

  render() {
    return (
      <div className="box">
        {this.state.people.map((person) => (
          <p>{person.name}</p>
        ))}
        <button onClick={() => this.setState({ page: this.state.page + 1 })}>
          Get More People
        </button>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Count {this.state.count}
        </button>
      </div>
    );
  }
}
