import React, { useState, useEffect, useRef } from 'react';
import ServiceCard from './ServiceCard'; // Make sure this path is correct

// The servicesData array with the new "Admission Services" category added
const servicesData = [
    {
        category: 'Journals Publication',
        items: [
            'Science Citation Index Expanded (SCIE)', 
            'Social Sciences Citation Index (SSCI)', 
            'Arts & Humanities Citation Index (AHCI)', 
            'Emerging Sources Citation Index (ESCI)', 
            'Scopus Index Journal Publications', 
            'UGC CARE Journal Publications', 
            'ABDC Journal Publications', 
            'Google Scholar Journal Publications',
            // --- 1. NEW ITEM ADDED HERE ---
            { 
                text: 'HSP JOURNALS', 
                highlight: true, 
                path: '/hsp-journals' // This is the new link
            }
        ],
        imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop'
    },
    {
        category: 'Book & Chapter Publication',
        items: ['Scopus and WOS (ESCI) Indexed Book Series', 'Scopus and WOS (ESCI) Indexed Lecture Notes', 'HSP Books Publishing House', 'National Publishers Support', 'International Publishers Support'],
        imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1974&auto=format&fit=crop'
    },
    {
        category: 'Admission Services',
        items: ['B.Tech', 'M.Tech', 'PhD', 'LLB', 'Diploma', 'Any Degree', 'Post Doctoral Fellowship', 'Master of Business Administration'],
        imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop' 
    },
    {
        category: 'Conference Publication',
        items: ['Scopus and WOS (ESCI) Indexed Conference Proceedings Publications', 'Scopus Indexed Conference Proceedings Publications'],
        imageUrl: 'https://en-res.ais.cn/resource/editor/202310/303231030172532583.jpg'
    },
    {
        category: 'Textbook Publication',
        items: [
            'National Publishers Support', 
            'International Publishers Support', 
            { 
                text: 'HSP Books Publishing House', 
                highlight: true, 
                path: '/hsp-books' 
            }
        ],
        imageUrl: 'https://media.istockphoto.com/id/487916256/photo/pen-pencil-study-textbooks.jpg?s=612x612&w=0&k=20&c=4k9H7agmpn92B7bkUywvkK5Ckwm9Y8f8QrGs4DRDWpE='
    },
    {
        category: 'Patent & Copyright',
        items: ['Indian Utility Patent Publications', 'Indian Design Patent Publications', 'Indian Design Patent Publications', 'International Patent Grant Publications', 'Copyright Publications'],
        imageUrl: 'https://framerusercontent.com/images/bWWWUSBQZUnA1uliw9SFI4s78.png'
    },
    {
        category: 'Funding Proposals',
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
  const titleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
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

  return (
    <section id="services" className="detailed-services">
      <div className="service-title-background-area" ref={titleRef}>
        <div className="container">
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