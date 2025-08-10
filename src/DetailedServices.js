// src/components/DetailedServices.js

import React, { useState, useEffect, useRef } from 'react'; // <-- IMPORT hooks
import ServiceCard from './ServiceCard';

// The servicesData array remains the same
const servicesData = [
    { 
        category: 'Journals Publication', 
        items: ['Science Citation Index Expanded (SCIE)', 'Social Sciences Citation Index (SSCI)', 'Arts & Humanities Citation Index (AHCI)', 'Emerging Sources Citation Index (ESCI)', 'Scopus Index Journal Publications', 'UGC CARE Journal Publications', 'ABDC Journal Publications', 'Google Scholar Journal Publications'],
        imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop'
    },
    { 
        category: 'Book & Chapter Publication', 
        items: ['Scopus and WOS (ESCI) Indexed Book Series', 'Scopus and WOS (ESCI) Indexed Lecture Notes', 'HSP Books Publishing House', 'National Publishers Support', 'International Publishers Support'],
        imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1974&auto=format&fit=crop'
    },
    { 
        category: 'Conference Publication', 
        items: ['Scopus and WOS (ESCI) Indexed Conference Proceedings Publications', 'Scopus Indexed Conference Proceedings Publications'],
        imageUrl: 'https://en-res.ais.cn/resource/editor/202310/303231030172532583.jpg'
    },
    { 
        category: 'Textbook Publication', 
        items: ['National Publishers Support', 'International Publishers Support', { text: 'HSP Books Publishing House', highlight: true }],
        imageUrl: 'https://media.istockphoto.com/id/487916256/photo/pen-pencil-study-textbooks.jpg?s=612x612&w=0&k=20&c=F_Ld-0JizqlJx8_4LW3WYjNgov3q89MbCY2JMAy2uIg='
    },
    { 
        category: 'Patent & Copyright', 
        items: ['Indian Utility Patent Publications', 'Indian Design Patent Publications', 'Indian Design Patent Grant Publications', 'International Patent Grant Publications', 'Copyright Publications'],
        imageUrl: 'https://framerusercontent.com/images/bWWWUSBQZUnA1uliw9SFI4s78.png'
    },
    { 
        category: 'Funding Proposal', 
        items: ['AICTE Sponsored Research Schemes', 'DST Sponsored Research Schemes', 'SERB Sponsored Research Schemes', 'UGC Sponsored Research Schemes', 'CSIR Sponsored Research Schemes', 'DRDO Sponsored Research Schemes', 'ISRO Sponsored Research Schemes', 'ANRF Sponsored Research Schemes', 'BIRAC Sponsored Research Schemes', 'ICMR Sponsored Research Schemes'],
        imageUrl: 'https://media.istockphoto.com/id/1453843862/photo/business-meeting.jpg?s=612x612&w=0&k=20&c=4k9H7agmpn92B7bkUywvkK5Ckwm9Y8f8QrGs4DRDWpE='
    },
    { 
        category: 'Writing Services', 
        items: ['Article Writing Support', 'Synopsis Writing Support', 'Thesis Writing Support', 'Plagiarism Support', 'AI Report and Correction Support', 'Grammar Correction Support', 'Prototype Implementation Assistance'],
        imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop'
    },
];

const DetailedServices = () => {
  // --- NEW LOGIC TO DETECT SCROLLING ---
  const titleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element is intersecting (visible), set isVisible to true
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // If it's not visible, set to false to allow re-animation
          setIsVisible(false);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the title area is visible
    );

    const currentRef = titleRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  // --- END OF NEW LOGIC ---

  return (
    <section id="services" className="detailed-services">
      {/* Attach the ref to the element we want to observe */}
      <div className="service-title-background-area" ref={titleRef}>
        <div className="container">
          {/* Add a class conditionally based on the isVisible state */}
          <div className={`services-title-wrapper ${isVisible ? 'is-visible' : ''}`}>
            <h2>
              <span className="title-word-wrapper"><span className="title-word">Our</span></span>
              <span className="title-word-wrapper"><span className="title-word">Comprehensive</span></span>
              <span className="title-word-wrapper"><span className="title-word">Services</span></span>
            </h2>
            <p className="services-subtitle">
              We provide end-to-end support for all your academic and research needs.
            </p>
          </div>
        </div>
      </div>

      <div className="horizontal-scroll-container">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            category={service.category}
            items={service.items}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default DetailedServices;