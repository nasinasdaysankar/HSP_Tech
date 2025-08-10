import React, { useState } from 'react';
import hspLogo from './logohsr.jpeg';

const Header = ({ onAboutClick }) => {
  // State to manage whether the mobile menu is open or closed
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
           <img src={hspLogo} alt="HSP Technologies Logo" className="logo-img" />
           <a href="#home">HSP Technologies</a>
        </div>

        {/* The 'nav' element now gets a conditional class */}
        <nav className={isMobileMenuOpen ? 'mobile-menu-open' : ''}>
          {/* We add a close button inside the mobile menu */}
          <button className="close-mobile-menu" onClick={toggleMobileMenu}>&times;</button>
          <ul>
            <li><a href="#home" onClick={toggleMobileMenu}>🏠 Home</a></li>
            <li><button className="nav-button" onClick={() => { onAboutClick(); toggleMobileMenu(); }}>ℹ️ About</button></li>
            <li><a href="#services" onClick={toggleMobileMenu}>🛠️ Services</a></li>
            <li><a href="#contact" onClick={toggleMobileMenu}>📧 Contact Us</a></li>
          </ul>
        </nav>

        {/* This is the hamburger icon button, only visible on mobile */}
        <button className="hamburger-button" onClick={toggleMobileMenu}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </button>
      </div>
    </header>
  );
};

export default Header;