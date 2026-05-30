// src/components/AboutPage.jsx
import React, { useState } from "react";
// 1. Import Link from your routing framework to enable immediate client-side navigation
import { Link } from "react-router-dom";
import { FaBuilding, FaBullseye, FaEye, FaHandshake, FaCheckCircle, FaBookOpen, FaShieldAlt, FaUsers, FaLightbulb } from "react-icons/fa";
import "./AboutPage.css";

const AboutPage = () => {
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
        {/* Changed standard <a> hrefs to <Link to="..."> for zero-latency routing */}
        <ul className={`links ${menuOpen ? "show" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about" className="active">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* HERO BANNER SECTION */}
      <header className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="subtitle">Who We Are</span>
          <h1>Building Legacies Across Cape Town</h1>
          <p>Rooted in craftsmanship, driven by innovation, and committed to sustainable structural development.</p>
        </div>
      </header>

      <main className="about-page-container">
        
        {/* COMPANY OVERVIEW SECTION */}
        <section className="overview-section">
          <div className="overview-content">
            <div className="section-title-wrapper">
              <h2><FaBuilding className="title-icon" /> Company Overview</h2>
              <div className="accent-line-about"></div>
            </div>
            <p>
              <strong>Ngcinga Zam (Pty) Ltd</strong> is a proudly South African construction, engineering, 
              and fabrication company specializing in precision welding, specialized carpentry, and general contracting. 
              We blend industrial-grade structural knowledge with artisan craftsmanship to deliver flawless, durable results across residential, commercial, and industrial ecosystems.
            </p>
          </div>
        </section>

        {/* MISSION & VISION DUAL SPLIT GRID */}
        <section className="strategic-pillars">
          <div className="pillar-card">
            <div className="pillar-icon-box"><FaBullseye /></div>
            <h3>Mission Statement</h3>
            <p>Our mission is to build with absolute integrity, structural precision, and unwavering passion — executing builds that easily stand the test of time while actively empowering local South African communities through premium skills transference.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon-box"><FaEye /></div>
            <h3>Our Vision</h3>
            <p>To establish Ngcinga Zam as an industry-standard tier-1 construction provider in the Western Cape, universally acknowledged for engineering excellence, rock-solid reliability, and sustainable, green building frameworks.</p>
          </div>
        </section>

        {/* CORE VALUES SECTOR */}
        <section className="values-section">
          <div className="section-title-wrapper central">
            <h2><FaHandshake className="title-icon" /> Our Core Values</h2>
            <div className="accent-line-about mid"></div>
            <p className="section-desc">The rigid principles that govern every single project site we manage.</p>
          </div>

          <div className="values-grid">
            <div className="value-item-card">
              <FaCheckCircle className="value-icon" />
              <h4>Quality Craftsmanship</h4>
              <p>Every single weld, structural frame cut, and joinery fitting undergoes multi-point alignment checks to meet strict building standards.</p>
            </div>
            <div className="value-item-card">
              <FaShieldAlt className="value-icon" />
              <h4>Safety First Operations</h4>
              <p>We maintain zero-compromise personal protective equipment protocols, safeguarding our site engineers, sub-contractors, and clients.</p>
            </div>
            <div className="value-item-card">
              <FaUsers className="value-icon" />
              <h4>Community Empowerment</h4>
              <p>We actively invest in training, hiring, and advancing local trade talents near our construction sites in Eerste River and surrounding municipal districts.</p>
            </div>
            <div className="value-item-card">
              <FaLightbulb className="value-icon" />
              <h4>Modern Efficiency</h4>
              <p>Leveraging state-of-the-art power tools, digital blueprints, and efficient raw material planning lines to maximize speed without risking safety.</p>
            </div>
          </div>
        </section>

        {/* CORPORATE STORY TIMELINE BANNER */}
        <section className="story-timeline-section">
          <div className="story-grid-layout">
            <div className="story-graphic-pane">
              <div className="experience-badge">
                <span className="years-num">Est.</span>
                <span className="years-label">2024</span>
              </div>
            </div>
            <div className="story-text-pane">
              <div className="section-title-wrapper">
                <h2><FaBookOpen className="title-icon" /> Our Story</h2>
                <div className="accent-line-about"></div>
              </div>
              <p>
                Ngcinga Zam (Pty) Ltd launched with a clear, localized vision: to turn creative structural challenges into lasting infrastructure realities. What began as a highly focused team managing residential welding and custom timber cabinetry quickly scale-optimized into an agile, multi-faceted contracting name.
              </p>
              <blockquote>
                "Our name, meaning 'My Thoughts' in isiXhosa, represents our fundamental philosophy that every incredible, permanent structure must start with an intelligent, well-conceived idea."
              </blockquote>
              <p>
                Today, our portfolio includes heavy steel driveway architecture, tailored household storage extensions, and complete Nutec housing systems. We stand as a testament to what can be built when you align modern tool methodologies with absolute local accountability.
              </p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default AboutPage;