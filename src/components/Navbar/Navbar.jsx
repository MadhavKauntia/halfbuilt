import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="halfbuilt__navbar section__margin">
      <div className="halfbuilt__navbar-navs">
        <div className="halfbuilt__navbar-navs_content">
          <p className="purple">explore</p>
          <p>my projects</p>
          <p>community</p>
        </div>
        <div className="halfbuilt__navbar-navs_line"></div>
      </div>
      <div className="halfbuilt__navbar-profile">
        <p>KG</p>
      </div>
    </div>
  );
};

export default Navbar;
