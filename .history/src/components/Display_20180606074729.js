import React, { Component } from "react";
import withStore from "../hoc/withStore";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("ouiii");
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
