import React from "react";

import "./style.css";
import Backbutton from "../../Backbutton/Back";

const cyber = () => {
  return (
    <div className="container-cyber">
      <div className="row mx-auto">
        <div className="col-lg-12">
          <div className="header-content">
            <div className="back-button">
              <Backbutton />
            </div>
            <h1>Cyber &amp; Network Security </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cyber;
