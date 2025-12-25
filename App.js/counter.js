import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: "0", // BUG: count should be a number, not a string
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 }); // BUG: string concatenation
  };

  render() {
    return (
      <div style={{ marginTop: "20px" }}>
        <h2>Counter</h2>
        <p>Current Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
