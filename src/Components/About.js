import React from "react";
import photo from "../assets/ved_dp.png";

function About() {
  return (
    <div className="about">
      <div className="about-me">
        <div className="heading fade-in">About me</div>
        <div className="small-about fade-in">
          Hello, I am Vedant Manjrekar.
          <br />
          <br />
          I am a web developer with a focus on the MERN stack, also a creative
          designer, who aims to work with small business and marginalized
          communities to bring their passion to life.
          <br />
          <br />I like exploring other technologies and frameworks that catch my
          interest!
          <div className="photo roll-in-right">
            <img src={photo} className="photo1" alt="Picture" />
          </div>
        </div>
        <div className="tech-stack">
          <div className="small-about fade-in">
            Tech Stack (Technologies I’ve been working with recently)
          </div>
          <div className="small-about fade-in">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript (ES6) </li>
              <li>React</li>
              <li>Express</li>
              <li>MongoDb</li>
              <li>NodeJs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
