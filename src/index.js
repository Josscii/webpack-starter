import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";
import Test from "./test";

class App extends React.Component {
  render() {
    return [<div>Hello {this.props.name}</div>, <Test />];
  }
}

var mouteNode = document.getElementById("app");

ReactDOM.render(<App name="Jane" />, mouteNode);
