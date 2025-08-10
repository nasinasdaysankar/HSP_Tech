import React, { useState, useEffect, useRef } from 'react';

const ServiceCard = ({ category, items, index, imageUrl }) => {
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
        {items.map((item, itemIndex) => (
          <li key={itemIndex}>
            {typeof item === 'object' && item.highlight ? (
              <span className="highlight-text">{item.text}</span>
            ) : (
              item
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;