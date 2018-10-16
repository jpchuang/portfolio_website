import React, { Component } from "react";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landingpage from "./components/Landingpage/Landingpage";
import Backdrop from "./components/Backdrop/Backdrop";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Robotics from "./components/Pages/Robotics/Robotics";
import Cyber from "./components/Pages/Cyber/Cyber";
import Crypto from "./components/Pages/Crypto/Crypto";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarOpen: true,
      isDesktop: false
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 1450 });
  }

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
    const isDesktop = this.state.isDesktop;

    let backdrop;

    if (this.state.navBarOpen) {
      backdrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />;
    }

    return (
      <div>
        {isDesktop ? (
          <Router>
            <div id="mainBody">
              <div className="nav-side">
                <Navbar slideNav={this.state.navBarOpen} />;
              </div>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <div className="main-page">
                      <Landingpage
                        navClickHandler={this.navToggleClickHandler}
                      />
                      {backdrop}
                      <About />
                      <Footer />
                    </div>
                  )}
                />
              </Switch>
              <Switch>
                <Route
                  path="/robotics/"
                  render={() => (
                    <div className="robotics-page">
                      <Robotics />
                    </div>
                  )}
                />
              </Switch>
              <Switch>
                <Route
                  path="/cyber/"
                  render={() => (
                    <div className="cyber-page">
                      <Cyber />
                    </div>
                  )}
                />
              </Switch>
              <Switch>
                <Route
                  path="/crypto/"
                  render={() => (
                    <div className="crypto-page">
                      <Crypto />
                    </div>
                  )}
                />
              </Switch>
            </div>
          </Router>
        ) : (
          <Router>
            <div id="mainBody">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <div className="main-page">
                      <Navbar
                        slideNav={this.state.navBarOpen}
                        navClickHandler={this.navToggleClickHandler}
                      />
                      ;
                      <Landingpage
                        navClickHandler={this.navToggleClickHandler}
                      />
                      {backdrop}
                      <About />
                      <Footer />
                    </div>
                  )}
                />
              </Switch>
              <Switch>
                <Route
                  path="/robotics/"
                  render={() => (
                    <div className="robotics-page">
                      <Robotics />
                    </div>
                  )}
                />
              </Switch>
              <Switch>
                <Route
                  path="/cyber/"
                  render={() => (
                    <div className="cyber-page">
                      <Cyber />
                    </div>
                  )}
                />
              </Switch>
              <Switch>
                <Route
                  path="/crypto/"
                  render={() => (
                    <div className="crypto-page">
                      <Crypto />
                    </div>
                  )}
                />
              </Switch>
            </div>
          </Router>
        )}
      </div>
    );
  }
}

export default App;
