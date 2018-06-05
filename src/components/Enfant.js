import React, { Component } from "react";
import withStore from "../hoc/withStore";

class Enfant extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <p>Hello</p>;
  }
}

export default withStore(Enfant);
