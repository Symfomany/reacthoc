import React, { Component } from "react";
import Home from "./Home";
import Display from "./Display";
import Title from "./Title";
import { StateProvider } from "react-state-provider";
import CounterDisplay from "./CounterDisplay";
import CounterButtons from "./CounterButtons";
import Store from "../store";

const ThemeContext = React.createContext("light");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        bg: "#fff",
        fg: "#eee"
      }
    };
    this.counterState = StateProvider.createState("store", Store.data);
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
