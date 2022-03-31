import "../App.css";
import CatSection from "../components/CatSection";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <CatSection />
    </>
  );
}
