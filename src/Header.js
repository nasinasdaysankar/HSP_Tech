import React from 'react';
import hspLogo from './logohsr.jpeg';

// The onKeepInTouchClick prop has been removed from here
const Header = ({ onAboutClick }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
           <img src={hspLogo} alt="HSP Technologies Logo" className="logo-img" />
           <a href="#home">HSP Technologies</a>
        </div>
        <nav>
          <ul>
            <li><a href="#home">🏠 Home</a></li>
            <li><button className="nav-button" onClick={onAboutClick}>ℹ️ About</button></li>
            <li><a href="#services">🛠️ Services</a></li>
          
            <li><a href="#contact">📧 Contact Us</a></li>
            {/* The list item for the button has been completely removed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;