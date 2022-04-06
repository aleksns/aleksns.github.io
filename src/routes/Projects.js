import "../App.css";
import ProjectsSection from "../sections/ProjectsSection";

export default function Projects() {
  return (
    <>
    <div className="hero-image hero-projects-image">
        <div className="hero-text-container">
          <h1>My Projects</h1>
          <h3>High quality stuff</h3>
        </div>
      </div>

      <div className="section"></div>

    <ProjectsSection />
    </>
  );
}
