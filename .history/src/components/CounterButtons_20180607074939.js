import React, { Component } from "react";
import { StateProvider } from "react-state-provider";
import emitter from "../store/emitter";
import Enfant from "./Enfant";
const ThemeContext = React.createContext("light");

class CounterButtons extends Component {
  constructor(props) {
    super(props);
    this.StateProvider = StateProvider.getState("store");
    this.state = { store: this.StateProvider.get("store") };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    let store = { ...this.state.store };
    store.nbDisplay = store.nbDisplay + 1;

    if (store.nbDisplay > 20) {
      store.displayBlocks += 5;
      emitter.emit("lala");
      console.log("oki");
    } else if (store.nbDisplay === 0) {
      store.displayBlocks = 0;
    }
    this.setState({ store: store });
    this.StateProvider.update("store", store);
  }

  decrement() {
    let store = { ...this.state.store };
    store.nbDisplay = store.nbDisplay - 1;
    this.setState({ store: store });
    this.StateProvider.update("store", store);
  }

  reset() {
    let store = { ...this.state.store };
    store.nbDisplay = 0;
    this.setState({ store: store });
    this.StateProvider.update("store", store);
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>
          - {this.state.store.displayBlocks}
        </button>
        <ThemeContext.Consumer>
          {theme => (theme = <Enfant theme={theme} />)}
        </ThemeContext.Consumer>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default CounterButtons;
