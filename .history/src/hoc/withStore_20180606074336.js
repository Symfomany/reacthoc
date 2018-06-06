import React, { Component } from "react";
import PropTypes from "prop-types";
import Store from "../store";

//Hoc: withQQCH()
// HOC: Hight Order Component
const withStore = ComponentToWrap => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { nbDisplay: Store.data.nbDisplay };

      this.changer = this.changer.bind(this);
    }

    changer() {
      Store.data.nbDisplay = Store.data.nbDisplay + 1;
      this.setState({ nbDisplay: Store.data.nbDisplay });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.nbDisplay !== Store.data.nbDisplay) {
        console.log("ok");
      }
    }

    render() {
      console.log("one");
      return (
        <ComponentToWrap
          changer={this.changer}
          nbDisplay={this.state.nbDisplay}
        />
      );
    }
  };
};
export default withStore;
