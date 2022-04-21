import "../App.css";
import ProjectLink from "./ProjectLink";

export default function ProjectCard(props) {
  const { project } = props;
  return (
    <div className="project-card">
      <img
        src={project.image}
        alt="Project Card"
        className="project-card-img"
      ></img>
      <div className="project-card-content">
        <h4 className="project-card-title">{project.title}</h4>
        <p className="project-card-description">{project.description}</p>

        <div className="project-card-links-container">
          <ProjectLink url={project.url} title={"Github"} />
          {project.urlDemo ? (
            <ProjectLink url={project.urlDemo} title={"PLAY DEMO"} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
