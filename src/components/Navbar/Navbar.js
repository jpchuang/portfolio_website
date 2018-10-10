import React, { Component } from "react";

import "./nav_style.css";

// images import
import Selfie from "../../Images/image_selfie.PNG";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // sidebar

    let navClasses =
      "navbar slideNav navbar-collapse align-items-center flex-sm-column flex-row";
    if (this.props.slideNav) {
      navClasses =
        "navbar navbar-collapse align-items-center flex-sm-column flex-row";
    }

    return (
      <nav className={navClasses}>
        <div className="container mt-5 container-picture">
          <img src={Selfie} alt="selfie" />
        </div>

        <div className="list-container p-0 ">
          <ul className="p-0">
            <li className="title-name">
              <h1 className="w3-padding-64 w3-center">JOEY HUANG</h1>
            </li>
            <li>
              <a href="#" className="w3-bar-item w3-button">
                PORTFOLIO
              </a>
            </li>
            <li>
              <a href="#" className="w3-bar-item w3-button">
                ABOUT ME
              </a>
            </li>
            <li>
              <a href="#" className="w3-bar-item w3-button">
                CONTACT
              </a>
            </li>
          </ul>
        </div>

        <div className="button-container mt-5 mb-3">
          <a href="/CV/">
            <button className="button">Curriculum Vitae</button>
          </a>
        </div>

        <div className="icon-container">
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
