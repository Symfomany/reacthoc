import React, { Component } from "react";
import Home from "./Home";
import Display from "./Display";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Home />
        <Display />
      </div>
    );
  }
}

export default App;
