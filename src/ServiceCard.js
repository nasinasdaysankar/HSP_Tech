// src/components/ServiceCard.js

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ category, items, index, imageUrl }) => {
  // --- THIS LINE IS NOW FIXED ---
  const [isVisible, setIsVisible] = useState(false); 
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`service-split-card ${isVisible ? 'slide-rotate-in' : ''}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <img src={imageUrl} alt={`${category} image`} className="service-image" />
      <h3>{category}</h3>
      
      <ul>
        {items.map((item, itemIndex) => {
          
          // Check if item is an object
          if (typeof item === 'object' && item !== null) {
            
            // Case 1: It's an object with a 'path' (render a Link)
            if (item.path) {
              return (
                <li key={itemIndex}>
                  <Link 
                    to={item.path} 
                    className={item.highlight ? 'highlight-text' : ''}
                  >
                    {item.text}
                  </Link>
                </li>
              );
            }
            
            // Case 2: It's an object without a 'path' (render a span)
            return (
              <li key={itemIndex}>
                <span className={item.highlight ? 'highlight-text' : ''}>
                  {item.text}
                </span>
              </li>
            );
          }

          // Case 3: It's just a string (render as is)
          return <li key={itemIndex}>{item}</li>;
          
        })}
      </ul>
    </div>
  );
};

export default ServiceCard;