// src/components/ScrollingLogos.js
import React from 'react';

// 1. Import the logos directly from your assets folder
import scopusLogo from './image copy 2.png';
import ieeeLogo from './image copy 3.png';
import ugcLogo from './image copy.png';
import webofscienceLogo from './image.png';
import elsevierLogo from './image copy 4.png';

// 2. Use the imported logos in the array
const logos = [
  scopusLogo,
  ieeeLogo,
  ugcLogo,
  webofscienceLogo,
  elsevierLogo
];

// We duplicate the logos array to create a seamless loop
const allLogos = [...logos, ...logos];

const ScrollingLogos = () => {
  return (
    <div className="scrolling-logos-section">
      <div className="logos-track">
        {allLogos.map((logoSrc, index) => (
          <div className="logo-item" key={index}>
            <img src={logoSrc} alt={`Partner logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingLogos;