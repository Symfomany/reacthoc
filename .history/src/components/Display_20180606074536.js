import React, { Component } from "react";
import withStore from "../hoc/withStore";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = { nbDisplay: this.props.nbDisplay };
  }

  render() {
    return (
      <div>
        <p>{this.state.nbDisplay}</p>
        {this.state.nbDisplay > 15 && (
          <p>Je suis au dessus {this.state.nbDisplay}</p>
        )}
      </div>
    );
  }
}

export default withStore(Display);
