import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ServicePage from "./components/ServicePage";
import ProjectsPage from "./components/ProjectsPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        {/* HOME */}
        <Route path="/" element={<HomePage />} />

        {/* SERVICES */}
        <Route path="/services" element={<ServicePage />} />

        {/* PROJECTS */}
        <Route path="/projects" element={<ProjectsPage />} />

        {/* ABOUT */}
        <Route path="/about" element={<AboutPage />} />

        {/* CONTACT */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
