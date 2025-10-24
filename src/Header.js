import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // <-- 1. IMPORT Link
import { HashLink } from 'react-router-hash-link'; // <-- 2. IMPORT HashLink
import hspLogo from './logohsr.jpeg';

const Header = ({ onAboutClick }) => {
  // State to manage whether the mobile menu is open or closed
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // This function is for the 'About' button
  const handleAboutClick = () => {
    onAboutClick();
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
           <img src={hspLogo} alt="HSP Technologies Logo" className="logo-img" />
           {/* 3. Changed <a> to <Link> to navigate to Home */}
           <Link to="/">HSP Technologies</Link>
        </div>

        {/* The 'nav' element now gets a conditional class */}
        <nav className={isMobileMenuOpen ? 'mobile-menu-open' : ''}>
          {/* We add a close button inside the mobile menu */}
          <button className="close-mobile-menu" onClick={toggleMobileMenu}>&times;</button>
          <ul>
            {/* 4. Changed <a> to <Link> for Home */}
            <li><Link to="/" onClick={toggleMobileMenu}>🏠 Home</Link></li>
            
            {/* 5. Kept 'About' as a button, but it now uses the new handler */}
            <li><button className="nav-button" onClick={handleAboutClick}>ℹ️ About</button></li>
            
            {/* 6. Changed <a> to <HashLink> for Services */}
            <li><HashLink smooth to="/#services" onClick={toggleMobileMenu}>🛠️ Services</HashLink></li>
            
            {/* 7. Changed <a> to <HashLink> for Contact Us */}
            <li><HashLink smooth to="/#contact" onClick={toggleMobileMenu}>📧 Contact Us</HashLink></li>
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