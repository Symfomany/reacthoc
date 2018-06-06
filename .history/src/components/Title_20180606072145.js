import React, { Component } from "react";
import withStore from "../hoc/withStore";
import Store from "../store/index.js";

/**
 * Composant Home
 */
class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changer = this.changer.bind(this);
  }

  render() {
    const nb = 2;
    return (
      <div>
        <p>{this.props.store.data.nbDisplay}</p>
        <button onClick={this.changer}>Changez-moi</button>
      </div>
    );
  }
}

export default withStore(Title);
