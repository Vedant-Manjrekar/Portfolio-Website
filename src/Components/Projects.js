import React from "react";
import Project_container_left from "./Project_container_left";
import Project_container_right from "./Project_container_right";
import messaging_app from "../assets/messaging_app.png";
import netflix_1 from "../assets/netflix_1.png";
import NotesApp1 from "../assets/NotesApp1.png";
import meme_generator from "../assets/meme_generator.png";

function Projects() {
  return (
    <div className="projects">
      <h1 className="proj_head">PROJECTS</h1>
      <div className="container_p">
        <Project_container_left
          photo={netflix_1}
          link={"https://netflix-clone-theta-liart.vercel.app/"}
          github={"https://github.com/Vedant-Manjrekar/Netflix-Clone"}
          description={"Netflix Clone. Made using ReactJs and FireBase"}
        />
        <Project_container_right
          photo={meme_generator}
          link={"https://meme-generator28.vercel.app/"}
          github={"https://github.com/Vedant-Manjrekar/Meme-Generator"}
          description={"Meme Generator + Editor made using ReactJs."}
        />
        <Project_container_left
          photo={NotesApp1}
          description={"Notes App. Made using MERN stack"}
        />
        <Project_container_right
          photo={messaging_app}
          link={"#"}
          github={"https://github.com/Vedant-Manjrekar/messaging-app"}
          description={"Messaging App. Made using ReactJs and Firebase."}
        />
      </div>
    </div>
  );
}

export default Projects;
