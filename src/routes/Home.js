import "../App.css";
import AboutSection from "../sections/AboutSection";
import HeroSection from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";
import SkillsSection from "../sections/SkillsSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <h2 className="section header-section">RECENT PROJECTS</h2>
      <ProjectsSection />

      <div className="section-small"></div>
      <AboutSection />

      <SkillsSection />
    </>
  );
}
