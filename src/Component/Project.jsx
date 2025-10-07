import React, { useState } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import "./Project.css";

export const Project = () => {
  const [projectList, setProjectList] = useState([
    {
      name: "request email page",
      link: "https://form-project-mu.vercel.app/",
      git_hub_repo: "https://github.com/Bigman004/formProject",
      image_url: project1,
    },
    {
      name: "time tracker",
      link: "https://time-tracker-olive.vercel.app/",
      git_hub_repo: "https://github.com/Bigman004/timeTracker",
      image_url: project2,
    },
    {
      name: "form page",
      link: "https://sign-up-page-seven-mu.vercel.app/",
      git_hub_repo: "https://github.com/Bigman004/signUpPage",
      image_url: project3,
    },
  ]);
  return (
    <>
      <div className="project-container">
        {projectList.map((project) => (
          <div className="project">
            <div className="project-title">{project.name}</div>
            <img src={project.image_url} alt="" className="project-image" />
            <div className="project-link">
              <a href={project.git_hub_repo} className="git-hub-btn">
                code
              </a>
              <a href={project.link} className="site">
                link
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Project;
