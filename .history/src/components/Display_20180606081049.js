import React, { Component } from "react";
import withStore from "../hoc/withStore";
import EventBus from "eventing-bus";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    EventBus.on("exampleEventName", this.hello);
  }
  shouldComponentUpdate(nextProps) {
    console.log("naaan");
    return true;
  }
  hello(name) {
    console.log("Hello" + name);
    this.forceUpdate();
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
