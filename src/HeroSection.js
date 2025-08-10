import React from 'react';

// Data for the stats
const statsData = [
  { icon: '📖', number: '1000+', label: 'Publications' },
  { icon: '⚖️', number: '500+', label: 'Patents Granted' },
  { icon: '🧑‍🔬', number: '2000+', label: 'Researchers Helped' },
  { icon: '🌍', number: '50+', label: 'Countries Served' }
];

const HeroSection = () => {
  return (
    <section id="home" className="hero-section-fullscreen">
      <div className="hero-overlay"></div>
      <div className="mountain-image-shape"></div>
      
      {/* Main hero content at the top */}
      <div className="hero-content">
        <h1 className="hero-headline">
          Premier Academic Research & Publication Services
        </h1>
<p className="hero-subheadline">
  Empowering researchers and academics with comprehensive publication, patent, and 
  <br />
  funding proposal services. Your trusted partner in academic excellence since inception.
</p>
        <div className="hero-button-group">
          <button className="hero-button primary">Get Started Today</button>
          <button className="hero-button secondary">Explore Services</button>
        </div>
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div className="stat-item" key={index}>
              <div className="stat-icon">{stat.icon}</div>
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;