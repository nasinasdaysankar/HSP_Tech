// src/components/Services.js
import React from 'react';

// Data for the services cards
const servicesData = [
  {
    icon: '📜', // Placeholder icon
    title: 'Journal Publication',
    description: 'Support for SCIE, Scopus, WOS, and UGC CARE publications.',
  },
  {
    icon: '📚', // Placeholder icon
    title: 'Book Publication',
    description: 'Publish book chapters and textbooks with national and international publishers.',
  },
  {
    icon: '🤝', // Placeholder icon
    title: 'Conference Services',
    description: 'Assistance for Scopus indexed and other academic conferences.',
  },
  {
    icon: '©️', // Placeholder icon
    title: 'Patent & Copyright',
    description: 'Guidance and filing for Indian Utility and Design Patents.',
  },
  {
    icon: '💰', // Placeholder icon
    title: 'Funding Proposals',
    description: 'Assistance for AICTE, DST, DRDO, and ISRO sponsored research schemes.',
  },
  {
    icon: '✍️', // Placeholder icon
    title: 'Writing Services',
    description: 'Expert support for article writing, synopsis, and grammar correction.',
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2>Our Premier Services</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;