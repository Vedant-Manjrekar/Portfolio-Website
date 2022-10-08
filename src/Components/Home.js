import React from "react";
import TypeIt from "typeit-react";

function Home() {
  return (
    <div className="container">
      <div className="intro">
        <p className="salutation" id="salutation">
          <TypeIt
            options={{
              strings: ["Hi, my name is"],
              speed: 50,
              waitUntilVisible: true,
            }}
          />
        </p>
        <p className="name">
          <TypeIt
            getBeforeInit={(instance) => {
              instance.type("Vedant Manjrekar.").pause(1000).pause(500);

              return instance;
            }}
          />
          <br />{" "}
          <p className="highlight">
            <TypeIt
              getBeforeInit={(instance) => {
                instance
                  .pause(2500)
                  .type("I build stuff for the Web.")
                  .pause(1000);

                return instance;
              }}
            />
          </p>
        </p>
        <p className="sum">
          <TypeIt
            getBeforeInit={(instance) => {
              instance
                .pause(3500)
                .type(
                  "I am a design minded front-end developer, based in India."
                )
                .pause(750)
                .delete(57)
                .pause(500)
                .type("Front-end / Back-end / MERN Stack.");

              //   instance.reset();

              return instance;
            }}
          />
        </p>

        <div className="contact-me">
          <button className="btn">
            <a href="/contact" className="resume">
              Contact Me
            </a>
          </button>
          <button className="btn">
            <a className="resume" href="/">
              Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
