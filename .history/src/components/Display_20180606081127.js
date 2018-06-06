import React, { Component } from "react";
import withStore from "../hoc/withStore";
import EventBus from "eventing-bus";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.hello = this.hello.bind(this);
    EventBus.on("exampleEventName", this.hello);
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
