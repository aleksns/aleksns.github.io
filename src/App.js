import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import MyCat from "./routes/MyCat";
import Projects from "./routes/Projects";
import AboutSection from "./sections/AboutSection";

export default function App() {
  const [isButtonScrollToTopVisible, setIsButtonScrollToTopVisible] = useState(false);

  function hamMenuSlide() {
    const homeBtn = document.getElementById("home-button");
    const hamburger = document.querySelector(".header-hamburger");
    const nav = document.querySelector(".nav-header-links");

    hamburger.addEventListener("click", () => {
      nav.classList.toggle("nav-header-links-active");
      hamburger.classList.toggle("ham-toggle");
    }, false)

    nav.addEventListener("click", () => {
      nav.classList.remove("nav-header-links-active");
      hamburger.classList.remove("ham-toggle");
    }, false)

    homeBtn.addEventListener("click", () => {
      nav.classList.remove("nav-header-links-active");
      hamburger.classList.remove("ham-toggle");
    }, false)
  }

  useEffect(() => {
    function handleButtonScrollToTop() {
      let documentBottom = document.body.scrollHeight;
      let scrolledDistance = document.documentElement.scrollTop;
      if (scrolledDistance > documentBottom / 3){
        setIsButtonScrollToTopVisible(true)
      } 
      else if (scrolledDistance <= documentBottom  / 3){
        setIsButtonScrollToTopVisible(false)
      }
    }
    
    window.addEventListener("scroll", handleButtonScrollToTop);
    hamMenuSlide();
  }, []);

  function RoutesComponent() {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/mycat" element={<MyCat />} />
        <Route path="/contact" element={<Contact />} />  
      </Routes>
    );
  }

  return (
    <>
      <Header />
      <div className="main-content">
      <RoutesComponent />
      <Footer isButtonScrollToTopVisible={isButtonScrollToTopVisible}/>
      </div>
    </>
  );
}
