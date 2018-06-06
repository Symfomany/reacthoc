import React, { Component } from "react";
import PropTypes from "prop-types";
import Store from "../store";
import EventBus from "eventing-bus";

//Hoc: withQQCH()
// HOC: Hight Order Component
const withStore = ComponentToWrap => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { data: Store.data, nb: 5 };
      this.changer = this.changer.bind(this);
    }

    changer() {
      Store.data.nbDisplay = Store.data.nbDisplay + 1;
      Store.data.message = "Je suis passé";
      this.setState({ data: Store.data, nb: this.state.nb + 1 });
      console.log("laaa");
    }

    render() {
      return (
        <ComponentToWrap
          {...this.props}
          {...this.state}
          nb={this.state.nb}
          data={this.state.data}
          onClick={this.changer}
        />
      );
    }
  };
};
export default withStore;
