import React from "react";

import "./style.css";
import Backbutton from "../../Backbutton/Back";

const robotics = () => {
  return (
    <div className="container-robotics">
      <div className="row mx-auto">
        <div className="col-lg-12">
          <div className="header-content">
            <div className="back-button">
              <Backbutton />
            </div>
            <h1>Robotics </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default robotics;
