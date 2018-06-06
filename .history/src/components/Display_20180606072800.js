import React, { Component } from "react";
import withStore from "../hoc/withStore";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>{this.props.store.data.nbDisplay}</p>
        {this.props.store.data.nbDisplay > 15 && (
          <p>Je suis au dessus {this.props.store.data.nbDisplay}</p>
        )}
      </div>
    );
  }
}

export default withStore(Display);
