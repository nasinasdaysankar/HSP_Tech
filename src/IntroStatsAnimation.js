import React, { useState, useEffect } from 'react';

// Data for the stats
const statsData = [
  { icon: '📖', number: '1000+', label: 'Publications' },
  { icon: '⚖️', number: '500+', label: 'Patents Granted' },
  { icon: '🧑‍🔬', number: '2000+', label: 'Researchers Helped' },
  { icon: '🌍', number: '50+', label: 'Countries Served' }
];

const IntroStatsAnimation = ({ onAnimationComplete }) => {
  const [stage, setStage] = useState('start');

  useEffect(() => {
    // Sequence of the animation
    const timer1 = setTimeout(() => setStage('statsVisible'), 500); // Stats appear
    const timer2 = setTimeout(() => setStage('statsFadingOut'), 3500); // Stats start to fade
    const timer3 = setTimeout(() => {
      setStage('complete'); // Animation is done
      onAnimationComplete(); // Notify App.js to show the main content
    }, 4500); // Total duration

    // Cleanup timers if the component unmounts
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onAnimationComplete]);

  // Don't render anything if the animation is complete
  if (stage === 'complete') {
    return null;
  }

  return (
    <div className={`intro-overlay ${stage}`}>
      <div className="stats-grid">
        {statsData.map((stat, index) => (
          <div className="stat-item" key={index} style={{ transitionDelay: `${index * 100}ms` }}>
            <div className="stat-icon">{stat.icon}</div>
            <h3 className="stat-number">{stat.number}</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntroStatsAnimation;