import React, { Component, Children } from "react";
import PropTypes from "prop-types";

class AppProvider extends Component {
  static childContextTypes = {
    store: PropTypes.object,
    message: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  getChildContext() {
    return {
      store: this.props.store,
      message: "Lala"
    };
  }

  render() {
    return this.props.children;
  }
}

AppProvider.propTypes = {
  store: PropTypes.object.isRequired
};

export default AppProvider;
