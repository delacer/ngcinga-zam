// src/components/Footer.jsx
import React from "react";
// 1. Import Link to enable immediate internal routing transitions
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaTiktok, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* COLUMN 1: CONTACT INFO */}
        <div className="footer-column contact-info">
          <h3>Contact Details</h3>
          <div className="accent-line-footer"></div>
          
          <div className="contact-item">
            <FaPhone className="footer-icon" />
            <a href="tel:+27818368090" className="contact-link">+27 81 836 8090</a>
          </div>
          
          <div className="contact-item">
            <FaWhatsapp className="footer-icon whatsapp-icon" />
            <a href="https://wa.me/27784102099" target="_blank" rel="noopener noreferrer" className="contact-link">+27 78 410 2099</a>
          </div>
          
          <div className="contact-item">
            <FaEnvelope className="footer-icon" />
            <a href="mailto:zamngcinga@gmail.com" className="contact-link">zamngcinga@gmail.com</a>
          </div>
          
          <div className="contact-item alignment-fix">
            <FaMapMarkerAlt className="footer-icon structural-marker" />
            <span className="address-text">23 River Crescent, Stratford Green, Eerste River</span>
          </div>
        </div>

        {/* COLUMN 2: QUICK LINKS - OPTIMIZED FOR INSTANT SPEED */}
        <div className="footer-column quick-links">
          <h3>Quick Links</h3>
          <div className="accent-line-footer"></div>
          <ul className="q-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* COLUMN 3: BUSINESS HOURS */}
        <div className="footer-column business-hrs">
          <h3>Business Hours</h3>
          <div className="accent-line-footer"></div>
          <div className="hours-block">
            <FaClock className="footer-icon clock-icon" />
            <div>
              <p className="days">Sun - Fri</p>
              <p className="time">07:00 AM - 18:00 PM</p>
            </div>
          </div>
          <div className="hours-block closed-days">
            <p className="days">Sat & Public Holidays</p>
            <p className="status-closed">Closed</p>
          </div>
        </div>

        {/* COLUMN 4: SOCIAL MEDIA CONNECT */}
        <div className="footer-column social-connect">
          <h3>Connect With Us</h3>
          <div className="accent-line-footer"></div>
          <p className="social-text">Follow our active building sites, transformations, and video portfolios daily.</p>
          <div className="social-media-icons">
            <a href="https://www.facebook.com/share/1M2czm5XrF/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://www.tiktok.com/@ngcinga.zam?_r=1&_t=ZS-96gB0kr75PE" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok /></a>
            <a href="mailto:zamngcinga@gmail.com" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>

      </div>

      {/* LOWER BASE: LEGAL CHANNELS */}
      <div className="footer-bottom">
        <div className="bottom-container">
          <p>&copy; {currentYear} Ngcinga Zam (Pty) Ltd. All rights reserved.</p>
          <div className="legal-links">
            <Link to="/policy">Privacy Policy</Link>
            <span className="divider">|</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;