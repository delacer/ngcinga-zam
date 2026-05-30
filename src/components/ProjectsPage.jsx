// src/components/ProjectsPage.jsx
import React, { useState } from "react";
// 1. Import Link from react-router-dom to bypass slow full-page server reloads
import { Link } from "react-router-dom";
import "./ProjectsPage.css";
import { FaHammer, FaUsers, FaLeaf, FaImages, FaBuilding, FaArrowRight } from "react-icons/fa";
import UploadGallery from "./UploadGallery";

const ProjectsPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <h2>Ngcinga Zam <span>(Pty) Ltd</span></h2>
        </div>
        <button 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)} 
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
        {/* Swapped out standard <a> tags for <Link to="..."> for zero-latency routing */}
        <ul className={`links ${menuOpen ? "show" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projects" className="active">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <header className="projects-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="subtitle">Our Portfolio</span>
          <h1>Crafting Excellence, Building Trust</h1>
          <p>
            From precision welding and custom carpentry to durable Nutec housing, 
            explore how we transform visions into structural realities across Cape Town.
          </p>
        </div>
      </header>

      <div className="projects-page-container">
        
        {/* VALUE PROPOSITION GRID */}
        <section className="value-props">
          <div className="prop-card">
            <div className="prop-icon"><FaHammer /></div>
            <h3>Expert Craftsmanship</h3>
            <p>Every weld, joint, and frame is executed with meticulous structural precision.</p>
          </div>
          <div className="prop-card">
            <div className="prop-icon"><FaUsers /></div>
            <h3>Supervised Process</h3>
            <p>From site assessment to final delivery, our work undergoes strict safety & quality audits.</p>
          </div>
          <div className="prop-card">
            <div className="prop-icon"><FaLeaf /></div>
            <h3>Community Impact</h3>
            <p>We actively empower local Cape Town talent and opt for sustainable materials.</p>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="featured-projects">
          <div className="section-header">
            <h2><FaBuilding className="header-icon" /> Featured Masterpieces</h2>
            <div className="accent-line"></div>
          </div>
          
          <div className="projects-grid">
            <div className="project-card">
              <div className="card-img-wrapper">
                <img src="/fcupboards.jpeg" alt="Built-in Cupboards" />
                <span className="project-badge">Carpentry</span>
              </div>
              <div className="card-body">
                <h3>Premium Built-in Cupboards</h3>
                <div className="project-details">
                  <p><strong>Location:</strong> Cape Town</p>
                  <p><strong>Client:</strong> Private Residential</p>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="card-img-wrapper">
                <img src="/fcarpentry.jpeg" alt="Nutec House" />
                <span className="project-badge">Construction</span>
              </div>
              <div className="card-body">
                <h3>Modern Nutec Home Extension</h3>
                <div className="project-details">
                  <p><strong>Location:</strong> Eerste River</p>
                  <p><strong>Client:</strong> Family Home</p>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="card-img-wrapper">
                <img src="/fgate.jpeg" alt="Driveway Gate" />
                <span className="project-badge">Welding & Steel</span>
              </div>
              <div className="card-body">
                <h3>Custom Security Driveway Gate</h3>
                <div className="project-details">
                  <p><strong>Location:</strong> Kuils River</p>
                  <p><strong>Client:</strong> Residential</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DYNAMIC GALLERY & UPLOAD SECTION */}
        <section className="gallery-section">
          <div className="section-header">
            <h2><FaImages className="header-icon" /> Live Project Gallery</h2>
            <div className="accent-line"></div>
            <p className="section-subtitle">Real-time snapshots straight from our active project sites.</p>
          </div>

          {/* Wrapper to elegantly bundle static photos alongside your interactive uploader */}
          <div className="gallery-showcase">
            <div className="static-showcase-grid">
              <div className="showcase-item">
                <img src="/fcupboards.jpeg" alt="Cupboard Joinery" />
                <div className="item-overlay"><span>Joinery Work</span></div>
              </div>
              <div className="showcase-item">
                <img src="/fca.jpeg" alt="Completed structure" />
                <div className="item-overlay"><span>Structural Framework</span></div>
              </div>
              <div className="showcase-item">
                <img src="/fgate.jpeg" alt="Before and After ironwork" />
                <div className="item-overlay"><span>Iron Fabrication</span></div>
              </div>
            </div>

            {/* Your interactive file rendering and uploading component */}
            <div className="interactive-uploader-panel">
              <UploadGallery />
            </div>
          </div>
        </section>

        {/* CALL TO ACTION - UPGRADED TO CLIENT LINK */}
        <section className="cta-banner">
          <div className="cta-content">
            <h2>Ready to start your next building venture?</h2>
            <p>Get in touch with us today for a precise, transparent, and absolutely free quote.</p>
            <Link to="/contact" className="cta-btn">
              Get a Free Quote <FaArrowRight className="btn-icon" />
            </Link>
          </div>
        </section>

      </div>
    </>
  );
};

export default ProjectsPage;