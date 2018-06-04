import React, { Component } from "react";
import PropTypes from "prop-types";
import withStore from "../hoc/withStore";

/**
 * Composant HSubtitleome
 */
class Subtitle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>Nb de block: {this.props.store.data.displayBlocks}</div>;
  }
}

export default withStore(Subtitle);
