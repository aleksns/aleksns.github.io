import "../App.css";
import ProjectCard from "../components/ProjectCard";
import { listOfProjects } from "../services/services";

export default function ProjectsSection() {
  return (
    <>
    <div className="section"></div>
    
      <h2 className="section header-section">Tech Stacks I Use in The Projects</h2>

      <div className="section-text-container">
        <h4 className="section-text-content-headline">
          Languages / Markup, StyleSheet
        </h4>
        <p className="section-text-content">
          JavaScript, Java, SQL, HTML, CSS, SCSS, Sass
        </p>

        <h4 className="section-text-content-headline">
          Frameworks / Libraries / REs
        </h4>
        <p className="section-text-content">
          React, Node.js, Express, JQuery, JRE, Bootstrap, MUI, Spring Boot,
          Jest, React Testing Library, Spring Cloud, Maven, Hibernate, REST API,
          JPA, Postman API, Nexus, Gradle
        </p>

        <h4 className="section-text-content-headline">Database</h4>
        <p className="section-text-content">MongoDB, SQL, PostgreSQL, MySQL</p>

        <h4 className="section-text-content-headline">Deployment</h4>
        <p className="section-text-content">Git, Github</p>
      </div>

      <h2 className="section header-section">My Projects</h2>

      <div className="projects-container">
        {listOfProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
