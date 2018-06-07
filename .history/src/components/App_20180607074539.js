import React, { Component } from "react";
import Home from "./Home";
import Display from "./Display";
import Title from "./Title";
import { StateProvider } from "react-state-provider";
import CounterDisplay from "./CounterDisplay";
import CounterButtons from "./CounterButtons";
import Store from "../store";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.counterState = StateProvider.createState("store", Store.data);
    const ThemeContext = React.createContext("light");
  }

  componentWillUnmount() {
    StateProvider.destroy("store");
  }

  render() {
    return (
      <div className="App">
        <ThemeContext.Provider value={this.state.theme}>
          <CounterDisplay />
          <CounterButtons />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
