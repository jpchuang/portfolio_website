import React, { Component } from "react";

import NavToggler from "../Navbar/NavTogglerButton";

import "./style.css";
import picture1 from "../../Images/image_robotics.PNG";
import picture2 from "../../Images/image_cyber.PNG";
import picture3 from "../../Images/image_eth.PNG";

class Landingpage extends Component {
  render() {
    return (
      // Landingpage content
      <body className="landinglayout">
        {/* Header element */}

        <div className="container mb-4 mx-0" id="header">
          <div className="header-section">
            <div className="row row-title">
              {/* navToggler */}
              <div className="nav-toggler">
                <NavToggler click={this.props.navClickHandler} />
              </div>
              <div className="name-title">
                <h1>
                  JOEY HUANG{" "}
                  <span>
                    {" "}
                    <i className="fa fa-rocket w3-xxlarge" />
                  </span>
                </h1>
              </div>
            </div>
            <div className="row-sub-title-1">
              <h4>Aerospace &amp; Robotics Engineer</h4>
            </div>

            <div className="row-sub-title-2">
              <h5>
                "If things are not failing, you are not innovating enough" -
                Elon Musk
              </h5>
            </div>
          </div>
        </div>

        {/* Grid element */}

        <div className="row mx-auto" id="row1">
          <div className="col-lg-4 mb-3" id="image_wrap1">
            <div className="row-image">
              <a href="/robotics/">
                <img src={picture1} alt="wallpaper-robotics" />

                <div className="img_description">
                  <h3>Robotics </h3>
                </div>
              </a>
            </div>

            <div className="row mx-auto">
              <div className="container px-2">
                <p>
                  <h2>
                    <b>Robotics</b>
                  </h2>
                </p>
                <p>
                  Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                  condimentum, porta lectus vitae, ultricies congue gravida diam
                  non fringilla.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-3" id="image_wrap2">
            <div className="row-image">
              <a href="/Cybersecurity/">
                <img src={picture2} alt="wallpaper-cyber" />

                <div className="img_description">
                  <h3>Cyber &amp; Network Security</h3>
                </div>
              </a>
            </div>

            <div className="row mx-auto">
              <div className="container px-2">
                <p>
                  <h2>
                    <b>Cyber &amp; Network Security</b>
                  </h2>
                </p>
                <p>
                  Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                  condimentum, porta lectus vitae, ultricies congue gravida diam
                  non fringilla.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-3" id="image_wrap3">
            <div className="row-image">
              <a href="/crypto/">
                <img src={picture3} alt="wallpaper-crypto" />

                <div className="img_description">
                  <h3>Cryptocurrency &amp; Blockchain</h3>
                </div>
              </a>
            </div>

            <div className="row mx-auto">
              <div className="container px-2">
                <p>
                  <h2>
                    <b>Cryptocurrency &amp; Blockchain</b>
                  </h2>
                </p>
                <p>
                  Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                  condimentum, porta lectus vitae, ultricies congue gravida diam
                  non fringilla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default Landingpage;
