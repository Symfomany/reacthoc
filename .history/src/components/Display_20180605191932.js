import React, { Component } from "react";
import withStore from "../hoc/withStore";
import PropTypes from "prop-types";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static getDerivedStateFromProps(props, state) {
    console.log("okkk");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("kkkkokkk");
  }
  render() {
    return (
      <div>
        {this.props.store.data.nbDisplay > 15 && (
          <p>Je suis au dessus {this.props.store.data.nbDisplay}</p>
        )}
      </div>
    );
  }
}
Display.ContextTypes = {
  store: PropTypes.object
};

export default withStore(Display);
