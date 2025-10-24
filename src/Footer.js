// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom'; // <-- 1. IMPORT Link
import { HashLink } from 'react-router-hash-link'; // <-- 2. IMPORT HashLink

const Footer = () => {
  return (
    // This id="contact" is correct and matches the Header link
    <footer id="contact" className="footer">
      <div className="container footer-grid">
        
        {/* Column 1: Updated "About" Information */}
        <div className="footer-about">
          <h3>HSP Technologies</h3>
          <p>
            Empowering researchers worldwide with comprehensive academic services and publication support.
          </p>
        </div>

        {/* Column 2: New "Our Services" List */}
        <div className="footer-links">
          <h4>Our Services</h4>
          <ul>
            {/* 3. Changed all <a> tags to <HashLink> */}
            <li><HashLink smooth to="/#services">SCIE Publications</HashLink></li>
            <li><HashLink smooth to="/#services">Scopus Publications</HashLink></li>
            <li><HashLink smooth to="/#services">Patent Applications</HashLink></li>
            <li><HashLink smooth to="/#services">Funding Proposals</HashLink></li>
            <li><HashLink smooth to="/#services">Conference Support</HashLink></li>
            <li><HashLink smooth to="/#services">Writing Services</HashLink></li>
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

        {/* Column 4: Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {/* 4. Changed <a> tags to <Link> and <HashLink> */}
            <li><Link to="/">Home</Link></li>
            <li><HashLink smooth to="/#about">About Us</HashLink></li>
            <li><HashLink smooth to="/#journals">Journals</HashLink></li>
            <li><HashLink smooth to="/#books">Books</HashLink></li>
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