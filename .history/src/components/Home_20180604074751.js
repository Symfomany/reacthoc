import React, { Component } from "react";
import Title from "./Title";
/**
 * Composant Home
 */
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Je suis le Composant Home </h1>
        <Title />
      </div>
    );
  }
}

export default Home;
