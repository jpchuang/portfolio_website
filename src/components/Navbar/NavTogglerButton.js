import React from "react";

import "./navtoggler.css";

const navTogglerButton = props => {
  return (
    <button className="toggle-button" onClick={props.click}>
      <i className="fa fa-bars" />
    </button>
  );
};

export default navTogglerButton;
