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
        <p>{this.props.nbDisplay}</p>
        <button onClick={this.props.changer}>Changez-moi</button>
        <Display nbDisplay={this.props.nbDisplay} />
      </div>
    );
  }
}

export default withStore(Title);
