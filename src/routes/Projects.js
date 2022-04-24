import "../App.css";
import ProjectsSection from "../sections/ProjectsSection";
import SkillsSection from "../sections/SkillsSection";

export default function Projects() {
  return (
    <>
      <div className="hero-image hero-projects-image">
        <div className="hero-text-container">
          <h1>RECENT PROJECTS</h1>
          <h3>High quality stuff</h3>
        </div>
      </div>

      <ProjectsSection />

      <SkillsSection />
    </>
  );
}
