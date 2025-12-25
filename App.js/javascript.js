import React, { Component } from "react";
import Profile from "./Profile";
import Counter from "./Counter";

class App extends Component {
  state = {
    user: {
      fullName: "Oderinde Femi",
      age: 25,
      profession: "Developer",
    },
    showProfile: false,
  };

  toggleProfile = () => {
    this.setState({ showProfile: !this.state.showProfile });
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Welcome to the Sample React App</h1>
        <button onClick={this.toggleProfile}>
          {this.state.showProfile ? "Hide" : "Show"} Profile
        </button>
        {this.state.showProfile && <Profile user={this.state.user} />}
        <Counter />
      </div>
    );
  }
}

export default App;
