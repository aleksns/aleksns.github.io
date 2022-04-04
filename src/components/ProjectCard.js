import { NavLink } from "react-router-dom";
import "../App.css";
import ProjectLink from "./ProjectLink";

export default function ProjectCard(props) {
  const { project } = props;
  return (
    <>
        <div className="project-card">
          <img src={project.image} className="project-card-img"></img>

          <div className="project-card-description">
          <h4 className="project-card-title">{project.title}</h4>
          <ProjectLink url={project.url} title={"Github"}/>

          {project.urlDemo? <ProjectLink url={project.urlDemo} title={"PLAY DEMO"}/> : null}
          </div>

        </div>
    </>
  );
}
