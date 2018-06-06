import React, { Component } from "react";
import PropTypes from "prop-types";
import Store from "../store";

//Hoc: withQQCH()
// HOC: Hight Order Component
const withStore = ComponentToWrap => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        store: Store.data
      };
    }

    render() {
      return <ComponentToWrap store={this.state.store} />;
    }
  };
};
export default withStore;
