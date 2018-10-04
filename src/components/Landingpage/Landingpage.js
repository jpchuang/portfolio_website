import React, { Component } from "react";

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

        <div className="container mb-5" id="header">
          <div className="w3-section w3-bottombar w3-padding-16 w3-center">
            <div className="w3-row w3-bold">
              <h1>
                JOEY HUANG{" "}
                <span>
                  {" "}
                  <i className="fa fa-rocket w3-xxlarge" />
                </span>
              </h1>
            </div>
            <div className="w3-row">
              <h4>Aerospace &amp; Robotics Engineer</h4>
            </div>
          </div>
        </div>

        {/* Grid element */}

        <div className="row mx-auto" id="row1">
          <div className="col-lg-4 mb-3" id="image_wrap1">
            <a href="/robotics/">
              <img src={picture1} alt="wallpaper-robotics" />

              <div className="w3-container w3-light-grey py-3">
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
            </a>

            <div className="img_description">
              <h3>Robotics </h3>
            </div>
          </div>

          <div className="col-lg-4 mb-3" id="image_wrap2">
            <img src={picture2} alt="wallpaper-cyber" />
            <div className="w3-container w3-light-grey py-3">
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

            <div className="img_description">
              <h3>Cyber &amp; Network Security</h3>
            </div>
          </div>

          <div className="col-lg-4 mb-3" id="image_wrap3">
            <img src={picture3} alt="wallpaper-crypto" />
            <div className="w3-container w3-light-grey py-3">
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
            <div className="img_description">
              <h3>Cryptocurrency &amp; Blockchain</h3>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default Landingpage;
