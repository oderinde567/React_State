import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Person: {
        fullName: "John Doe",
        bio: "A passionate software developer",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Frontend Developer",
      },
      shows: false,
      timeInterval: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        timeInterval: this.state.timeInterval + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleShow = () => {
    this.setState({
      shows: !this.state.shows,
    });
  };

  render() {
    const { Person, shows, timeInterval } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        <p>Component mounted since: {timeInterval} seconds</p>

        {shows && (
          <div>
            <img src={Person.imgSrc} alt="profile" />
            <h2>{Person.fullName}</h2>
            <p>{Person.bio}</p>
            <h4>{Person.profession}</h4>
          </div>
        )}
      </div>
    );
  }
}

export default App;
