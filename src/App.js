import React, { Component } from "react";
import Forecast from "./components/Forecast";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <h1>Forecast Start</h1>
        <Forecast></Forecast>
        <h1>Forecast End</h1>
      </>
    );
  }
}

export default App;
