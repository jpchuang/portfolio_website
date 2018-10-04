import React, { Component } from "react";

import "./style.css";

// images import
import Selfie from "../../Images/image_selfie.PNG";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // Sidebar - Menu
      <nav
        className="w3-sidebar w3-bar-block w3-white w3-animate-left w3-text-grey w3-collapse w3-center"
        id="Sidebar"
      >
        <div className="container mt-5">
          <img src={Selfie} alt="selfie" />
        </div>

        <div className="w3-bar-block">
          <h1 className="w3-padding-64 w3-center">JOEY HUANG</h1>
          <a href="#" className="w3-bar-item w3-button">
            PORTFOLIO
          </a>
          <a href="#" className="w3-bar-item w3-button">
            ABOUT ME
          </a>
          <a href="#" className="w3-bar-item w3-button">
            CONTACT
          </a>
        </div>

        <div className="container mt-5" id="button">
          <button class="w3-button w3-grey w3-padding-large w3-margin-top w3-margin-bottom">
            Curriculum Vitae
          </button>
        </div>

        <div className="container" id="icons">
          <a href="www.twitter.com">
            <i className="fa fa-twitter w3-hover-opacity w3-xxlarge" />
          </a>
          <a href="www.instagram.com">
            <i className="fa fa-instagram w3-hover-opacity w3-xxlarge" />
          </a>
          <a href="www.linkedin.com/jpchuang">
            <i className="fa fa-linkedin w3-hover-opacity w3-xxlarge" />
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
