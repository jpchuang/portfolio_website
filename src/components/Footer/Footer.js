import React from "react";

import "./style.css";

const footer = () => {
  return (
    <div className="container-footer mt-5">
      <div className="col-lg-12 p-0 mt-4 column-content">
        <div className="row mt-4">
          <div className="col-lg-4">
            <div className="footer-content">
              <h1>FOOTER</h1>
              <p>
                Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                condimentum, porta lectus vitae, ultricies congue gravida diam
                non fringilla.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-content">
              <h1>BLOG POSTS</h1>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tags-content">
              <h1>POPULAR TAGS</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
