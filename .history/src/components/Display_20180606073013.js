import React, { Component } from "react";
import withStore from "../hoc/withStore";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = { nbDisplay: this.props.store.data.nbDisplay };
  }

  render() {
    return (
      <div>
        <p>{this.state.nbDisplay}</p>
        {this.props.store.data.nbDisplay > 15 && (
          <p>Je suis au dessus {this.props.store.data.nbDisplay}</p>
        )}
      </div>
    );
  }
}

export default withStore(Display);
