import React, { Component, Children } from "react";
import PropTypes from "prop-types";

class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render() {
    return Children.only(this.props.children);
  }
}

AppProvider.childContextTypes = {
  store: PropTypes.object
};

AppProvider.propTypes = {
  store: PropTypes.object.isRequired
};

export default AppProvider;
