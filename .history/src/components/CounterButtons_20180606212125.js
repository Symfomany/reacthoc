import React, { Component } from "react";
import { StateProvider } from "react-state-provider";

class CounterButtons extends Component {
  constructor(props) {
    super(props);
    this.Store = StateProvider.getState("store");
    this.state = {
      store: this.counterState.get("store")
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    let Store = { ...this.state.store };
    Store.nbDisplay = Store.nbDisplay + 1;
    this.setState({
      store: Store
    });
    this.Store.update("store", Store);
  }

  decrement() {
    this.setState(
      prevState => {
        prevState.store.data.nbDisplay = prevState.store.data.nbDisplay - 1;

        if (prevState.store.data.nbDisplay == 1)
          prevState.store.data.nbDisplay = 2;
        return {
          store: prevState
        };
      },
      () => {
        this.counterState.update("store", this.state.store);
      }
    );
  }

  reset() {
    this.setState(
      prevState => {
        prevState.store.data.nbDisplay = 0;

        return {
          store: prevState
        };
      },
      () => {
        // update the counterState with newValue
        // this will notifiy the all the component that listen
        // for counter vaue change
        this.counterState.update("store", 1);
      }
    );
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default CounterButtons;
