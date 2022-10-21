import React from "react";
import Inside_About from "./Inside_About";

function About() {
  return (
    <div className="about">
      <div className="about-me">
        <div className="bracket">&lt;about me&gt;</div>

        <div className="about-content">
          <div className="line"></div>
          <Inside_About />
        </div>

        <div className="bracket">&lt;/about me&gt;</div>
      </div>
    </div>
  );
}

export default About;
