import React, { Component } from "react";
import withStore from "../hoc/withStore";
import Store from "../store/index.js";

/**
 * Composant Home
 */
class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: Store
    };
    this.changer = this.changer.bind(this);
  }

  changer() {
    this.state.store.register("message", "Hello Alpha!");
    this.state.store.register("nbDisplay", this.state.store.data.nbDisplay + 1);
    this.forceUpdate();
  }
  render() {
    const nb = 2;
    return (
      <div>
        <p>{this.props.message}</p>
        <button onClick={this.changer}>Changez-moi</button>
      </div>
    );
  }
}

export default withStore(Title);
