import React, { Component } from "react";
import withStore from "../hoc/withStore";
import Store from "../store/index.js";

/**
 * Composant Home
 */
class Title extends Component {
  constructor(props) {
    super(props);
    this.state = { nbDisplay: Store.data.nbDisplay };
    this.changer = this.changer.bind(this);
  }

  changer() {
    this.props.store.register("message", "Hello Alpha!");
    this.setState({ nbDisplay: Store.nbDisplay + 1 });
  }
  render() {
    const nb = 2;
    return (
      <div>
        <p>{Store.nbDisplay}</p>
        <button onClick={this.changer}>Changez-moi</button>
      </div>
    );
  }
}

export default withStore(Title);
