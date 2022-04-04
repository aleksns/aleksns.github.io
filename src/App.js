import { useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contacts from "./routes/Contacts";
import Home from "./routes/Home";
import Projects from "./routes/Projects";

export default function App() {

  function hamMenuSlide() {
    const hamburger = document.querySelector(".header-hamburger");
    const nav = document.querySelector(".nav-header-links");

    hamburger.addEventListener("click", () => {
      nav.classList.toggle("nav-header-links-active");
      hamburger.classList.toggle("ham-toggle");
      console.log(`CLICKED`) 
    }, false)
  }

  function RoutesComponent() {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/projects" element={<Projects />} />
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
