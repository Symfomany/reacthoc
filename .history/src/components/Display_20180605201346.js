import React, { Component } from "react";
import withStore from "../hoc/withStore";
import PropTypes from "prop-types";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = { nbDisplay: this.props.store.data.nbDisplay };
  }

  static getDerivedStateFromProps(props, current_state) {
    console.log("okkk");
    console.log(props);
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (props.startTime !== this.state.nbDisplay) {
      this.setState({ nbDisplay: props.nbDisplay });
    }
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
