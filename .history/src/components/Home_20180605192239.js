import React, { Component } from "react";
import Title from "./Title";
import Card from "../facc/Card";

import Store from "../store/index.js";
/**
 * Composant Home
 */
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: Store
    };
  }
  render() {
    return (
      <div>
        <Card title="Je suis un beau titre">
          <Title />
        </Card>
      </div>
    );
  }
}

export default Home;
