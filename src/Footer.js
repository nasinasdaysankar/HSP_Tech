// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <h3>HSP Research Navigator</h3>
          <p>
            Your trusted partner in navigating the complexities of academic research, publication, and funding.
          </p>
          {/* Add social media icons here */}
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#journals">Journals</a></li>
            <li><a href="#books">Books</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p>📍 Tirupati, Andhra Pradesh, India</p>
          <p>📧 directorhspresearchacademy@gmail.com</p>
          <p>📞 +91-9150450450</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 HSP Research Navigator. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;