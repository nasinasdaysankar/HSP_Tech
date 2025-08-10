import React, { useEffect } from 'react';

const AboutModal = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="modal-body">
          <h2>About HSP Technologies</h2>
          <p>
            HSP Technologies is a premier organization dedicated to advancing academic and research excellence. We provide a comprehensive suite of services designed to support researchers, scholars, and innovators at every stage of their journey. From securing publications in high-impact journals to filing patents and obtaining research funding, our expert team is your trusted partner.
          </p>
          
          <div className="chairman-message">
            <h3>Chairman's Message</h3>
            <p>
              "Our mission is to empower the brilliant minds of today by providing a streamlined path to publication, innovation, and academic success. We are committed to upholding the highest standards of quality and integrity in all our endeavors."
            </p>
          </div>
          
          <div className="mission-vision-values">
            <div className="value-item">
              <div className="value-icon mission-icon">
                <span>🎯</span> {/* Mission icon */}
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower researchers and academics worldwide by delivering innovative solutions for publication, patent filing, and funding opportunities.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon vision-icon">
                <span>🔭</span> {/* Vision icon */}
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the leading global partner in academic and research advancement, driving innovation and supporting scholars in achieving international recognition.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon values-icon">
                <span>✨</span> {/* Values icon */}
              </div>
              <h3>Our Values</h3>
              <p>
                Integrity, Excellence, Collaboration, and Innovation – these core principles guide our commitment to supporting the academic community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;