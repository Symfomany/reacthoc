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
        store: Store
      };
    }

    changer() {
      Store.data.nbDisplay = Store.data.nbDisplay + 1;
      console.log(Store);
      this.setState({ store: Store });
    }

    render() {
      return <ComponentToWrap store={this.state.store} {...this.props} />;
    }
  };
};
export default withStore;
