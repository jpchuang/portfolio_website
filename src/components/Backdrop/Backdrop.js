import React from "react";

import "./style.css";

const backdrop = props => {
  return <div className="backdrop" onClick={props.backdropClickHandler} />;
};

export default backdrop;
