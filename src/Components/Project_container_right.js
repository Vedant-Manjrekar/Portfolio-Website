import React from "react";

function Project_container_right({ photo, description, github, link }) {
  return (
    <div className="project_container pcr">
      <div className="descrptn_R">{description}</div>
      <div className="sources_R">
        <a href={github}>Github</a>
        <a href={link}>Link</a>
      </div>
      <div className="photo">
        <img className="pic_R" src={photo} alt="photo" />
      </div>
    </div>
  );
}

export default Project_container_right;
