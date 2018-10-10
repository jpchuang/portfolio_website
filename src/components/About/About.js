import React from "react";

import "./style.css";

const about = () => {
  return (
    <div className="container-about mt-5">
      <div className="row mx-auto">
        <div className="about-content mt-4">
          <h1>About Me</h1>
          <p>
            Just me, myself and I, exploring the universe of unknownment. I have
            a heart of love and an interest of lorem ipsum and mauris neque quam
            blog. I want to share my world with you. Praesent tincidunt sed
            tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
            ultricies congue gravida diam non fringilla. Praesent tincidunt sed
            tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
            ultricies congue gravida diam non fringilla.
          </p>
        </div>
        <div className="skills-content mt-3">
          <h1>Experience &amp; Technical Skills</h1>
          <p>C++, Javascript, Reactjs, Network Security, Engineering skills</p>
        </div>
      </div>
    </div>
  );
};

export default about;
