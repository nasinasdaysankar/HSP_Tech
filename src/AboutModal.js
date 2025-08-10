// src/components/AboutModal.js
import React, { useEffect } from 'react';

// The `onClose` prop is a function passed from App.js to close the modal
const AboutModal = ({ onClose }) => {
  // This effect disables scrolling on the body when the modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    // When the component is unmounted, re-enable scrolling
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    // The modal-overlay is the dark background. Clicking it closes the modal.
    <div className="modal-overlay" onClick={onClose}>
      {/* We use stopPropagation to prevent a click inside the content from closing the modal */}
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
        </div>

      </div>
    </div>
  );
};

export default AboutModal;