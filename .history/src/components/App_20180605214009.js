import React, { Component } from "react";
import Home from "./Home";
import Display from "./Display";
import Title from "./Title";
import Store from "../store";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: Store
    };
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Display />
      </div>
    );
  }
}

export default App;
