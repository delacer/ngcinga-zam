// src/components/ServicePage.jsx
import React, { useState } from "react";
// 1. Import Link from react-router-dom to drop standard anchor delay styles
import { Link } from "react-router-dom";
import { FaHammer, FaTree, FaTools, FaShieldAlt, FaPhoneAlt } from "react-icons/fa";
import "./ServicePage.css";

const ServicePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  const servicesData = [
    // Category 1: Interior Carpentry & Cabinetry
    { id: 1, category: "carpentry", title: "Modern Built-in Kitchen Cupboards", img: "/built-in-cupboards.jpeg" },
    { id: 2, category: "carpentry", title: "Built-in Bedroom Cupboards", img: "/built-in-cupboard.jpeg" },
    { id: 3, category: "carpentry", title: "Hanging Doors Installation", img: "/hanging-doors.jpeg" },
    { id: 4, category: "carpentry", title: "Laminated Floors", img: "/laminated-floor.jpeg" },
    { id: 5, category: "carpentry", title: "Premium Wooden Flooring", img: "/wooden-flooring.jpeg" },
    { id: 6, category: "carpentry", title: "Skirting & Architraves", img: "/skirting&architraves.jpeg" },

    // Category 2: Outdoor Structures & Timber
    { id: 7, category: "outdoor", title: "Custom Decking", img: "/decking.jpeg" },
    { id: 8, category: "outdoor", title: "Designer Garden Furniture", img: "/garden-furniture.jpeg" },
    { id: 9, category: "outdoor", title: "Architectural Pergolas", img: "/Pergolas.jpeg" },
    { id: 10, category: "outdoor", title: "Heavy-Duty Picnic Tables", img: "/picnic-tables.jpeg" },
    { id: 11, category: "outdoor", title: "Trussel Tables", img: "/trussel-tables.jpeg" },
    { id: 12, category: "outdoor", title: "Wendy & Nutec Houses", img: "/fcarpentry.jpeg" },
    { id: 13, category: "outdoor", title: "Insulated Dog Kennels", img: "/dog-kernels.jpeg" },
    { id: 14, category: "outdoor", title: "Tools Sheds & Outbuildings", img: "/tools-shades.jpeg" },

    // Category 3: General Construction & Finishes
    { id: 15, category: "construction", title: "Concrete Formwork", img: "/formwork.jpeg" },
    { id: 16, category: "construction", title: "Structural Roofing", img: "/roofing.jpeg" },
    { id: 17, category: "construction", title: "Flush Ceilings & Cornices", img: "/ceilings.jpeg" },
    { id: 18, category: "construction", title: "Precision Skimming & Plastering", img: "/skimming.jpeg" },
    { id: 19, category: "construction", title: "Commercial Plumbing Lines", img: "/plumbing.jpeg" },
    { id: 20, category: "construction", title: "Interior & Exterior Painting", img: "/painting.jpeg" },

    // Category 4: Welding & Security
    { id: 21, category: "welding", title: "Custom Balustrades & Balconies", img: "/balustrades&balconies.jpeg" },
    { id: 22, category: "welding", title: "Reinforced Burglar Bars", img: "/burglar-bars.jpeg" },
    { id: 23, category: "welding", title: "Automated Driveway Gates", img: "/driveway-gates.jpeg" },
    { id: 24, category: "welding", title: "Industrial Garage Doors", img: "/garage-doors.jpeg" },
    { id: 25, category: "welding", title: "Palisade Fencing Systems", img: "/palisade-fencing.jpeg" },
    { id: 26, category: "welding", title: "High-Strength Arc Welding", img: "/arch-welding.jpeg" }
  ];

  // Filter logic
  const filteredServices = activeFilter === "all" 
    ? servicesData 
    : servicesData.filter(item => item.category === activeFilter);

  return (
    <>
      {/* GLOBAL NAVBAR */}
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
        {/* Replaced standard <a> elements with <Link to="..."> for instantaneous navigation */}
        <ul className={`links ${menuOpen ? "show" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services" className="active">Services</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* COMPACT HERO BANNER */}
      <header className="service-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="subtitle">Our Expertise</span>
          <h1>Professional Construction & Fabrication Services</h1>
          <p>From precision joinery to structural steelworks, we deliver premium engineering across the Western Cape.</p>
        </div>
      </header>

      <main className="services-page-container">
        
        {/* INTERACTIVE CATEGORY FILTER NAVIGATION */}
        <div className="filter-navigation-bar">
          <button 
            className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            All Services
          </button>
          <button 
            className={`filter-btn ${activeFilter === "carpentry" ? "active" : ""}`}
            onClick={() => setActiveFilter("carpentry")}
          >
            <FaHammer /> Interior Carpentry
          </button>
          <button 
            className={`filter-btn ${activeFilter === "outdoor" ? "active" : ""}`}
            onClick={() => setActiveFilter("outdoor")}
          >
            <FaTree /> Outdoor Timber
          </button>
          <button 
            className={`filter-btn ${activeFilter === "construction" ? "active" : ""}`}
            onClick={() => setActiveFilter("construction")}
          >
            <FaTools /> General Building
          </button>
          <button 
            className={`filter-btn ${activeFilter === "welding" ? "active" : ""}`}
            onClick={() => setActiveFilter("welding")}
          >
            <FaShieldAlt /> Welding & Security
          </button>
        </div>

        {/* GLASS CARD PACK GRID */}
        <section className="our-services-grid">
          {filteredServices.map((service) => (
            <div className="service-glass-card" key={service.id}>
              <div className="card-image-wrapper">
                <img src={service.img} alt={service.title} loading="lazy" />
                <div className="category-badge">{service.category}</div>
              </div>
              <div className="card-details-pane">
                <h3>{service.title}</h3>
                <div className="card-footer-line">
                  <span className="guarantee-tag">SABS Standards</span>
                  {/* Upgraded the card click-through arrow to use Link */}
                  <Link to="/contact" className="card-action-arrow">→</Link>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* BOTTOM CALL TO ACTION BANNER */}
        <section className="quote-cta-banner">
          <div className="cta-content">
            <h2>Have a specific structural layout in mind?</h2>
            <p>Get in touch with our estimators today for a comprehensive, transparent site assessment and project quotation.</p>
            {/* Upgraded callout banner to use Link for fast structural context switching */}
            <Link to="/contact" className="cta-button-link">
              <FaPhoneAlt /> Request An Obligation-Free Quote
            </Link>
          </div>
        </section>

      </main>
    </>
  );
};

export default ServicePage;