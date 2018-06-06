import React, { Component } from "react";

const connect = (Component, subscribe) => {
  return class HOC extends React.Component {
    constructor(props) {
      super(props);

      const rerender = props => this.setState(props);
      subscribe(rerender);
    }

    render() {
      return <Component {...this.props} {...this.state} />;
    }
  };
};
const App = connect(({ name }) => <h1>Hello {name || "world"}!</h1>);
