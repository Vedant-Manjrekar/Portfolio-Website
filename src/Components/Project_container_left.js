import React from "react";

function Project_container_left({ photo, description, link, github }) {
  return (
    <div className="project_container">
      <div className="photo">
        <img className="pic" src={photo} alt="photo" />
      </div>
      <div className="descrptn">{description}</div>
      <div className="sources">
        <a href={link}>Link</a>
        <a href={github}>Github</a>
      </div>
    </div>
  );
}

export default Project_container_left;
