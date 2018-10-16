import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const backButton = () => {
  return (
    <Link to="/" className="back-button my-3">
      <i className="fa fa-home" />
    </Link>
  );
};

export default backButton;
