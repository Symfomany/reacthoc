import React, { Component } from "react";
import withStore from "../hoc/withStore";
import PropTypes from "prop-types";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: Store
    };
  }

  render() {
    return (
      <div>
        {this.state.store.data.nbDisplay > 15 && (
          <p>Je suis au dessus {this.state.store.data.nbDisplay}</p>
        )}
      </div>
    );
  }
}
Display.ContextTypes = {
  store: PropTypes.object
};

export default withStore(Display);
