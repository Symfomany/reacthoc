import React, { Component } from "react";
import withStore from "../hoc/withStore";
import PropTypes from "prop-types";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {
    console.log("laaa");
  }

  componentWillReceiveProps() {
    console.log("ouii");
  }

  componentWillUpdate() {
    console.log("okkk");
  }

  render() {
    return (
      <div>
        <h3> {this.props.data.nbDisplay}</h3>

        <button onClick={this.props.changer}>Changez-moi</button>

        {this.props.data.nbDisplay > 15 && (
          <p>Je suis au dessus {this.props.data.nbDisplay}</p>
        )}
      </div>
    );
  }
}

export default withStore(Display);
