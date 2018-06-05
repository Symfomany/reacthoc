import React, { Component } from "react";
import withStore from "../hoc/withStore";

/**
 * Composant Home
 */
class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changer = this.changer.bind(this);
  }

  changer() {
    this.props.store.register("message", "Hello Alpha!");
    this.props.store.register("nbDisplay", this.props.store.data.nbDisplay + 1);
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
