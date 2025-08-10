import React from 'react';

const HeroSection = ({ onKeepInTouchClick }) => {
  return (
    
    <section id="home" className="hero-section-fullscreen">
      <div className="hero-overlay"></div>
      <div className="mountain-image-shape"></div>
       <button className="floating-keep-in-touch" onClick={onKeepInTouchClick}>
        Keep In Touch
      </button>
      <div className="hero-content">
        <h1 className="hero-headline">
          Premier Academic Research & Publication Services
        </h1>
        <p className="hero-subheadline">
          Empowering researchers and academics with comprehensive publication, patent, and funding proposal services. Your trusted partner in academic excellence since inception.
        </p>
        <button className="hero-button">
          Get Started
        </button>
      </div>

     
    </section>
  );
};

export default HeroSection;