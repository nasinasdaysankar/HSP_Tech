// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-grid">
        
        {/* Column 1: Updated "About" Information */}
        <div className="footer-about">
          <h3>HSP Technologies</h3>
          <p>
            Empowering researchers worldwide with comprehensive academic services and publication support.
          </p>
          {/* You can add social media icons here if you have them */}
        </div>

        {/* Column 2: New "Our Services" List */}
        <div className="footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#services">SCIE Publications</a></li>
            <li><a href="#services">Scopus Publications</a></li>
            <li><a href="#services">Patent Applications</a></li>
            <li><a href="#services">Funding Proposals</a></li>
            <li><a href="#services">Conference Support</a></li>
            <li><a href="#services">Writing Services</a></li>
          </ul>
        </div>
        
        {/* Column 3: Updated "Contact Info" */}
        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p>📍 Tirupati, Andhra Pradesh, India</p>
          <p>📧 directorhspresearchacademy@gmail.com</p>
          <p>📧 hsptech@gmail.com</p>
          <p>📞 +91-9150450450</p>
          <p>📱 +91-9150450450 (WhatsApp Available 24/7)</p>
          <p>⏰ 24/7 Call & WhatsApp Support</p>
        </div>

        {/* Column 4: Quick Links (from your original code) */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#journals">Journals</a></li>
            <li><a href="#books">Books</a></li>
          </ul>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 HSP Technologies. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;