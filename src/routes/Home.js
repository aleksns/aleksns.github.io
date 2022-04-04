import "../App.css";
import CatSection from "../sections/CatSection";
import HeroSection from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <CatSection />
    </>
  );
}
