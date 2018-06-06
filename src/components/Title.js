import React, { Component } from "react";
import withStore from "../hoc/withStore";
import Display from "./Display";

/**
 * Composant Home
 */
class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>{this.props.data.nbDisplay}</p>
        <p>{this.props.nb}</p>

        <button onClick={this.props.changer}>Changez-moi</button>
      </div>
    );
  }
}
export default withStore(Title);
