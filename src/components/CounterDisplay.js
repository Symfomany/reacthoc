import React, { Component } from "react";
import { StateProvider } from "react-state-provider";

class CounterDisplay extends Component {
  constructor(props) {
    super(props);

    // Retrive the store you create with its name
    this.counterState = StateProvider.getState("store");
    this.onCounterIncrease = this.onCounterIncrease.bind(this);

    // magasin de donnée
    this.state = {
      store: this.counterState.get("store")
    };
  }

  componentDidMount() {
    this.counterState.observe("store", this.onCounterIncrease);
  }

  compnentWillUnmount() {
    this.counterState.destroy("store", this.onCounterIncrease);
  }

  onCounterIncrease(store) {
    this.setState({
      store: store
    });
  }
  render() {
    return <div>{this.state.store.nbDisplay} </div>;
  }
}

export default CounterDisplay;
