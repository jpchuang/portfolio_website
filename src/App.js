import React, { Component } from "react";
import "./App.css";
// import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Landingpage from "./components/Landingpage/Landingpage";
import Backdrop from "./components/Backdrop/Backdrop";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = {
    navBarOpen: true
  };

  navToggleClickHandler = () => {
    // nested functions, function in a setState function
    this.setState(prevState => {
      return { navBarOpen: !prevState.navBarOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ navBarOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.navBarOpen) {
      backdrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />;
    }

    return (
      <div id="mainBody">
        <Navbar slideNav={this.state.navBarOpen} />;
        <Landingpage navClickHandler={this.navToggleClickHandler} />
        {backdrop}
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
