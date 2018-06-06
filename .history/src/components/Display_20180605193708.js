import React, { Component } from "react";
import withStore from "../hoc/withStore";
import PropTypes from "prop-types";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = { nbDisplay: this.props.store.data.nbDisplay };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props, state);
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
Display.ContextTypes = {
  store: PropTypes.object
};

export default withStore(Display);
