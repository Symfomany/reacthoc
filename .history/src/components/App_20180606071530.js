import React, { Component } from "react";
import Home from "./Home";
import Display from "./Display";
import Title from "./Title";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    const ThemeContext = React.createContext("light");
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
