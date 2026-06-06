// src/components/ContactPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaDirections, FaPaperPlane } from "react-icons/fa";
import "./ContactPage.css";

const ContactPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Controlled form state tracking variables
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  // Handle changes across input fields dynamically
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  // Process data validation and redirect string generation on submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const primaryWhatsAppNumber = "27784102099"; // Target business line configuration
    
    // Constructing a clean, highly legible message structure for the receiver
    const whatsappText = 
`*New Quote Inquiry - Ngcinga Zam*
----------------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone || "Not Provided"}
*Email:* ${formData.email}

*Project Description:*
${formData.message}
----------------------------------`;

    // Encode text parameters safely to prevent character breaking
    const encodedMessage = encodeURIComponent(whatsappText);
    const whatsappUrl = `https://wa.me/${primaryWhatsAppNumber}?text=${encodedMessage}`;

    // Open up WhatsApp workspace environment seamlessly in a safe background thread
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

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
        <ul className={`links ${menuOpen ? "show" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact" className="active">Contact</Link></li>
        </ul>
      </nav>

      {/* HERO HEADER */}
      <header className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="subtitle">Get In Touch</span>
          <h1>Let's Build Your Vision</h1>
          <p>Have a project in Cape Town? Reach out today for a transparent, professional, and completely free consultation.</p>
        </div>
      </header>

      <main className="contact-page-container">
        <div className="contact-grid">
          
          {/* LEFT SIDE: DIRECT CHANNELS & HOURS */}
          <div className="contact-sidebar">
            <section className="info-card">
              <h3>Contact Information</h3>
              <div className="accent-line-short"></div>
              
              <div className="info-item">
                <FaPhone className="icon-orange" />
                <div>
                  <h4>Call Direct</h4>
                  <a href="tel:+27818368090" className="sidebar-link">+27 81 836 8090</a>
                </div>
              </div>

              <div className="info-item">
                <FaEnvelope className="icon-orange" />
                <div>
                  <h4>Email Us</h4>
                  <a href="mailto:zamngcinga@gmail.com" className="sidebar-link">zamngcinga@gmail.com</a>
                </div>
              </div>

              <div className="info-item">
                <FaMapMarkerAlt className="icon-orange" />
                <div>
                  <h4>Our Base</h4>
                  <p className="sidebar-text">23 River Crescent, Stratford Green, Eerste River, Cape Town</p>
                </div>
              </div>

              {/* Quick Floating Action Buttons */}
              <div className="quick-action-cluster">
                <a href="https://wa.me/27784102099" target="_blank" rel="noopener noreferrer" className="btn-action btn-wa">
                  <FaWhatsapp /> WhatsApp Chat
                </a>
                <a href="https://www.google.com/maps/dir/?api=1&destination=23+Rier+Crescent+Stratford+Green+Eerste+River+Cape+Town+South+Africa"
                   target="_blank" rel="noopener noreferrer" className="btn-action btn-maps">
                  <FaDirections /> Get Directions
                </a>
              </div>
            </section>

            {/* INTEGRATED BUSINESS HOURS */}
            <section className="info-card hours-card">
              <h3><FaClock className="header-icon-inline" /> Operational Hours</h3>
              <div className="accent-line-short"></div>
              <div className="hours-row">
                <span className="days-label">Sunday – Friday</span>
                <span className="time-badge">07:00 AM – 18:00 PM</span>
              </div>
              <div className="hours-row closed">
                <span className="days-label">Sat & Public Holidays</span>
                <span className="closed-badge">Closed</span>
              </div>
            </section>
          </div>

          {/* RIGHT SIDE: PREMIUM MESSAGE INTERFACE */}
          <div className="contact-main-form">
            <section className="form-card">
              <h3>Request a Free Quote</h3>
              <div className="accent-line-short"></div>
              <p className="form-intro">Fill out the form below and an experienced structural manager will get back to you within 24 hours.</p>
              
              {/* Linked directly to the handleFormSubmit engine rule tracking */}
              <form onSubmit={handleFormSubmit}>
                <div className="form-group-row">
                  <div className="input-block">
                    <label htmlFor="name">Your Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="John Doe" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="input-block">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="081 234 5678" 
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="input-block">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className="input-block">
                  <label htmlFor="message">Project Description *</label>
                  <textarea 
                    id="message" 
                    placeholder="Tell us about your custom gates, built-in cupboards, or Nutec housing requirements..." 
                    rows="6" 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send via WhatsApp <FaPaperPlane className="submit-icon" />
                </button>
              </form>
            </section>
          </div>

        </div>

        {/* FULL WIDTH MAP SECTION */}
        <section className="map-wrapper">
          <div className="map-header">
            <h3>Interactive Operations Map</h3>
            <p>Serving Eerste River, Kuils River, and the greater Cape Town area.</p>
          </div>
          <div className="map-frame-container">
            <iframe
              title="Ngcinga Zam Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.289349409!2d18.7309!3d-34.0082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc4b123456789%3A0xabcdef987654321!2s23%20Rier%20Crescent%2C%20Stratford%20Green%2C%20Eerste%20River%2C%20Cape%20Town%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1710000000000!5m2!1sen!2sza"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;