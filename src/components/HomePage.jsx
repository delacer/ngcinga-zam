// src/components/HomePage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTools, FaHardHat, FaPhoneAlt, FaArrowRight, FaQuoteLeft, FaStar, FaTrashAlt, FaPenNib } from "react-icons/fa";
import { GiWoodBeam } from "react-icons/gi";
import { Award, Clock, ShieldCheck } from "lucide-react";
import "./HomePage.css";

// 🔑 ADMIN PASSWORD TO DELETE TESTIMONIALS
const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD; 

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Form Fields State
  const [newName, setNewName] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newProject, setNewProject] = useState("");
  const [newText, setNewText] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  // Initialize Testimonials State from localStorage
  const [testimonials, setTestimonials] = useState(() => {
    const savedReviews = localStorage.getItem("ngcinga_testimonials");
    if (savedReviews) return JSON.parse(savedReviews);

    return [
      {
        id: 1,
        name: "Sibusiso Ndlovu",
        location: "Stellenbosch",
        text: "Ngcinga Zam fabricated and installed our custom driveway gate and perimeter fencing. The arc welding clean lines and structural integrity are flawless. Highly recommended!",
        rating: 5,
        project: "Custom Security Gate"
      },
      {
        id: 2,
        name: "Sarah Jenkins",
        location: "Somerset West",
        text: "The team built modern built-in bedroom cupboards and completely redid our kitchen joinery. Fast, immaculate attention to detail, and beautiful timber finishes.",
        rating: 5,
        project: "Interior Joinery & Cabinetry"
      },
      {
        id: 3,
        name: "Menzis Construction",
        location: "Cape Town CBD",
        text: "Reliable sub-contractors for site formwork and structural roofing setups. They respect safety protocols, stick to engineering guidelines, and deliver on tight timelines.",
        rating: 5,
        project: "Commercial Sub-contracting"
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem("ngcinga_testimonials", JSON.stringify(testimonials));
  }, [testimonials]);

  const handleAddTestimonial = (e) => {
    e.preventDefault();

    if (!newName || !newText || !newLocation || !newProject) {
      alert("Please fill out all required fields.");
      return;
    }

    const newReview = {
      id: Date.now(),
      name: newName,
      location: newLocation,
      text: newText,
      rating: Number(newRating),
      project: newProject
    };

    setTestimonials((prev) => [newReview, ...prev]);

    // Reset Form fields
    setNewName("");
    setNewLocation("");
    setNewProject("");
    setNewText("");
    setNewRating(5);
    alert("Thank you! Your testimonial has been posted permanently.");
  };

  const handleDeleteTestimonial = (idToDelete) => {
    const passwordInput = prompt("Enter Admin Password to delete this review:");
    if (passwordInput === ADMIN_PASSWORD) {
      if (window.confirm("Are you sure you want to permanently delete this testimonial?")) {
        setTestimonials((prev) => prev.filter((item) => item.id !== idToDelete));
      }
    } else if (passwordInput !== null) {
      alert("Incorrect password! Access denied.");
    }
  };

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
          <ul className={`links ${menuOpen ? "show" : ""}`}>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact" className="contacts">Contact</Link></li>
          </ul>
        </nav>
      {/* HEADER HERO AREA */}
      <div className="hero-section">
        <div className="hero-overlay-main"></div>

        {/* HERO TYPOGRAPHY & ACTIONS */}
        <div className="hero-text">
          <span className="hero-badge">Western Cape Trade Professionals</span>
          <h1>Building with Precision,<br />Passion and Integrity</h1>
          <p>Industrial-grade welding, custom artisan carpentry, and turn-key general construction solutions across Cape Town.</p>
          <div className="call-btn-group">
            <a href="tel:+27818368090" className="btn-primary">
              <FaPhoneAlt /> Call Us Now
            </a>
            <Link to="/services" className="btn-secondary">Explore Services <FaArrowRight /></Link>
          </div>
        </div>

        {/* CORE SERVICE SNAPSHOT TRIPLE CARDS */}
        <div className="service-snapshot-wrapper">
          <div className="service-snap-card">
            <div className="snap-img-box"><img src="/welding.jpeg" alt="Precision Welding" /></div>
            <div className="snap-content">
              <FaTools className="snap-icon" />
              <h3>Precision Welding</h3>
              <p>Heavy steel structures, architectural gates, and structural fabrication lines.</p>
            </div>
          </div>

          <div className="service-snap-card">
            <div className="snap-img-box"><img src="/carpentry.jpeg" alt="Artisan Carpentry" /></div>
            <div className="snap-content">
              <GiWoodBeam className="snap-icon" />
              <h3>Artisan Carpentry</h3>
              <p>Premium built-in cupboards, bespoke outdoor timber pergolas, and Nutec homes.</p>
            </div>
          </div>

          <div className="service-snap-card">
            <div className="snap-img-box"><img src="/construction.jpeg" alt="General Construction" /></div>
            <div className="snap-content">
              <FaHardHat className="snap-icon" />
              <h3>General Construction</h3>
              <p>Comprehensive site management, professional concrete formwork, and roofing grids.</p>
            </div>
          </div>
        </div>
      </div>

      <main className="homepage-content-wrapper">
        
        {/* INTERACTIVE ABOUT BRIEF SECTION */}
        <section className="about-preview-section">
          <div className="about-preview-grid">
            <div className="about-preview-graphic">
              <img src="/about.jpeg" alt="Ngcinga Zam construction team layout" />
              <div className="graphic-accent-box"></div>
            </div>
            <div className="about-preview-text">
              <div className="section-title-wrapper">
                <span className="section-subtitle">Our Heritage</span>
                <h2>Turning Great Ideas Into Permanent Infrastructure</h2>
                <div className="accent-line-home"></div>
              </div>
              <p>Derived from the isiXhosa phrase meaning <strong>"My Thoughts"</strong>, Ngcinga Zam (Pty) Ltd was founded on the fundamental principle that every iconic, structural build starts with an intelligent, deliberate idea.</p>
              <p>From small-scale residential carpentry fittings, we have grown into a multi-disciplinary fabrication and construction outfit trusted by homeowners and commercial site developers alike across the Western Cape.</p>
              <Link to="/about" className="learn-more-link-btn">Read Our Story</Link>
            </div>
          </div>
        </section>

        {/* RECONFIGURED FEATURED PROJECTS CAROUSEL GRID */}
        <section className="featured-projects-section">
          <div className="section-title-central">
            <h2>Featured Projects Portfolio</h2>
            <div className="accent-line-home center"></div>
            <p>A handpicked preview of structural builds executed across Cape Town suburbs.</p>
          </div>
          
          <div className="featured-projects-grid">
            <div className="project-display-card">
              <div className="project-image-box"><img src="/fcupboards.jpeg" alt="Luxury built-in cupboards" /></div>
              <div className="project-label-overlay">
                <span>Joinery Lines</span>
                <h3>Premium Built-In Cupboards</h3>
              </div>
            </div>

            <div className="project-display-card">
              <div className="project-image-box"><img src="/fcarpentry.jpeg" alt="Nutec house layout" /></div>
              <div className="project-label-overlay">
                <span>Timber Structures</span>
                <h3>Eco-Friendly Nutec Houses</h3>
              </div>
            </div>

            <div className="project-display-card">
              <div className="project-image-box"><img src="/fgate.jpeg" alt="Driveway gate" /></div>
              <div className="project-label-overlay">
                <span>Metalwork Fabrication</span>
                <h3>Heavy-Duty Driveway Gates</h3>
              </div>
            </div>
          </div>
          <div className="portfolio-action-row">
            <Link to="/projects" className="view-all-projects-btn">View Complete Construction Archive</Link>
          </div>
        </section>

        {/* HIGH CONTRAST WHY CHOOSE US AREA */}
        <section className="choose-us-section">
          <div className="section-title-central light">
            <h2>Why Partners Choose Ngcinga Zam</h2>
            <div className="accent-line-home center"></div>
            <p>Our operational benchmarks ensure peace of mind from ground-break to hand-over.</p>
          </div>

          <div className="choose-us-glass-grid">
            <div className="choose-glass-card">
              <div className="icon-circle-wrapper"><Award className="choose-icon" size={26} /></div>
              <h3>Artisan Expertise</h3>
              <p>Our team holds deep technical certifications across advanced structural welding and high-end joinery design lines.</p>
            </div>

            <div className="choose-glass-card">
              <div className="icon-circle-wrapper"><ShieldCheck className="choose-icon" size={26} /></div>
              <h3>Rigid Building Standards</h3>
              <p>We work tightly within SABS quality benchmarks and maintain zero-compromise safety protocols on every site layout.</p>
            </div>

            <div className="choose-glass-card">
              <div className="icon-circle-wrapper"><Clock className="choose-icon" size={26} /></div>
              <h3>Absolute Reliability</h3>
              <p>No unexpected delays, no sudden budget shifts. We deliver transparent milestones and highly predictable hand-overs.</p>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS DISPLAY SECTOR */}
        <section className="testimonials-section">
          <div className="section-title-central">
            <h2>What Our Clients Say</h2>
            <div className="accent-line-home center"></div>
            <p>Real feedback from residential extensions and commercial clients around the Western Cape.</p>
          </div>

          <div className="testimonials-masonry-grid">
            {testimonials.map((item) => (
              <div className="testimonial-item-card" key={item.id} style={{ position: "relative" }}>
                <button 
                  onClick={() => handleDeleteTestimonial(item.id)}
                  title="Remove review"
                  className="review-delete-btn-overlay"
                >
                  <FaTrashAlt />
                </button>

                <div className="quote-header">
                  <FaQuoteLeft className="quote-icon-mark" />
                  <div className="star-rating-line">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} className="star-element" />
                    ))}
                  </div>
                </div>
                <p className="testimonial-body-text">"{item.text}"</p>
                <div className="testimonial-user-footer">
                  <div className="user-profile-signature">
                    <h4>{item.name}</h4>
                    <span>{item.location}, WC</span>
                  </div>
                  <span className="project-tag-badge">{item.project}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* UPGRADED MODERN TESTIMONIAL FORM SECTION */}
        <section className="review-portal-section">
          <div className="portal-glass-card">
            <div className="portal-header">
              <div className="portal-icon-badge">
                <FaPenNib />
              </div>
              <h2>Share Your Experience</h2>
              <p>Recently worked with us? Leave your verified review to populate our live showcase panel.</p>
              <div className="form-accent-divider"></div>
            </div>

            <form onSubmit={handleAddTestimonial} className="premium-review-form">
              <div className="form-fields-twin-grid">
                <div className="floating-input-group">
                  <input 
                    type="text" 
                    value={newName} 
                    onChange={(e) => setNewName(e.target.value)} 
                    required 
                    placeholder=" "
                    id="client-name"
                  />
                  <label htmlFor="client-name">Your Full Name</label>
                </div>

                <div className="floating-input-group">
                  <input 
                    type="text" 
                    value={newLocation} 
                    onChange={(e) => setNewLocation(e.target.value)} 
                    required 
                    placeholder=" "
                    id="client-suburb"
                  />
                  <label htmlFor="client-suburb">Suburb (e.g., Somerset West)</label>
                </div>
              </div>
              
              <div className="floating-input-group">
                <input 
                  type="text" 
                  value={newProject} 
                  onChange={(e) => setNewProject(e.target.value)} 
                  required 
                  placeholder=" "
                  id="client-project"
                />
                <label htmlFor="client-project">Project Handled (e.g., Heavy-Duty Gate Installation)</label>
              </div>

              {/* INTERACTIVE CLICKABLE STAR SELECTOR */}
              <div className="star-rating-selector-wrapper">
                <span className="rating-selector-label">Assign Project Rating:</span>
                <div className="interactive-stars-row">
                  {[1, 2, 3, 4, 5].map((starNum) => (
                    <button
                      key={starNum}
                      type="button"
                      className="star-trigger-btn"
                      onClick={() => setNewRating(starNum)}
                      onMouseEnter={() => setHoverRating(starNum)}
                      onMouseLeave={() => setHoverRating(0)}
                    >
                      <FaStar 
                        className={`interactive-star-icon ${
                          starNum <= (hoverRating || newRating) ? "active-gold" : "dimmed-gray"
                        }`} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="floating-input-group">
                <textarea 
                  value={newText} 
                  onChange={(e) => setNewText(e.target.value)} 
                  required 
                  rows="4"
                  placeholder=" "
                  id="client-feedback"
                />
                <label htmlFor="client-feedback">Describe our craftsmanship, timing, and structural execution...</label>
              </div>

              <button type="submit" className="premium-form-submit-btn">
                Publish Testimonial Permanently <FaArrowRight style={{ marginLeft: "8px" }} />
              </button>
            </form>
          </div>
        </section>

        {/* DYNAMIC BOTTOM ENGAGEMENT CTA BLOCK */}
        <section className="contact-callout-panel">
          <div className="callout-inner-content">
            <h2>Ready to Construct Your Vision?</h2>
            <p>Partner with an agile, reliable South African contracting team. Reach out to Ngcinga Zam (Pty) Ltd today to set up your onsite layout estimation or structural quote consult.</p>
            <Link to="/contact" className="cta-callout-action-btn">
              Get Your Free Quotation Today
            </Link>
          </div>
        </section>

      </main>
    </>
  );
};

export default HomePage;