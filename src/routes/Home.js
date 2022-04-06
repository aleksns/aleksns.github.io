import "../App.css";
import CatSection from "../sections/CatSection";
import HeroSection from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <h2 className="section header-section">My Projects</h2>
      <ProjectsSection />

      <h2 className="section header-section">My Cat</h2>
      <CatSection />
    </>
  );
}
