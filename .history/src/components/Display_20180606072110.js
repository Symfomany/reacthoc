import React, { Component } from "react";
import withStore from "../hoc/withStore";
import PropTypes from "prop-types";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = { nbDisplay: this.props.store.data.nbDisplay };
  }

  render() {
    const { watch } = this.props;
    console.log(watch);
    return (
      <div>
        {this.props.store.data.nbDisplay > 15 && (
          <p>Je suis au dessus {this.state.nbDisplay}</p>
        )}
      </div>
    );
  }
}

export default withStore(Display);
