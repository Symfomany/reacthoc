import React, { Component } from "react";
import PropTypes from "prop-types";
import Subtitle from "./Subtitle";

/**
 * Composant Home
 */
class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3>Nb de produit à afficher {this.context.store.data.nbDisplay}</h3>
        <Subtitle />
      </div>
    );
  }
}

Title.contextTypes = {
  store: PropTypes.object
};

export default Title;
