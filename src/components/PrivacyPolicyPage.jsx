// src/components/PrivacyPolicyPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaLock, FaEye, FaUserCheck, FaFileContract } from "react-icons/fa";
import "./LegalPages.css";

const PrivacyPolicyPage = () => {
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
      <header className="legal-hero">
        <div className="legal-hero-overlay"></div>
        <div className="legal-hero-content">
          <div className="legal-icon-badge">
            <FaShieldAlt />
          </div>
          <h1>Privacy Policy</h1>
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
                <li><a href="#introduction" className="active-scroll">1. Introduction</a></li>
                <li><a href="#data-collection">2. Information We Collect</a></li>
                <li><a href="#data-usage">3. How We Use Your Data</a></li>
                <li><a href="#data-protection">4. Data Security</a></li>
                <li><a href="#your-rights">5. Your Rights & Choices</a></li>
              </ul>
              <div className="sidebar-switch-box">
                <p>Looking for our rules of engagement?</p>
                <Link to="/terms" className="switch-legal-btn">
                  <FaFileContract /> View Terms of Service
                </Link>
              </div>
            </div>
          </aside>

          {/* POLICY CONTENT PANEL */}
          <section className="legal-content-panel">
            <div className="legal-glass-card" id="introduction">
              <h2><FaEye className="section-inline-icon" /> 1. Introduction</h2>
              <p>
                At Ngcinga Zam (Pty) Ltd, we value your trust and are fully committed to protecting your personal privacy. This Privacy Policy describes how your personal information is collected, used, and safeguarded when you visit our website, submit requests through our quote modules, or interact with our dynamic messaging frameworks.
              </p>
              <p>
                By interacting with our platform, you consent to the data operations configurations detailed within this document.
              </p>
            </div>

            <div className="legal-glass-card" id="data-collection">
              <h2><FaUserCheck className="section-inline-icon" /> 2. Information We Collect</h2>
              <p>
                When you visit our digital workspace or complete our quote request modules, we collect details necessary to safely execute service configurations:
              </p>
              <ul className="legal-bullet-list">
                <li><strong>Identity Indicators:</strong> Your full name, email addresses, and phone contact vectors provided through forms.</li>
                <li><strong>Project Metadata:</strong> Structural descriptions, custom gate specs, architectural parameters, or blueprint requests uploaded to our portals.</li>
                <li><strong>Automated Matrix Tracking:</strong> IP routing coordinates, operating system data, session analytics, and cookie parameters captured dynamically by our servers.</li>
              </ul>
            </div>

            <div className="legal-glass-card" id="data-usage">
              <h2><FaLock className="section-inline-icon" /> 3. How We Use Your Data</h2>
              <p>
                Your structured metrics are only handled to fulfill specific production pipelines:
              </p>
              <ol className="legal-ordered-list">
                <li>To compile, format, and render transparent corporate project estimates and cost analyses.</li>
                <li>To parse input attributes safely and redirect information cleanly over encrypted endpoints directly into your WhatsApp interface when requests are made.</li>
                <li>To securely store uploaded verification proofs within our media galleries without risking side-channel exposure.</li>
              </ol>
            </div>

            <div className="legal-glass-card" id="data-protection">
              <h2><FaShieldAlt className="section-inline-icon" /> 4. Data Security</h2>
              <p>
                We apply structural defense layers to shield your parameters. File buffers and preview image entities are bound by relative storage limits and strict masking controls to prevent unauthorized access. 
              </p>
              <p>
                While we continuously harden our server frameworks, please be aware that no digital transmission vector over the internet can be guaranteed as 100% immune to external anomalies.
              </p>
            </div>

            <div className="legal-glass-card" id="your-rights">
              <h2><FaShieldAlt className="section-inline-icon" /> 5. Your Rights & Choices</h2>
              <p>
                You retain complete governance over your data records. You can request structural access to, modification of, or total deletion of any personal metadata records or media layout assets stored in our active databases by reaching out through our official support channels.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;