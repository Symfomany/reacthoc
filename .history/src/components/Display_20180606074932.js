import React, { Component } from "react";
import withStore from "../hoc/withStore";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("naaan");
    return true;
  }
  render() {
    return (
      <div>
        <p>{this.props.nbDisplay}</p>
        {this.props.nbDisplay > 15 && (
          <p>Je suis au dessus {this.props.nbDisplay}</p>
        )}
      </div>
    );
  }
}

export default withStore(Display);
