import React, { Component } from "react";
import "./App.css";
// import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Landingpage from "./components/Landingpage/Landingpage";

class App extends Component {
  render() {
    return (
      <div id="mainBody">
        <Navbar />
        <Landingpage />
      </div>
    );
  }
}

export default App;
