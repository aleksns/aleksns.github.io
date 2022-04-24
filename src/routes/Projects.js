import "../App.css";
import ProjectsSection from "../sections/ProjectsSection";
import SkillsSection from "../sections/SkillsSection";

export default function Projects() {
  return (
    <>
      <div className="hero-image hero-image-projects">
        <div className="hero-text-container">
          <h1>RECENT PROJECTS</h1>
          <h3>High Quality Stuff</h3>
        </div>
      </div>

      <ProjectsSection />

      <SkillsSection />
    </>
  );
}
