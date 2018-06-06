import React, { Component } from "react";
import withStore from "../hoc/withStore";

/**
 * Composant Home
 */
class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const nb = 2;
    return (
      <div>
        <p>{this.props.store.data.nbDisplay}</p>
        <button onClick={this.props.changer}>Changez-moi</button>
      </div>
    );
  }
}

export default withStore(Title);
