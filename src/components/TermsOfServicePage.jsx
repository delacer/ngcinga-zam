// src/components/TermsOfServicePage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFileContract, FaGavel, FaTools, FaBan, FaHandshake, FaShieldAlt } from "react-icons/fa";
import "./LegalPages.css";

const TermsOfServicePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="legal-page-wrapper">
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
        <ul className={`links ${menuOpen ? "show" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* HEADER SECTION */}
      <header className="legal-hero terms-theme">
        <div className="legal-hero-overlay"></div>
        <div className="legal-hero-content">
          <div className="legal-icon-badge">
            <FaFileContract />
          </div>
          <h1>Terms of Service</h1>
          <p>Last Updated: June 7, 2026</p>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="legal-container">
        <div className="legal-grid">
          {/* SIDEBAR NAVIGATION */}
          <aside className="legal-sidebar">
            <div className="sidebar-sticky-card">
              <h3>Legal Navigation</h3>
              <div className="legal-accent-line"></div>
              <ul className="sidebar-nav-links">
                <li><a href="#agreement" className="active-scroll">1. Agreement to Terms</a></li>
                <li><a href="#services" className="active-scroll">2. Service Estimates</a></li>
                <li><a href="#user-conduct">3. Acceptable Use Rules</a></li>
                <li><a href="#intellectual">4. Intellectual Property</a></li>
                <li><a href="#liability">5. Limitation of Liability</a></li>
              </ul>
              <div className="sidebar-switch-box">
                <p>Confused about personal data processing?</p>
                <Link to="/privacy" className="switch-legal-btn">
                  <FaShieldAlt /> View Privacy Policy
                </Link>
              </div>
            </div>
          </aside>

          {/* TERMS CONTENT PANEL */}
          <section className="legal-content-panel">
            <div className="legal-glass-card" id="agreement">
              <h2><FaGavel className="section-inline-icon" /> 1. Agreement to Terms</h2>
              <p>
                By navigating this website, interacting with our media galleries, or using our automated forms, you agree to be bound by these Terms of Service. If you object to any structural clauses outlined here, you must immediately halt use of our online tools.
              </p>
            </div>

            <div className="legal-glass-card" id="services">
              <h2><FaTools className="section-inline-icon" /> 2. Service Estimates & Consultations</h2>
              <p>
                All online estimates generated through our input blocks, WhatsApp messaging routes, or communication forms are designed for preliminary scoping and consultation purposes.
              </p>
              <ul className="legal-bullet-list">
                <li>Calculations are subject to revisions pending physical, on-site structural assessments by a manager.</li>
                <li>Project timelines are approximate variables impacted by material accessibility and logistics.</li>
                <li>All formal engineering contracts are governed by independent physical documentation.</li>
              </ul>
            </div>

            <div className="legal-glass-card" id="user-conduct">
              <h2><FaBan className="section-inline-icon" /> 3. Acceptable Use Rules</h2>
              <p>
                When using our interactive uploader components, asset management dashboard panels, or message modules, users are strictly forbidden from executing the following actions:
              </p>
              <ol className="legal-ordered-list">
                <li>Uploading corrupted media binaries, malformed code structures, or assets containing malicious software.</li>
                <li>Submitting fraudulent quote requests, deceptive project parameters, or false contact indicators.</li>
                <li>Attempting to bypass structural z-index stacks, overflow clipping parameters, or security features.</li>
              </ol>
            </div>

            <div className="legal-glass-card" id="intellectual">
              <h2><FaHandshake className="section-inline-icon" /> 4. Intellectual Property</h2>
              <p>
                The digital visual framework, glassmorphic layout properties, brand insignia, site assets, code implementations, and project media rendered on this platform are the property of Ngcinga Zam (Pty) Ltd and are protected under international trademark and copyright frameworks.
              </p>
            </div>

            <div className="legal-glass-card" id="liability">
              <h2><FaGavel className="section-inline-icon" /> 5. Limitation of Liability</h2>
              <p>
                Ngcinga Zam (Pty) Ltd, its executives, and structural deployment teams will under no circumstances be held liable for any incidental layout interruptions, data delays, server anomalies, or system transmission bugs resulting from your use of this digital platform.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TermsOfServicePage;