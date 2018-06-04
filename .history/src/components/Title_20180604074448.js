import React, { Component } from "react";
import PropTypes from "prop-types";

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
        <h3>Nb de produit à afficher {this.context.store.nbDisplay}</h3>
      </div>
    );
  }
}

Title.contextTypes = {
  store: PropTypes.object
};

export default Title;
