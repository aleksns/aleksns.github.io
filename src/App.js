import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactMe from "./routes/ContactMe";
import Home from "./routes/Home";
import MyCat from "./routes/MyCat";
import Projects from "./routes/Projects";

export default function App() {

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

  function RoutesComponent() {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/mycat" element={<MyCat />} />
        <Route path="/contactme" element={<ContactMe />} />  
      </Routes>
    );
  }

  useEffect(() => {
    hamMenuSlide();
  }, []);

  return (
    <>
    <div className="content">
      <Header />
      <RoutesComponent />
      <Footer />
      </div>
    </>
  );
}
