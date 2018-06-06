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

    static contextTypes = {
      message: PropTypes.string.isRequired,
      store: PropTypes.object.isRequired
    };

    render() {
      return <ComponentToWrap store={this.state.store.data} />;
    }
  };
};
export default withStore;
