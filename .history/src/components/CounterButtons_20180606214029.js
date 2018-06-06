import React, { Component } from "react";
import { StateProvider } from "react-state-provider";
import { EventEmitter } from "fbemitter";

class CounterButtons extends Component {
  constructor(props) {
    super(props);
    this.StateProvider = StateProvider.getState("store");
    this.state = { store: this.StateProvider.get("store") };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.emitter = new EventEmitter();
  }

  increment() {
    let store = { ...this.state.store };
    store.nbDisplay = store.nbDisplay + 1;

    if (store.nbDisplay > 20) {
      store.displayBlocks += 5;
    } else if (store.nbDisplay === 0) {
      store.displayBlocks = 0;
    }
    this.setState({ store: store });
    this.StateProvider.update("store", store);

    this.emitter.addListener("lala", function(x, y) {
      console.log(x, y);
    });
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
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default CounterButtons;
