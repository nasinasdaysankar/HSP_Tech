// src/components/ServiceCard.js

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ category, items, index, imageUrl }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const node = cardRef.current; // FIXED: capture the node

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node); // FIXED: cleanup uses saved node
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`service-split-card ${isVisible ? 'slide-rotate-in' : ''}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* FIXED: alt text - removed the word "image" */}
      <img src={imageUrl} alt={category} className="service-image" />

      <h3>{category}</h3>

      <ul>
        {items.map((item, itemIndex) => {
          if (typeof item === 'object' && item !== null) {
            // Case 1: Object with path → Link
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

            // Case 2: Object without path → span
            return (
              <li key={itemIndex}>
                <span className={item.highlight ? 'highlight-text' : ''}>
                  {item.text}
                </span>
              </li>
            );
          }

          // Case 3: Plain string
          return <li key={itemIndex}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ServiceCard;
