import React from "react";

import "./style.css";
import Backbutton from "../../Backbutton/Back";

const crypto = () => {
  return (
    <div className="container-crypto">
      <div className="row mx-auto">
        <div className="col-lg-12">
          <div className="header-content">
            <div className="back-button">
              <Backbutton />
            </div>
            <h1>Cryptocurrency &amp; Blockchain </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default crypto;
