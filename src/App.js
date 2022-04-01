import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contacts from "./routes/Contacts";
import Home from "./routes/Home";

export default function App() {

  function RoutesComponent() {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    );
  }

  return (
    <>
    <div className="container-main">
      <Header />
      <RoutesComponent />
      <Footer />
      </div>
    </>
  );
}
