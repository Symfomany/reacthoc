import React, { Component } from "react";
import PropTypes from "prop-types";

//Hoc: withQQCH()
// HOC: Hight Order Component
const withStore = ComponentToWrap => {
  return class extends Component {
    static contextTypes = {
      store: PropTypes.object.isRequired
    };
    render() {
      const { store } = this.context;
      return <ComponentToWrap {...this.props} store={store} />;
    }
  };
};
export default withStore;
