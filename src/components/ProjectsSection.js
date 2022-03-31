import "../App.css";
import ProjectCard from "../components/ProjectCard";
import { listOfProjects } from "../services/services";

export default function ProjectsSection() {
  return (
    <>
      <h2 className="section-header">My Projects</h2>
      <div className="projects-container">
        {listOfProjects.map((project) => (
          <ProjectCard key ={project.id} project={project}/>
        ))}
      </div>
    </>
  );
}
