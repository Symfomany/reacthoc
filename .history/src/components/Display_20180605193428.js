import React, { Component } from "react";
import withStore from "../hoc/withStore";
import PropTypes from "prop-types";
import Store from "../store/index.js";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = { nbDisplay: Store.data.nbDisplay };
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
