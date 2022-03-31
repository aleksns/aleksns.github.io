import "../App.css";

export default function ProjectCard(props) {
    const { project } = props;
  return (
    <>
      <div className="project-card">
          <img src = {project.image} className="project-card-img"></img>
        <h3>{project.title}</h3>
      </div>
    </>
  );
}
