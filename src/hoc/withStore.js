import React, { Component } from "react";
import PropTypes from "prop-types";

//Hoc: withQQCH()
// HOC: Hight Order Component
const withStore = ComponentToWrap => {
  return class extends Component {
    static contextTypes = {
      message: PropTypes.string.isRequired,
      store: PropTypes.object.isRequired
    };
    render() {
      return <ComponentToWrap {...this.context} />;
    }
  };
};
export default withStore;
